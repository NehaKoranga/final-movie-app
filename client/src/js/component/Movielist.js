var React=require('react');
var Gc=require('./Gc');

var Movielist=React.createClass({

  render:function(){

    var c1 = this.props.movieArr1.map(function(comment){
       return (
          <Gc arr={comment}/>
      );
    });

    return(
      <div>
        <h3>Movies</h3>
        {c1}
      </div>

    );
   }
});

module.exports=Movielist;
