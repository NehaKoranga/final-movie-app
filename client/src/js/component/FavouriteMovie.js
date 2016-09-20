var React= require('react');
var ReactDOM = require('react-dom');
var Display= require('./Display.js');



var FavouriteMovie = React.createClass({

getInitialState:function(){
  return({data:[]});
},

showResult:function(response){
  this.setState({
    data:response
  });
},

getDataFromServer:function(){
  $.ajax({
       url:"http://localhost:8080/movie/favmovie",
       dataType: 'json',
       type:"GET",
       success: function(response) {
         this.showResult(response);
       }.bind(this),
       error: function(xhr, status, err) {
         console.error("http://localhost:8080/movie/favmovie", status, err.toString());
       }.bind(this)

     });
},


componentDidMount: function(){
  this.getDataFromServer();
},

  render :function(){
    console.log(this.state.data);
    var result= this.state.data.map(function(search){

      return(
        <Display searchs={search}/>
      );
    });


      return(

          <div>
          <br/>
            <h2>Welcome to your Favourite Movies</h2>
           {result}
          </div>
      );

  }
})
module.exports = FavouriteMovie;
