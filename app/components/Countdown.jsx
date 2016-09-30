var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');


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
        case 'Stopped':
          this.setState({count:0});
        case 'Paused':
          clearInterval(this.timer)
          this.timer = undefined;
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

  handleStatusChange: function(newStatus){
    this.setState({countdownStatus: newStatus});

  },

    render : function(){
      var {count, countdownStatus} = this.state;
      var renderControlsArea = () =>{
        if(countdownStatus !== 'Stopped'){
          return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
        }else{
          return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
        }
      }
    return(
      <div className="countdown bt">
        <Clock totalSeconds={count}/>
        {renderControlsArea()}
      </div>
    );
  }
});

module.exports = Countdown;
