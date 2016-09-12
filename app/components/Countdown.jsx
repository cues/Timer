var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render : function(){
    return(
      <div className="countdown">
        <Clock/>
      </div>
    );
  }
});

module.exports = Countdown;
