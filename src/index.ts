// Imports

import app from "./app";
import morgan from 'morgan'

morgan('dev')

const main = async () => {
  await app.listen(app.get("port"));
  console.log(`Servidor en puerto: ${app.get("port")}`);
};

main();
