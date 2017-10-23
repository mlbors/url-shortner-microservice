/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * URL Shortener Microservice
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.10
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const http = require('http')
const express = require('express')
const mongodb = require('mongodb')

const index = require('./routes/index');

/************************************************************/
/************************************************************/

/********************/
/***** SETTINGS *****/
/********************/

const hostname = '0.0.0.0'
const port = process.env.PORT || 3000
const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/shortner-microservice';

/************************************************************/
/************************************************************/

/********************/
/***** DATABASE *****/
/********************/

const MongoClient = mongodb.MongoClient

/************************************************************/
/************************************************************/

/***************/
/***** APP *****/
/***************/

const app = express('mongodb')

MongoClient.connect(dbURL, (err, db) => {

  if (err) {
    throw new Error('Database failed to connect!');
  } else {
      console.log('Successfully connected to MongoDB on port 27017.');
  }

  /************************************************************/
  /************************************************************/

  /******************/
  /***** ROUTES *****/
  /******************/

  app.use('/', index)

  app.use((req, res, next) => {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  /************************************************************/
  /************************************************************/

  /******************/
  /***** LISTEN *****/
  /******************/

  app.listen(port, hostname, () => {
    console.log('Server running at http://${' + hostname + '}:${' + port + '}/')
  })

})