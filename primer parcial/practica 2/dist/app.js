"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const busquedaDatos_1 = require("./datos/busquedaDatos");
const consultarDatos_1 = require("./datos/consultarDatos");
//punto 2 ingreso de datos
//llenarDatos();
//punto 3 busqueda por el id
(0, busquedaDatos_1.buscarSeriePorId)(4);
(0, busquedaDatos_1.buscarPersonajePorId)(8);
(0, busquedaDatos_1.buscarAsignacionPorId)(5);
//punto 4 consultas de datos
(0, consultarDatos_1.consultarDatos)();
