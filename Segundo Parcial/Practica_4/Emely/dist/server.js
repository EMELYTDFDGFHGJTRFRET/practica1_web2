"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexion_route_1 = __importDefault(require("./rutas/conexion.route"));
const PORT = process.env.PORT || 3000;
conexion_route_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
