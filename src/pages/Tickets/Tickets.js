import { Component } from 'react'

// Container
import Table from '../../containers/Table/Table'
// SCSS
import './Tickets.scss'

class Tickets extends Component {
  render() {
    return (
      <div className="tickets">
        <Table />
      </div>
    )
  }
}

export default Tickets
