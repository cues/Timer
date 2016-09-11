var React = require('react');
var{Link,IndexLink} = require('react-router');

// statless functional components

var Nav = () => {
    return (
      <div className="top-bar bt" >
          <div className="top-bar-left">

              <div className="eachMenu display-flex">Timer App</div>
              <div className="eachMenu display-flex"><IndexLink to="/" activeClassName="active-link">TIMER</IndexLink></div>
              <div className="eachMenu display-flex"><Link to="" activeClassName="active-link">COUNTDOWN</Link></div>

          </div>
          <div className="top-bar-right">
            <div className="credit display-flex"><a href="errollalfredo.com" target="_blank">Created by : Erroll Alfredo Antao</a></div>
          </div>




      </div>


    );
};

module.exports = Nav;
