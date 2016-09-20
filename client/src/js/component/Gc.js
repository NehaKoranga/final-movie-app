var React=require('react')

var Gc=React.createClass({

  getInitialState: function(){
    return({data:[]})
  },

  addtofavourite : function(){
    $.ajax({
         url:"http://localhost:8080/movie/fav",
         dataType: 'json',
         type:"POST",
         data:this.props.arr,
         success: function(data) {
           this.setState({data:data});
         }.bind(this),
         error: function(xhr, status, err) {
           this.setState({data:this.props.arr})
           console.error("http://localhost:8080/movie/fav", status, err.toString());
         }.bind(this)

       });
  },

render: function(){
  return (
       <div>
                        <div className="jumbotron container-fluid" id="list">
                      <div key={this.props.arr.imdbID} className="row" id="movieList">
                          <div className="col-sm-4">
                              <img src={this.props.arr.Poster} alt={this.props.arr.Title} width="200" height="200"/>
                          </div>
                              <div className="col-sm-8">
                                    <div className="list-group">
                                      <p className="list-group-item">
                                          <h3 className="list-group-item-heading pull-left">Title : </h3>
                                          <h4 className="list-group-item-text">{this.props.arr.Title}</h4>
                                      </p>
                                      <p className="list-group-item">
                                          <h3 className="list-group-item-heading pull-left">imdbID : </h3>
                                          <h4 className="list-group-item-text">{this.props.arr.imdbID}</h4>
                                      </p>
                                      <p className="list-group-item">
                                          <h3 className="list-group-item-heading pull-left">Year : </h3>
                                          <h4 className="list-group-item-text">{this.props.arr.Year}</h4>
                                      </p>
                                      <ul className="list-inline">
                                      <li><p className="list-group-item">
                                          <input type = "button" value = "View on IMDB" id = "viewonimdb"></input>
                                      </p></li>
                                      <li><p className="list-group-item">
                                          <input type = "button" value = "Add To Favourite" id = "add" onClick={this.addtofavourite}></input>
                                      </p></li>
                                      </ul>
                                    </div>
                          </div>
                      </div>
                 </div>

     </div>
   );
}
});
module.exports=Gc;
