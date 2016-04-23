import React, { Component, PropTypes } from 'react'

export default class KeyFrame extends Component {
  
  render() {
    const { x, y, width } = this.props
    
    const style = {
      fill       : '#7f8c8d',
      strokeWidth:1
    }
    
    return (
      <rect 
        cx={ x }  
        cy={ y }
        width={ width }
        rx="20" 
        ry="20"
        height={ 15 }
        style={ style }
      />
    )
  }
}

KeyFrame.propTypes = {
    x    : PropTypes.number.isRequired,
    y    : PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }