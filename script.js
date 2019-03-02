class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      display: display,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      results: [] //nie do konca rozumiem
    };
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

  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(
      Math.floor(times.miliseconds)
    )}`;
  }

  start() {
    if (!this.state.running) {
      this.setState({
        running: true
      }),
        (this.watch = setInterval(this.step.bind(this), 10));
    }
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
  }

  calculate() {
    var times = this.state.times;
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
    this.setState({
      running: false
    }),
      clearInterval(this.watch);
  }

  render() {
    return (
      <div>
        <nav className={"controls"}>
          <a
            href={"#"}
            className={"button"}
            id={"start"}
            onClick={() => this.start()}>
            Start{" "}
          </a>
          <a
            href={"#"}
            className={"button"}
            id={"stop"}
            onClick={() => this.stop()}>
            Stop{" "}
          </a>
        </nav>
      </div>
    );
  }
}
var stopwatch = React.createElement(Stopwatch);
ReactDOM.render(stopwatch, document.getElementsByClassName("container"));
//ReactDOM.render(<Stopwatch />, document.getElementById("container"));

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}
