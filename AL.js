calculate() {

    const { miliseconds, seconds, minutes } = this.times;
    //ok
    miliseconds += 1;
    if (miliseconds >= 100) {
      seconds += 1;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }

    this.times = { minutes, seconds, miliseconds };
  }


  format({minutes, seconds, miliseconds}) {
    //przygotowuje tekst do wyswietlenia
    return `${pad0(minutes)}:${pad0(seconds)}:${pad0(
      Math.floor(miliseconds)
    )}`;
  }

  start() {
    const {running, watch, step} = this;

    if (!running) {
      running = true;
      watch = setInterval(() => step(), 10);
    }
  }

 calculate() {
    const {miliseconds, seconds, minutes} = this.state.times;
    miliseconds += 1;
    if (miliseconds >= 100) {
      seconds += 1;
      miliseconds = 0;
    }
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    this.setState({
      times: {
        miliseconds,
        seconds,
        minutes
      }
    });
  }

  <button onClick={() => this.start()}> Start </button>
