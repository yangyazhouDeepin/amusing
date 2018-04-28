import React, { Component } from 'react'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      pheight: 0,
      open: false
    }
    this.handleResize = this.handleResize.bind(this)
  }
  componentWillMount(){
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  handleMouseOver(e){
      clearTimeout(this.timer);
      this.setState({
        open: true
      })

  }

  handleMouseOut(e){
    this.timer = setTimeout(() => {
      this.setState({
        open: false
      })
    }, 200)
  }
  handleResize(e){
    let height = (window.innerHeight - 308)/2
    this.setState({
      pheight: height
    })
  }
  render(){
    let openClass = this.state.open ? 'opener active' : 'opener'
    return (
      <div id="header" className="header" style={{"padding-top": this.state.pheight, "padding-bottom": this.state.pheight}}>
        <nav id="nav">
          <ul>
            <li>
              <a href="javascript:;">Home</a>
            </li>
            <li className={openClass} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
              <a href="javascript:;">Dropdown</a>
              <div className="sub-menu">
                  <div className="sub-item">
                    <span>Lorem ipsum dolor</span>
                  </div>
                  <div className="sub-item">
                    <span>Magna phasellus</span>
                  </div>
                  <div className="sub-item">
                    <span>Etiam dolore nisl</span>
                  </div>
                  <div className="sub-item">
                    <span>Veroeros feugiat</span>
                  </div>
              </div>
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
