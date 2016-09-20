var React= require('react');
var ReactDOM=require('react-dom');
var Searchbox=require('./Searchbox');
var Movielist=require('./Movielist');
var Navbar= require('./Navbar');

var Moviebox=React.createClass({

getInitialState: function(){
  return({movieArr:[], url: "http://omdbapi.com/?s="})

},

handleClick:function(data){
  $.ajax({
       url: this.state.url+data,
       dataType: 'json',
       cache: false,
       success: function(data) {
         console.log(data.Search);
         this.setState({movieArr:data.Search});
         console.log(this.state.movieArr);
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.state.url, status, err.toString());
       }.bind(this)
     });
},

render: function() {
  return (
    <div>
    <Navbar/>
    <Searchbox click={this.handleClick}/>
    <Movielist movieArr1={this.state.movieArr}/>
    </div>
  )
}

})

module.exports= Moviebox;
