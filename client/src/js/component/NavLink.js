var React= require('react');
var ReactDOM = require('react-dom');
var {Link} = require('react-router');

var NavLink = React.createClass({
  render : function(){
    return <Link {...this.props} activeClassName ="active"/>
  }
})
module.exports = NavLink;
