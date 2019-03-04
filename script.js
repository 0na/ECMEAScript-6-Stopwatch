"use strict";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    this.running = false;
  }

  reset() {
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    });
  }
  format({ minutes, seconds, miliseconds }) {
    //przygotowuje tekst do wyswietlenia
    return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`;
  }
  // format(times) {
  //   return `${pad0(times.minutes)} : ${pad0(times.seconds)} : ${pad0(
  //     Math.floor(times.miliseconds)
  //   )}`;
  // }

  // start() {
  //   let {
  //     running,
  //     watch,
  //     step
  //   } = this;

  //   if (!running) {
  //     running = true;
  //     watch = setInterval(() => step(), 10);
  //   }
  // }
  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
  }
  // calculate() {
  //   let { miliseconds, seconds, minutes } = this.times;
  //   miliseconds += 1;
  //   if (miliseconds >= 100) {
  //     seconds += 1;
  //     miliseconds = 0;
  //   }
  //   if (seconds >= 60) {
  //     minutes += 1;
  //     seconds = 0;
  //   }
  //   this.times = {
  //     minutes,
  //     seconds,
  //     miliseconds
  //   };
  // }
  calculate() {
    const times = this.state.times;
    times.miliseconds += 1;
    if (times.miliseconds >= 100) {
      times.seconds += 1;
      times.miliseconds = 0;
    }
    if (times.seconds >= 60) {
      times.minutes += 1;
      times.seconds = 0;
    }
    this.setState({
      times
    });
  }

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  render() {
    return (
      <div className='container'>
        <nav>
          <button onClick={() => this.start()}> Start </button>
          <button onClick={() => this.stop()}> Stop </button>
          <button onClick={() => this.reset()}> Reset </button>
        </nav>
        {this.format(this.state.times)}
      </div>
    );
  }
}

var element = React.createElement(Stopwatch);
ReactDOM.render(element, document.getElementById("app"));

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}
