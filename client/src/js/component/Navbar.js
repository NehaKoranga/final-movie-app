var React= require('react');
var ReactDOM = require('react-dom');
var {Link} = require('react-router');
var NavLink = require('./NavLink');

var Navbar = React.createClass({
  render :function(){
    return(
      <div>
          <div className="navbar navbar-fixed-top">
            <div className="container">
              <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="nav-collapse collapse navbar-responsive-collapse">
                <ul className="nav navbar-nav">
                  <li>
                <NavLink to ="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/moviebox">Movies</NavLink>
                  </li>


                <form className="navbar-form pull-left">
                  <input type="text" className="form-control" placeholder="Search this site..." id="searchInput"/>
                  <button type="submit" className="btn btn-default" id ="sbutton">Search</button>
                </form>

                <ul className="nav navbar-nav pull-right">
                <li>
                  <NavLink to ="/favouritemovie">Favourite Movie</NavLink>
                </li>

                <li className="dropdown">
        					<NavLink to="/about" className="dropdown-toggle" data-toggle="dropdown">About <strong className="caret"></strong></NavLink>

        					<ul className="dropdown-menu">
        						<li>
        							<NavLink to ="/about/aboutreact">About React</NavLink>
        						</li>

        						<li>
        							<NavLink to = "/about/aboutmean">About Mean</NavLink>
        						</li>
                    </ul>
                    </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
                </ul>
              </ul>
            </div>
            </div>
          </div>
      </div>
    );
  }
}
);
module.exports= Navbar;
