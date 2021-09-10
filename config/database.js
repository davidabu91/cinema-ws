const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useFindAndModify: false })

const mongoAtlasUserUri = "mongodb+srv://CINEMAMOVIES:cinama3191@cluster0.jgnsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoAtlasUri =
    "mongodb+srv://David:ToaRonelOfek@cluster0.jgnsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUserUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));