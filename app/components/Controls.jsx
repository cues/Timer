var React = require('react');

var Controls = React.createClass({
  propTypes:{
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange : function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },

  componentWillReceiveProps: function(newProps){
    console.log('componentWillReceiveProps', newProps.countdownStatus);
  },

  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'Started'){
        return   <button className="button secondary transition-3" onClick={this.onStatusChange('Paused')}>Pause</button>
      }else if (countdownStatus == 'Paused'){
        return   <button className="button primary transition-3" onClick={this.onStatusChange('Started')}>Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow transition-3" onClick={this.onStatusChange('Stopped')}>Clear</button>
      </div>
    )
  }

});

module.exports = Controls;
