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

  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'Started'){
        return   <button className="button secondary" onClick={this.onStatusChange('Paused')}>Pause</button>
      }else if (countdownStatus == 'Paused'){
        return   <button className="button primary" onClick={this.onStatusChange('Started')}>Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('Stopped')}>Clear</button>
      </div>
    )
  }

});

module.exports = Controls;
