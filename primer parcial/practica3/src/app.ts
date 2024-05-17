import routes from './routes/routes';
import { envs } from './config/envs';
import { Server } from './server';


(async()=> {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: routes,
  });

  server.start();
}

