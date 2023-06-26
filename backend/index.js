// const express = require("express");
import express from 'express'
// const mysql = require("mysql");
import mysql from 'mysql'
import cors from 'cors'
import bodyParser from 'body-parser'
//const bcrypt = require("bcrypt");
// const cors = require("cors");
// const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
import jwt from 'jsonwebtoken'
import session from 'express-session'
// const jwt = require('jsonwebtoken');
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
import cookieParser from 'cookie-parser'


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods: ["POST","GET"],
    credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave:false,
    saveUnitialized:false,
    cookie:{
        secure:false,
        maxAge:1000 *60 *60 *24
    }
}))
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
    let imagenUrl = req.body.imagen_url;

    connection.query("insert into recetas (nombre, descripcion, ingredientes, preparacion, imagen_url) VALUES (?,?,?,?,?)",
    [nombre, descripcion, ingredientes, preparacion, imagenUrl], (error, results) => {
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

app.get('/', (req,res) => {
    if(req.session.email){
        return res.json({valid:true,email:req.session.email})
    }
    else{
        return res.json({valid:false}) 
    }
})
/* se inserta una cuenta en la base de datos */
app.put("/registro",(req, res) => {
    console.log("valor de req.body: ", req.body);
    let nombre=req.body.nombre;
    let apellido=req.body.apellido;
    let email=req.body.email;
    let contrasena=req.body.contrasena;

    connection.query("insert into usuarios (nombre, apellido, email, contrasena) VALUES (?,?,?,?)",
    [nombre, apellido, email, contrasena], (error, results) => {
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
app.post("/validar",jsonParser,(req, res) => {
    console.log("valor de req.body: ", req.body);
    let email=req.body.email;
    let contrasena=req.body.contrasena;
    
    connection.query("select * from usuarios where email=? and contrasena =?", [email,contrasena], function(error, results) {
        if(error){
            console.error(error);
            res.status(500).send({ mensaje: "Error en la consulta", resultados: [] });
            return;
        }
        else{
            if (results.length > 0) {
                req.session.email = results[0].email
                console.log(req.session.email);
                const token = jwt.sign({ email: email }, 'secreto', { expiresIn: '1h' });
                res.send({ mensaje: true, resultados: results, token: token });
            } else {
              res.send({ mensaje: false, resultados: [] });
            }
        }
    })
});

app.listen(
    PORT,
    () => console.log(`me conecte al puerto ${PORT}`)
)