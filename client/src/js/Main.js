var React= require('react');
var ReactDOM=require('react-dom');
var Moviebox= require('./component/Moviebox');
var Navbar = require('./component/Navbar');
var {hashHistory, Route, Router,IndexRoute} = require('react-router');
var Home = require('./component/Home');
var FavouriteMovie = require('./component/FavouriteMovie');
var About = require('./component/About.js');


var MainComponent = React.createClass({
  render : function(){
    return(
      <div>
      <Navbar/>
        <br/><br/><br/><br/>
        {this.props.children}
      </div>
    )
  }
})



ReactDOM.render(
  <Router history={hashHistory}>
      <Route path = "/" component = {MainComponent}>
          <IndexRoute component={Home}/>
          <Route path = "/home" component={Home}/>
          <Route path = "/favouritemovie" component={FavouriteMovie}/>
          <Route path = "/moviebox" component={Moviebox}/>
          <Route path ="/about" component ={About}/>
          <Route path ="/about/:value" component ={About}/>
      </Route>
  </Router>,document.getElementById('app'));
