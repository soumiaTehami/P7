const mongoose = require("mongoose");
const MOT=process.env.DB_MOTDEPASSE
const username=process.env.DB_user

mongoose.connect(`mongodb+srv://${username}:${MOT}@cluster0.uqmi5.mongodb.net/Groupomania?retryWrites=true&w=majority`, function(err) {
    if (err) { throw err;
    }
    else { console.log("Connexion à MongoDB réussie !")}
  });