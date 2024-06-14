import { Router } from "express";

import { AsignacionRoutes } from "./asignacion/routes";
import { PersonajeRoutes } from "./personaje/routes";
import { SerieRoutes } from "./serie/routes";
import { GithubRoutes } from "./github/github.routes";

export class AppRoutes { 

    static get routes(): Router {
        const router = Router();

        router.use('/asignacion', AsignacionRoutes.routes);
        router.use('/personaje', PersonajeRoutes.routes);
        router.use('/serie', SerieRoutes.routes);
        //github
        router.use('/github', GithubRoutes.routes );
        return router;
    }
}
