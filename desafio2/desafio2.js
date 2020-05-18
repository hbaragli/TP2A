const mongoclient = require('mongodb').MongoClient;
const chalk = require('chalk');

const uri = "mongodb+srv://hbaragli:12345@cluster0-hc4zf.mongodb.net/test?retryWrites=true&w=majority";
const client = new mongoclient(uri, {useNewUrlParser:true, useUnifiedTopology:true});



const nuevoInventor = {
    first: "Leonardo",
    last: "Da Vinci",
    year: 1452
}


    //Crear Inventor

    async function CrearInventor(inventor){
        try{
            const client = new mongoclient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            let conexion = await client.connect();
            let inventores = conexion.db("desafio2").collection("inventors");
            await inventores.insertOne(inventor)
            console.log(chalk.redBright("Inventor agregado con exito a la base"));
            conexion.close();
        } catch (error) {
            console.log(chalk.redBright("Error:" + error))
        }
    }

   
    //Leer Inventor
    async function LeerInventor(apellido){
        try{
            const client = new mongoclient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            let conexion = await client.connect();
            let inventores = conexion.db("desafio2").collection("inventors");
            let auxiliar = await inventores.find({last: apellido }).toArray();
            console.log(chalk.greenBright("Datos del inventor:"));
            console.log(auxiliar);
            conexion.close();
        } catch (error) {
            console.log(chalk.greenBright("Error:" + error))
        }
    }

    
    //Actualizar Inventor

    async function ActualizarInventor(apellido, nuevoapellido){
        try{
            const client = new mongoclient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            let conexion = await client.connect();
            let inventores = conexion.db("desafio2").collection("inventors");
            await inventores.updateOne({last: apellido}, {$set: {last: nuevoapellido}});
            console.log(chalk.blueBright("Datos del inventor actualizados con exito"));
            conexion.close();
        } catch (error) {
            console.log(chalk.blueBright("Error:" + error))
        }
    }
   
   
    //Eliminar Inventor
   
    async function EliminarInventor(apellido){
        try{
            const client = new mongoclient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            let conexion = await client.connect();
            let inventores = conexion.db("desafio2").collection("inventors");
            await inventores.deleteOne({last: apellido});
            console.log(chalk.yellowBright("Inventor eliminado con exito"));
            conexion.close();
        } catch (error) {
            console.log(chalk.yellowBright("Error:" + error))
        }
    }
   

    async function Ejecutar(){
            await LeerInventor("Einstein");
            await CrearInventor(nuevoInventor);
            await ActualizarInventor("Newton", "Asimov");
            await EliminarInventor("Da Vinci");
        } 
          


Ejecutar();
    
