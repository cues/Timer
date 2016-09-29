var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'Stopped'
    };
  },

  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'Started':
          this.startTimer();
        break;
      }
    }
  },

  startTimer: function(){
      this.timer = setInterval(() => {
        var newCount = this.state.count - 1;
        this.setState({
          count: newCount >= 0 ? newCount : 0
        });
      },1000)

  },

  handleSetCountdown: function (seconds) {
    this.setState({
      count : seconds,
      countdownStatus : 'Started'
    });
  },

    render : function(){
      var {count} = this.state;
      // var {countdownStatus} = this.state;
    return(
      <div className="countdown bt">
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
