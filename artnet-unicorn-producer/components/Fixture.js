import React, { Component, PropTypes } from 'react'

export default class Fixture extends Component {

  render() {
    const { id, x, y, height, width, selected, color, handleClick } = this.props

    return (
        <circle
          id={id}
          cx={x}
          cy={y}
          r="20"
          stroke={ selected ? "#FFFFFF" : "#767676" }
          strokeWidth="3"
          fill={ color ? color : "#3C3C3C" }
          onClick={ handleClick }
        />
    )
  }
}

// eigentlich static Fixture.propTypes --> stage-0 muss funktionieren- im webpack config- geht aber bei cloud 9 nicht. Sollte im local funktionieren.
// Ich kann die beiden Sachen dann auch sehr schoen ueber der Klassendefinition schreiben

Fixture.propTypes = {
  x       : PropTypes.number.isRequired,
  y       : PropTypes.number.isRequired,
  id      : PropTypes.number.isRequired,
  height  : PropTypes.number.isRequired,
  width   : PropTypes.number.isRequired,
  color   : PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

Fixture.defaultProps = {
    key: 0,
    x: 50,
    y: 50,
    height: 100,
    width : 100,
    color : ''
}
