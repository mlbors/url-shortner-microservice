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

const shortner = require('../services/shortner');

/************************************************************/
/************************************************************/

/********************/
/***** SETTINGS *****/
/********************/

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/shortner-microservice';

/************************************************************/
/************************************************************/

/********************/
/***** DATABASE *****/
/********************/

const MongoClient = mongodb.MongoClient

/************************************************************/
/************************************************************/

/********************/
/***** FIND URL *****/
/********************/

/*
 * @var String str url to search
 * @var Function callback a callback function
 */

exports.find = (str, callback) => {

  MongoClient.connect(dbURL, (err, db) => {

    if (err) return callback(err)

    db.collection('shortner-microservice').find({
      url: str
    }).toArray(function(err, result) {
      if (err) return callback(err)
      db.close()
      return callback(null, result)
    })

  })

}

/************************************************************/
/************************************************************/

/*******************/
/***** FIND ID *****/
/*******************/

/*
 * @var String id id to search
 * @var Function callback a callback function
 */

exports.findShortUrl = (id, callback) => {
  
  MongoClient.connect(dbURL, (err, db) => {

    if (err) return callback(err)

    db.collection('shortner-microservice').findOne({
      id: id
    }).then((err, result) => {
      if (err) return callback(err)
      db.close()
      return callback(null, result)
    })
  })

}

/************************************************************/
/************************************************************/

/*******************/
/***** ADD URL *****/
/*******************/

exports.addUrl = (url, req, callback) => {
  
  MongoClient.connect(dbURL, (err, db) => {

    if (err) return callback(err)

    const id = shortner.generate()

    const base = req.url.slice(5);
    const host = req.get('host');

    const item = {
      _id: id,
      url: url,
      shorturl: host + '/' + id
    }

    db.collection('shortner-microservice').insertOne(item).then((err, result) => {
      if (err) return callback(err)
      db.close()
      return callback(null, item)
    })
  })

}