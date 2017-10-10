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
const validUrl = require('valid-url')
const mongodb = require('mongodb')

/************************************************************/
/************************************************************/

/********************/
/***** SETTINGS *****/
/********************/

const hostname = '0.0.0.0'
const port = process.env.PORT || 3000
const dbURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/shortner-microservice';

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

MongoClient.connect(dbURL, function(err, db) {

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

  /*****/
  /***** HOME *****/
  /*****/

  app.get('/', (req, res) => {
    res.end('Hello World!')
  })

  /************************************************************/
  /************************************************************/

  /*****/
  /***** NEW *****/
  /*****/

  app.get("/new/*", (req,res) => {

    let url = req.params[0]
    console.log(url)

    if (validUrl.isUri(url)) {
      console.log('valid url')
      res.end('Valid url')
    } else {
      console.log('invalid url')
      res.end('Invalid url')
    }

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