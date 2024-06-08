"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./rutas/index");
const app = (0, express_1.default)();
// Habilita CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Configura las rutas
app.use('/asignaciones', index_1.asignacion);
app.use('/series', index_1.serie);
app.use('/personajes', index_1.personaje);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
