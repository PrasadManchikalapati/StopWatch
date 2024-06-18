import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {play: false, minutes: 0, seconds: 0}

  timeStart = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prev => ({minutes: prev.minutes + 1, seconds: 0}))
    } else {
      this.setState(prev => ({seconds: prev.seconds + 1}))
    }
  }

  start = () => {
    this.setState({play: true})
    this.timerId = setInterval(this.timeStart, 1000)
  }

  stop = () => {
    this.setState({play: false})
    clearInterval(this.timerId)
  }

  reset = () => {
    this.setState({play: false, minutes: 0, seconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const {minutes, seconds, play} = this.state

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="timer-card">
          <div className="timer-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p style={{marginTop: '0px', marginLeft: '10px'}}>Timer</p>
          </div>
          <h1>
            {minutes > 9 ? minutes : `0${minutes}`}:
            {seconds > 9 ? seconds : `0${seconds}`}
          </h1>
          <div className="buttons">
            <button
              type="button"
              style={{backgroundColor: '#1db05f'}}
              onClick={this.start}
              disabled={play}
            >
              Start
            </button>
            <button
              type="button"
              style={{backgroundColor: '#ef0d36'}}
              onClick={this.stop}
              disabled={!play}
            >
              Stop
            </button>
            <button
              type="button"
              style={{backgroundColor: '#eaa800'}}
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
