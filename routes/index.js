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

const urlQuery = require('../db/url');

/************************************************************/
/************************************************************/

/******************/
/***** ROUTES *****/
/******************/

/*****/
/***** HOME *****/
/*****/

router.get('/', (req, res) => {
  res.send('Hello World!')
})

/************************************************************/
/************************************************************/

/*****/
/***** NEW *****/
/*****/

router.get("/new/*", (req, res) => {
  
  let url = req.params[0]

  if (validUrl.isUri(url)) {

    urlQuery.find(url, (err, data) => {

      if (err) {
        res.send({error: err, url: url, info: 'valid url'})
        return
      }

      if (data.length == 0) {

        urlQuery.addUrl(url, req, (err, data) => {

          if (err) {
            res.send({error: 'Error while inserting url', err: err, url: url, data: data})
            return
          } 

          res.send({
            shorturl: data.shorturl,
            info: 'URL added'
          })
          return

        })
        
      } else {
        res.send({
          shorturl: data[0].shorturl,
          info: 'URL already shortned'
        })
        return
      }

      

    })

  } else {
    res.send({error: 'Invalid url', url: url})
  }

})

/************************************************************/
/************************************************************/

/*****/
/***** ID *****/
/*****/

router.get("/:id", (req, res) => {
  
  let id = req.params.id

  urlQuery.findShortUrl(id, (err, data) => {

    if (err) {
      res.send({error: 'Error while querying short url', id: id})
      return
    }

    if (data.length == 0) {
      res.send({error: 'Short url not found', id: id})
      return
    }

    res.redirect(data.url)

  })

})

/************************************************************/
/************************************************************/

/*****/
/***** EXPORT *****/
/*****/

module.exports = router;