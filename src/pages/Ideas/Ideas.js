import { Component } from 'react'

// Images
import soon from '../../assets/images/soon.jpeg'
// SCSS
import './Ideas.scss'

class Ideas extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.decrement = this.decrement.bind(this)
  }

  // 📌 Factory function | Need to bind, otherwise it will not working
  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }
  // 📌 Arrow function | Without bind
  increment = () => {
    if (this.state.count < 10) {
      this.setState({
        count: this.state.count + 1
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Ideas</h1>

        <div className="count-holder">
          <h1>Count: {this.state.count}</h1>
          {/* v1.1 */}
          {/* <button
            onClick={() =>
              this.state.count > 0 ?
              this.setState({ count: this.state.count - 1 }) : ''
            }
          >-</button>
          <button
            onClick={() =>
              this.state.count < 10 ?
              this.setState({ count: this.state.count + 1 }) : ''
            }
          >+</button> */}
          {/* v1.2 */}
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
        <img className="soon" src={soon} alt="Coming Soon!"/>
      </div>
    )
  }
}

export default Ideas
