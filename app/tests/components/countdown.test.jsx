var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to Started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('Started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });


    it('should never set count to less than 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3000)
    });


    it('shuld pause countdown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('Paused');

      setTimeout(() => {
          expect(countdown.state.count).toBe(3);
          expect(countdown.state.countdownStatus).toBe('Paused');
          done();
      }, 1001)
    });

    it('shuld stop countdown and reset count on Stopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('Stopped');

      setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          expect(countdown.state.countdownStatus).toBe('Stopped');
          done();
      }, 1001)
    });

  });

});
