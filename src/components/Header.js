import React, { Component } from 'react'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      pheight: 0
    }
  }
  componentWillMount(){
    let height = (window.innerHeight - 400)/2
    this.setState({
      pheight: height
    })
  }
  render(){
    return (
      <div id="header" className="header" style={{"padding-top": this.state.pheight, "padding-bottom": this.state.pheight}}>
        <nav id="nav">
          <ul>
            <li>
              <a href="javascript:;">Home</a>
            </li>
            <li>
              <a href="javascript:;">Dropdown</a>
            </li>
            <li>
              <a href="javascript:;">Left Sidebar</a>
            </li>
            <li>
              <a href="javascript:;">Right Sidebar</a>
            </li>
            <li>
              <a href="javascript:;">No Sidebar</a>
            </li>
          </ul>
        </nav>
        <div className="inner">
          <header>
            <h1>
              <a href="#">Helios</a>
            </h1>
            <hr/>
            <span class="byline">Another fine freebie by HTML5 UP</span>
          </header>
          <footer>
            <a href="#banner" class="button">Start</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Header
