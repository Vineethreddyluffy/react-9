import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {name: 'Subscribe'}

  AuthButton = () => {
    const {name} = this.state
    if (name === 'Subscribe') {
      this.setState({name: 'Subscribed'})
    } else {
      this.setState({name: 'Subscribe'})
    }
  }

  render() {
    const {name} = this.state
    return (
      <div className="cont">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" onClick={this.AuthButton} className="button">
          {name}
        </button>
      </div>
    )
  }
}

export default Welcome
