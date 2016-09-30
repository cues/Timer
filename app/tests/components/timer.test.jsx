var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () =>{
  it('should exist',() => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('Started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('Started');
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });

  it('should pause timer on paused status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange('Started');
    timer.handleStatusChange('Paused');
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('Paused');
      expect(timer.state.count).toBe(10);
      done();
    },1001);
  });

  it('should clear count on stopped status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange('Started');
    timer.handleStatusChange('Stopped');
    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('Stopped');
      expect(timer.state.count).toBe(0);
      done();
    },1001);
  });
});
