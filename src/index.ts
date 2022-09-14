// Imports
import app from "./app";

const main = async () => {
  await app.listen(app.get("port"));
  console.log(`Servidor en puerto: ${app.get("port")}`);
};

main();
