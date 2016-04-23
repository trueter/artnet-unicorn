import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'


export default class Fixture extends Component {
  
  render() {
    const { height, width, color, selected } = this.props
    
    return (
      <svg height={ height } width={ width }>
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          stroke={ selected ? "#FFFFFF" : "#767676" }
          strokeWidth="3" 
          fill={ color } 
        />
      </svg>
    )
  }
}
