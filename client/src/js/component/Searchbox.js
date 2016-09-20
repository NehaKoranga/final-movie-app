var React= require('react');

var Searchbox=React.createClass({

getInitialState: function(){
  return({data: ""})
},

handleChange: function(event){
  return(
    this.setState({data:event.target.value})
  )
},

sendToParent: function(e){
  e.preventDefault();
    this.props.click(this.state.data)
},

render: function(){
  return (
    <div>


    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="carousel slide" id="carousel-216558">
            <ol className="carousel-indicators">
              <li data-slide-to="0" data-target="#carousel-216558">
              </li>
              <li data-slide-to="1" data-target="#carousel-216558" className="active">
              </li>
              <li data-slide-to="2" data-target="#carousel-216558">
              </li>
            </ol>
          <div className="carousel-inner">
      <div className="item">
        <img alt="Carousel Bootstrap First" src="./css/carousel2.jpg" />
      </div>
      <div className="item active">
        <img alt="Carousel Bootstrap Second" src="./css/carousel3.jpg" />

      </div>
      <div className="item">
        <img alt="Carousel Bootstrap Third" src="./css/carousel1.jpg" />
      </div>
    </div> <a className="left carousel-control" href="#carousel-216558" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-216558" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
   </div>
  </div>
 </div>
</div>



    <h2 id='heading'>Movies Magic</h2>
      <ul className="list-inline" id ="mysearchlist">
      <li><img src ="../../css/logo.jpg" width="50px" height="50px"/></li>

     <li><input type="text" className="form-control" placeholder='Search Movies here..' id='searchtext' value={this.state.data}  onChange={this.handleChange}/></li>
     <li><input type='submit' id='searchbutton' onClick={this.sendToParent} value='search'/>

      </li></ul>
     <br/><br/><br/><br/>
    </div>
  )
}
})

module.exports=Searchbox;
