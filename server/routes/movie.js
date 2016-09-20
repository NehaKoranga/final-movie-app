var express = require('express');
var router = express.Router();
var favmovie=require('../model/movie');


router.get('/favmovie', function(req, res,next) {
favmovie.find({},function(err,docs){
  res.json(docs);
});
});


router.post('/fav',function(req,res)
  {
 console.log(req.body);
 var movie=new favmovie();
 movie.Title=req.body.Title;
 movie.Type=req.body.Type;
 movie.Poster=req.body.Poster;
 movie.Year=req.body.Year;
 movie.imdbID=req.body.imdbID;
 movie.save(function(err)
{
 if(err)
 {
   res.send(err);
 }
 else
   {
     res.send('Movie added');
   }
 });
 });


 router.delete('/unfav',function(req,res,next)
 {
 favmovie.findOneAndRemove({ imdbID: req.body.imdbID }, function(err) {
   if (err) throw err;
   res.send('Movie deleted!');
 });
 });


 router.put('/update/:Ye',function(req,res,next)
 {

 favmovie.findOneAndUpdate({Year: req.body.Year }, { Year: req.params.Ye }, function(err, movie) {
   if (err) throw err;
   console.log(movie);
 });
 });
module.exports = router;
