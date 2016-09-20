var React = require('react');
var ReactDOM = require('react-dom');

var About = React.createClass({
  render : function(){
    return (
      <div>
        <h2>{this.props.params.value}</h2>
        <h2>Hi I am the About page!!!</h2>
      </div>
    );
  }
})
module.exports = About;
