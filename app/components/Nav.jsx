var React = require('react');
var{Link,IndexLink} = require('react-router');

// statless functional components

var Nav = () => {
    return (
      <div className="top-bar bt" >

          <i className="eachMenu logo display-flex material-icons">access_time</i>
              <i className="material-icons eachMenu display-flex"><IndexLink to="/" activeClassName="active-link">timer</IndexLink></i>
                <i className="material-icons eachMenu display-flex"><Link to="countdown" activeClassName="active-link">timelapse</Link></i>






      </div>


    );
};

module.exports = Nav;
