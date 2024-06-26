import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {sumOfNum: 0, isEvenOrOdd: 'Even'}

  onIncrement = () => {
    const randomNum = Math.floor(Math.random() * 100)
    this.setState(prevState => ({
      sumOfNum: prevState.sumOfNum + randomNum,
      isEvenOrOdd: (prevState.sumOfNum + randomNum) % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {sumOfNum, isEvenOrOdd} = this.state
    return (
      <div className="bg-container">
        <div className="counter-card">
          <h1 className="count">Count {sumOfNum}</h1>
          <p className="msg">Count is {isEvenOrOdd}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="statement">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
