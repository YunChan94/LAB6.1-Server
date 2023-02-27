const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://dungpn:dungpn@atlascluster.zfsdivl.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((result) => {
      console.log("Connected!");
      callback(result);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
