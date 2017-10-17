/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * DB - URL
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.10
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const mongodb = require('mongodb')

/************************************************************/
/************************************************************/

/********************/
/***** SETTINGS *****/
/********************/

const dbURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/shortner-microservice';

/************************************************************/
/************************************************************/

/********************/
/***** DATABASE *****/
/********************/

const MongoClient = mongodb.MongoClient

/************************************************************/
/************************************************************/

exports.find = (str, callback) => {

  MongoClient.connect(dbURL, (err, db) => {

    if (err) return callback(err);

    db.collection('shortner-microservice').find({
      url: str
    }).toArray(function(err, docs) {
      if (err) return callback(err);
      db.close();
      console.log(docs);
      return callback(null, docs);
    })

  })

}
