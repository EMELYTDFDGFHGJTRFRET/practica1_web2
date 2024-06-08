"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexion = exports.serie = exports.personaje = exports.asignacion = void 0;
const asignacion_route_1 = __importDefault(require("./asignacion.route"));
exports.asignacion = asignacion_route_1.default;
const personaje_route_1 = __importDefault(require("./personaje.route"));
exports.personaje = personaje_route_1.default;
const serie_route_1 = __importDefault(require("./serie.route"));
exports.serie = serie_route_1.default;
const conexion_route_1 = __importDefault(require("./conexion.route"));
exports.conexion = conexion_route_1.default;
