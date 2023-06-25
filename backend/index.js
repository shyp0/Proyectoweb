const express = require("express");
const mysql = require("mysql");
//const bcrypt = require("bcrypt");
const cors = require("cors")

const app = express();
const PORT = 5173;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port:  3306,
    database : 'proyecto'
});

connection.connect(function(error) {
    if (error) {
      console.error('Error conectando a la DB ' + err.stack);
      return;
    }
    console.log('Conexión establecida' + connection.threadId);
});

/* se obtienen todas las recetas que permanecen en la base de datos */
app.get('/obtenerRecetas', (req,res) => {
    connection.query("select * from recetas", (error,results) => {
        if(error){
            console.error(error);
            res.status(500).send("error consultando al server")
        } else{
            const response = {
                status: "success",
                message: "recetas retornados exitosamente",
                data: results
            };
            res.status(200).send(response);
        }
    })
})

 /* se busca una receta específica de la base de datos de acuerdo al nombre ingresado por el usuario */
app.post("/buscarReceta",(req, res) => {
    console.log("valor de req.body: ", req.body);
    let nombre=req.body.nombre;

    connection.query("select * from recetas where nombre=?", nombre, (error, results) => {
        if(error){
            console.error(error);
            res.status(500).send("Error insertando en el server :(");
        }
        else{
            const response = {
                status: 'Exito',
                message: 'Se encontraron los datos',
                data: results
            }
            res.status(200).json(response);
        }
    })
});

/* se elimina una receta específica de la base de datos de acuerdo al nombre ingresado por el usuario */
app.delete("/eliminarReceta",(req, res) => {
    console.log("valor de req.body: ", req.body);
    let nombre=req.body.nombre;
    console.log(nombre);

    connection.query("select * from recetas where nombre=?",[nombre],function(error,results){
        console.log(results);
        if (error) throw error;
        //if(results[0].length > 0){ }
        let id=results[0].ID;
        console.log(id)
        let nombre=results[0].nombre;
        console.log(nombre)
        connection.query("delete from recetas where id=?",id, (error, result) => {
            if (error){
                console.error(error);
                res.status(500).send("Error eliminando en el server :(");
            }else{
                //res.status(200).send("Eliminado correctamente! :3");
                const response = {
                    status: 'Exito',
                    message: 'Se eliminaron los datos bien',
                    data: results
                }
                res.status(200).json(response);
            }
        })
    });

});

/* se inserta una receta en la base de datos */
app.put("/agregarReceta",(req, res) => {
    console.log("valor de req.body: ", req.body);
    let nombre=req.body.nombre;
    let descripcion=req.body.descripcion;
    let ingredientes=req.body.ingredientes;
    let preparacion=req.body.preparacion;

    connection.query("insert into recetas (nombre, descripcion, ingredientes, preparacion) VALUES (?,?,?,?)",
    [nombre, descripcion, ingredientes, preparacion], (error, results) => {
        if(error){
            console.error(error);
            res.status(500).send("Error insertando en el server :(");
        }
        else{
            const response = {
                status: 'Exito',
                message: 'Se insertaron los datos bien',
                data: results
            }
            res.status(200).json(response);
        }
    })

});

app.listen(
    PORT,
    () => console.log(`me conecte al puerto ${PORT}`)
)