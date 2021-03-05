import React from "react";

class Timer extends React.Component {
  state = {
    time: 1500,
    isOn: false,
    timeString: "25:00",
    pomodoroCounter: 0,
    status: "Click start to begin",
  };

  getTimeString = () => {
    if (this.state.time < 0) {
      return `00:00`;
    }

    let currentMinutes = Math.trunc(this.state.time / 60).toString();
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }

    let currentSeconds = (this.state.time % 60).toString();
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }

    return `${currentMinutes}:${currentSeconds}`;
  };

  startCountDown = () => {
    if (!this.state.isOn) {
      this.setState({ isOn: true, status: "Work" });

      this.interval = setInterval(() => {
        if (this.state.time <= 0) {
          // Long Rest Case
          if (this.state.pomodoroCounter === 8)
            this.setState({
              time: 900,
              pomodoroCounter: 1,
              status: "Long Rest",
            });
          else {
            // Rest Case
            if (this.state.pomodoroCounter % 2 === 0)
              this.setState({
                time: 300,
                pomodoroCounter: this.state.pomodoroCounter + 1,
                status: "Rest",
              });
            // Work Case
            else if (this.state.pomodoroCounter % 2 !== 0)
              this.setState({
                time: 1500,
                pomodoroCounter: this.state.pomodoroCounter + 1,
                status: "Work",
              });
          }
        }

        this.setState({
          time: this.state.time - 1,
          timeString: this.getTimeString(),
        });
      }, 1000);
    }
  };

  stopCountDown = () => {
    if (this.state.isOn) {
      clearInterval(this.interval);
      this.setState({ isOn: false });
    }
  };

  resetTimer = () => {
    this.stopCountDown();
    this.setState({
      time: 1500,
      timeString: "25:00",
      pomodoroCounter: 0,
      status: "Click start to begin",
    });
  };

  render() {
    return (
      <>
        <div>
          <h1 className="ui huge header">{this.state.timeString}</h1>
          <h2
            className={`ui big ${
              this.state.status === "Work"
                ? "red"
                : this.state.status === "Rest" ||
                  this.state.status === "Long Rest"
                ? "green"
                : "blue"
            } header`}
          >
            {this.state.status}
          </h2>
        </div>
        <div className="ui buttons">
          <button onClick={this.startCountDown} className="ui button big">
            Start
          </button>
          <button onClick={this.stopCountDown} className="ui button big">
            Pause
          </button>
          <button onClick={this.resetTimer} className="ui button big">
            Reset
          </button>
        </div>
      </>
    );
  }
}

export default Timer;
