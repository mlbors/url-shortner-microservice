/**
 * freeCodeCamp - Back End Development Certification - API Projects
 * Services - Shortner
 * 
 * @author MLBORS
 * @version 1.0.0.0
 * @since 2017.10.10
 * @for freeCodeCamp
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const shortid = require('shortid');

/************************************************************/
/************************************************************/

/********************/
/***** GENERATE *****/
/********************/

exports.generate = () => {
  return shortid.generate()
}