const { Router } = require("express");

const routes = Router();

const WorkController = require("./controllers/WorkController");

//INSERINDO DADOS DE USUARIOS
routes.post("/userpost", WorkController.store);
//PEGANDO DADOS DE USUARIOS
routes.get("/userget", WorkController.list);
//UTILIZANDO E-MAIL COMO BUSCA
routes.get("/userget/:email", WorkController.index);
//INSERINDO ID DE USUÁRIO ATUALIZADO
routes.put("/user/:id", WorkController.update);
//DELETANDO DOIDÃO
routes.delete("/user/:id", WorkController.destroy);
//FAZER A EXPORTAÇÃO DO ARQUIVO ROUTES.JS
module.exports = routes;















/*const express = require("express");

const routes = express.Router();
const TutoriaisController = require("./controllers/TutoriaisControllers");

// GET, POST, PUT e DELETE
// Salva um documento na collection Tutoriais
routes.post("/tutorial", TutoriaisController.store);
// Listar os documentos da collection Tutoriais
routes.get("/tutorial", TutoriaisController.list);
// Buscar por documento específico
routes.get("/tutorial/:id", TutoriaisController.index);
// Alterar um documento da collection Tutoriais
routes.put("/tutorial/:id", TutoriaisController.update);
// Excluir um documento da collection
routes.delete("/tutorial/:id", TutoriaisController.destroy);
module.exports = routes; */
