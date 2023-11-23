import server, { db } from "./src/app";

server.listen(3001, () => {
  db.sync({ force: true })
    .then(() => {
      console.log("Database synced");
    })
    .catch((err) => {
      console.error("Unable to connect to database: ", err);
    });
  console.log("Server listening at 3001");
});
