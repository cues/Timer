var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');


var Main = React.createClass({
  render : function(){
    return (
      <div >
      <Nav/>
      <div className="row">
        <div className="inner-div">
          {this.props.children}
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
});

module.exports = Main;
