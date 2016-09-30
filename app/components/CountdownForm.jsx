var React = require("react");

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/^[0-9]*$/)){
      this.refs.seconds.value= '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render : function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form bt">
            <input type="text" ref="seconds" placeholder="Enter Time In Seconds" className="input_time bt"/>
            <button className="button expanded bt input-button">START</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
