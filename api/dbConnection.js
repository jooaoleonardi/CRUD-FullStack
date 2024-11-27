import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "An29jo02.",
    database: "crud"
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados: " + err.stack);
        return;
    }
    console.log("Conectado ao banco de dados como ID " + db.threadId);
});