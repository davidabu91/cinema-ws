const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useFindAndModify: false })

const mongoAtlasUri = process.env.MONGO_URI || "mongodb://localhost:27017";
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));