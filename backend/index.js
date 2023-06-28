// const express = require("express");
import express from 'express'
import session from 'express-session'

import mysql from 'mysql'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'
var jsonParser = bodyParser.json();
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const saltRounds = 10;

import cookieParser from 'cookie-parser'
import { hash } from 'bcrypt';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods: ["POST","GET","PUT","DELETE"],
    credentials:true
}));

app.use(cookieParser());

app.use(bodyParser.json());

// app.use(session({
//     secret: 'secret',
//     resave:false,
//     saveUnitialized:false,
//     cookie:{
//         secure:false,
//         maxAge:1000 *60 *60 *24
//     }
// }))
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port:  3306,
    database : 'proyecto'
});

connection.connect(function(error) {
    if (error) {
      console.error('Error conectando a la DB ' + error.stack);
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
    console.log("nombre", nombre);

    connection.query("select * from recetas where nombre=?", nombre, (error, results) => {
        if(error){
            console.error(error);
            res.status(500).send("Error buscando en el server :(");
        }
        else{
            if(results[0]){
                res.status(200).json(results);
            }
            else{
                const response = {
                    message: 'No se encontraron los datos',
                }
                res.status(200).json(response);
            }
        }
    })
});

 /* se busca una receta específica de la base de datos de acuerdo a la id */
 app.post("/encontrarReceta",(req, res) => {
    console.log("valor de req.body: ", req.body);
    let id=req.body.id;
    console.log("id", id);

    connection.query("select * from recetas where ID=?", id, (error, results) => {
        if(error){
            console.error(error);
            res.status(500).send("Error buscando en el server :(");
        }
        else{
            if(results[0]){
                res.status(200).json(results);
            }
            else{
                const response = {
                    message: 'No se encontraron los datos',
                }
                res.status(200).json(response);
            }
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
        connection.query("delete from recetas where id=?",id, (error, results) => {
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
app.use(express.static('uploads'));
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/recetas/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+ '-' + file.originalname)
    },
});

const upload = multer({storage})
/* se inserta una receta en la base de datos */
app.put("/agregarReceta", upload.single('imagen'),(req, res) => {
    console.log("valor de req.body: ", req.body);
    if(req.file){
        console.log("archivo recibido:", req.file)
    }
    let nombre=req.body.nombre;
    let descripcion=req.body.descripcion;
    let ingredientes=req.body.ingredientes;
    let preparacion=req.body.preparacion;

    connection.query("insert into recetas (nombre, descripcion, ingredientes, preparacion, imagen) VALUES (?,?,?,?,?)",
    [nombre, descripcion, ingredientes, preparacion, req.file.filename], (error, results) => {
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
            res.status(200).send(response);
        }
    })

});



app.get('/logout', (req,res) => {
    res.clearCookie('token');
    return res.json({Message: "Autentication error"})
})

const verifyUser = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json({Message: "we need a token"})
    }else{
        jwt.verify(token, "secreto", (error, decoded)=>{
            if(error){
                return res.json({Message: "Autentication error"})
            }else{
                req.mail=decoded.mail;
                req.tipo=decoded.tipo;
                next();
            }
        })
    }
}
app.get('/', verifyUser,(req,res) => {
    return res.json({
        Status:"success",
        email:req.mail,
        tipo:req.tipo,
    }); //
})

/* se inserta una cuenta en la base de datos */
app.put("/registro", (req, res) => {
    console.log("valor de req.body: ", req.body);
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let contrasena = req.body.contrasena;
  
    // Verificar si el correo electrónico ya está registrado
    connection.query(
      "SELECT * FROM usuarios WHERE email = ?",[email],(error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send("Error en el servidor :(");
        }

        if (results.length > 0) {
          // El correo electrónico ya está registrado
          return res.status(400).json({ error: "El correo electrónico ya está registrado" });
        }
        // El correo electrónico no está registrado, proceder con la inserción
        bcrypt.hash(contrasena, saltRounds, (error, hash) => {
          console.log(contrasena);
          if (error) {
            console.error(error);
            return res.json({ error: "Error al encriptar la contraseña" });
          }
          connection.query(
            "INSERT INTO usuarios (nombre, apellido, email, contrasena) VALUES (?,?,?,?)",
            [nombre, apellido, email, hash],
            (error, results) => {
              if (error) {
                console.error(error);
                return res.status(500).send("Error insertando en el servidor :(");
              }
              const response = {
                status: "Éxito",
                message: "Se insertaron los datos correctamente",
                data: results,
              };
              res.status(200).json(response);
            }
          );
        });
      }
    );
  });
  

app.post("/validar",jsonParser,(req, res) => {
    console.log("valor de req.body: ", req.body);
    let email=req.body.email;
    let contrasena=req.body.contrasena;
    
    connection.query("select * from usuarios where email=?", [email,contrasena], function(error, results) {
        if(error){
            console.error(error);
            res.status(500).send({ mensaje: "Error en la consulta", resultados: [] });
            return;
        }
        else{
            if (results.length > 0) {
                const hash = results[0].contrasena;
                bcrypt.compare(contrasena, hash, function (err, match) {
                    if (err) {
                      console.error(err);
                      res.status(500).send({ mensaje: "Error al comparar contraseñas", resultados: [] });
                      return;
                    }
          
                    if (match) {
                      const mail = results[0].email;
                      const tipo = results[0].tipo;
                      const token = jwt.sign({ mail, tipo }, 'secreto', { expiresIn: '1h' });
                      res.cookie('token', token);
                      res.json({ Status: "success"});
                    } else {
                      res.json({ Message: "Contraseña incorrecta" });
                    }
                });
                // console.log(req.session.email);
                // const token = jwt.sign({ mail }, 'secreto', { expiresIn: '1h' });
                // res.cookie('token',token);
                // res.json({Status: "success"})
            } else {
                res.json({Message: "no records"})
            }
        }
    })
});

app.listen(
    PORT,
    () => console.log(`me conecte al puerto ${PORT}`)
)