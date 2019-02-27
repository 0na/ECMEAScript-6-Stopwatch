//const { minutes, seconds, miliseconds } = times;


class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }
    print() { //ok
        this.display.innerText = this.format(this.times);
    }

    // format() {
    //     this.times(pad0) = {
    //         minutes,
    //         seconds,
    //         miliseconds
    //     };
    // }
    format(times) { //przygotowuje tekst do wyswietlenia
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    } //wynik to 02:04:23 (2 min, 4 s, 10 ms)

    start() { //ok
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() { //ok
        if (!this.running) return;
        this.calculate();
        this.print();
    }

    // calculate() {
    //     this.times = {
    //         miliseconds = +1,
    //         if (this.miliseconds >= 100) {
    //             seconds = +1,
    //                 miliseconds = 0;
    //         }
    //         if (this.times.seconds >= 60) {
    //             minutes = +1,
    //                 seconds = 0,
    //         }
    //     }
    // }



    calculate() { //ok
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() { //ok
        this.running = false;
        clearInterval(this.watch);
    }
}
const stopwatch = new Stopwatch(document.querySelector('.stopwatch')); //ok

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start()); //ok

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop()); //ok

//Funkcja pad0 przyjmuje na wejście wartość liczbową, przekształca ją na stringa, a następnie sprawdza czy długość tego przekształcenia jest mniejsza od 2 dodając tym samym zero przed tę liczbę.
function pad0(value) { //dodaje 0 do liczb jednocyfrowych
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}