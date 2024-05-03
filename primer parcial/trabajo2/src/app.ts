import { llenarDatos } from "./datos/ingresoDatos";
import { buscarSeriePorId,buscarPersonajePorId,buscarAsignacionPorId } from "./datos/busquedaDatos";
import { consultarDatos } from "./datos/consultarDatos";


//punto 2 ingreso de datos
//llenarDatos();

//punto 3 busqueda por el id
buscarSeriePorId(4);
buscarPersonajePorId(8);
buscarAsignacionPorId(5);

//punto 4 consultas de datos
consultarDatos();




