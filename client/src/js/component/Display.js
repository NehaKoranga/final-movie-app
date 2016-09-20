var React= require('react');
var ReactDOM = require('react-dom');

var Display=React.createClass({
  deleteAjax:function()
    {
      $.ajax({
        url: "http://localhost:8080/movie/unfav",
        dataType: 'json',
        type: 'DELETE',
        data: this.props.searchs,
        success: function() {
           console.log('success');
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.state.url, status, err.toString());
        }.bind(this)
      });
    },

updateAjax : function(){

  var query = ReactDOM.findDOMNode(this.refs.query).value;
  var url1="http://localhost:8080/movie/update/" +query;
  console.log(url1);
  $.ajax({
       url:url1,
       dataType: 'json',
       type:"PUT",
       data:this.props.searchs,
       success: function() {
         console.log(url);
       }.bind(this),
       error: function(xhr, status, err) {
         console.error("http://localhost:8080/movie/update", status, err.toString());
       }.bind(this)

     });

},

render: function(){
  return (
       <div>
                        <div className="jumbotron container-fluid" id="list">
                      <div key={this.props.searchs.imdbID} className="row" id="movieList">
                          <div className="col-sm-4">
                              <img src={this.props.searchs.Poster} alt={this.props.searchs.Title} width="200" height="200"/>
                          </div>
                              <div className="col-sm-8">
                                    <div className="list-group">
                                      <p className="list-group-item">
                                          <h3 className="list-group-item-heading pull-left">Title : </h3>
                                          <h4 className="list-group-item-text">{this.props.searchs.Title}</h4>
                                      </p>
                                      <p className="list-group-item">
                                          <h3 className="list-group-item-heading pull-left">imdbID : </h3>
                                          <h4 className="list-group-item-text">{this.props.searchs.imdbID}</h4>
                                      </p>
                                      <p className="list-group-item">
                                          <h3 className="list-group-item-heading pull-left">Year : </h3>
                                          <h4 className="list-group-item-text">{this.props.searchs.Year}</h4>
                                      </p>
                                      <ul className="list-inline">
                                      <li><p className="list-group-item">
                                          <input type = "button" value = "Update" id = "viewonimdb" onClick={this.updateAjax}></input>
                                      </p></li>

                                      <li><p>
                                      <div className="container-fluid">
                                          <div className="row">
                                          <div className="col-md-12">
                                             <a id="modal-873125" href="#modal-container-873125" role="button" className="btn" data-toggle="modal">Update</a>

                                            <div className="modal fade" id="modal-container-873125" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                              <div className="modal-dialog">
                                                <div className="modal-content">
                                                  <div className="modal-header">

                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                                      ×
                                                    </button>
                                                    <h4 className="modal-title" id="myModalLabel">
                                                      Update Movie Info
                                                    </h4>
                                                  </div>
                                                  <div className="modal-body">
                                                  <table>
                                                  <tr>
                                                   <td>Old Year : </td><td><input type="text" value={this.props.searchs.Year}/></td></tr>
                                                   <tr><td>New Year : </td><td><input type = "text"/></td></tr>
                                                   </table>
                                                  </div>
                                                  <div className="modal-footer">


                                                    <button type="button" className="btn btn-primary" onClick={this.updateAjax}>
                                                      Update
                                                    </button>
                                                  </div>
                                                </div>

                                              </div>

                                            </div>

                                          </div>
                                          </div>
                                          </div>

                                      </p></li>

                                      <li><p className="list-group-item">
                                          <input type = "button" value = "Delete" id = "add" onClick={this.deleteAjax}></input>
                                      </p></li>
                                      </ul>
                                    </div>
                          </div>
                      </div>
                 </div>

     </div>
   );
}

})
module.exports = Display;
