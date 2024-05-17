"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacionRoutes_1 = __importDefault(require("./asignacionRoutes"));
const personajeRoutes_1 = __importDefault(require("./personajeRoutes"));
const serieRoutes_1 = __importDefault(require("./serieRoutes"));
const router = (0, express_1.Router)();
router.use('/Serie', serieRoutes_1.default);
router.use('/Personaje', personajeRoutes_1.default);
router.use('/Asignacion', asignacionRoutes_1.default);
exports.default = router;
