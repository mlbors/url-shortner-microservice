/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * Routes - Index
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.10
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const express = require('express');
const validUrl = require('valid-url')
const router = express.Router();

var urlQuery = require('../db/url');

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

/*****/
/***** HOME *****/
/*****/

router.get('/', (req, res) => {
  res.end('Hello World!')
})

/************************************************************/
/************************************************************/

/*****/
/***** NEW *****/
/*****/

router.get("/new/*", (req,res) => {
  
  let url = req.params[0]
  console.log(url)

  if (validUrl.isUri(url)) {
    console.log('valid url')

    urlQuery.find(url, (err, data) => {

      if(err) {
        res.end('Valid url - error')
        return
      }
      if(data.length == 0) {
        res.end('Valid url - not found')
        return
      }

    })

  } else {
    console.log('invalid url')
    res.end('Invalid url')
  }

})

/************************************************************/
/************************************************************/

/*****/
/***** EXPORT *****/
/*****/

module.exports = router;