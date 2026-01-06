const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://newchelsiis_db_user:Ue6d6yVaMcBO2eVm@cluster0.kjtanxn.mongodb.net/Reja"

mongodb.connect(connectionString, {userNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require('./app');
        const server = http.createServer(app);
        let PORT = 4001;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});

