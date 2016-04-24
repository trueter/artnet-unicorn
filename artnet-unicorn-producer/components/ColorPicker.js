import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class ColorPicker extends Component {

  static propTypes = {
    color   : PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: "#E87D75"
  };

  constructor( props ) {
    super( props )

    /*
        Good place to bind functions from prop, like so:
        this.renderFixture = ::this.renderFixture
    */
  }

  render() {
    const { color } = this.props
     
    //calculate a bunch of stuff 
    var width   = 400
    var hex00   = "00"
    var hexFF   = "FF"

    var r = color.trim().substr(1,2)
    var g = color.trim().substr(3,2)
    var b = color.trim().substr(5,2)

    var redHex0     = "#" + hex00 + g + b
    var redHex255   = "#" + hexFF + g + b
    var greenHex0   = "#" + r + hex00 + b
    var greenHex255 = "#" + r + hexFF + b
    var blueHex0    = "#" + r + g + hex00
    var blueHex255  = "#" + r + g + hexFF

    var posR = Number(Number(parseInt(r, 16)*(1/256)).toFixed(2)) * (width - 40);
    var posG = Number(Number(parseInt(g, 16)*(1/256)).toFixed(2)) * (width - 40);
    var posB = Number(Number(parseInt(b, 16)*(1/256)).toFixed(2)) * (width - 40);

    const styleR1 = {
      stopColor   : redHex0,
      stopOpacity : 1,
    }

    const styleR2 = {
      stopColor   : redHex255,
      stopOpacity : 1,
    }      

    const styleG1 = {
      stopColor   : greenHex0,
      stopOpacity : 1,
    }

    const styleG2 = {
      stopColor   : greenHex255,
      stopOpacity : 1,
    }

    const styleB1 = {
      stopColor   : blueHex0,
      stopOpacity : 1,
    }

    const styleB2 = {
      stopColor   : blueHex255,
      stopOpacity : 1,
    } 

    const captionText = {
      fontFamily  : "Open Sans",
      fontSize    : 30,
      fontWeight  : "bold",
      fill        : "#C2C2C2",
    }

    const colorText = {
      fontFamily  : "Open Sans",
      fontSize    : 14,
      fontWeight  : "regular",
      fill        : "#C2C2C2",
    }

    return (
      <svg height={ 400 } width={ 600 }>

        { /* Reg Selector */ }      

        <defs>
          <linearGradient id="r" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={ styleR1 } />
            <stop offset="100%" style={ styleR2 } />
          </linearGradient>
        </defs>

        <text
          x={ 50 }
          y={ 10 }
          dy={ 30 }
          dx={ -35 }
          style={ captionText }
          text-anchor="start"
        >
        R
        </text>

        <rect 
          x={ 50 }
          y={ 10 }
          rx={ 20 }
          ry={ 20 }
          fill="url(#r)"
          filter="url(#innerShadow)" 
          height={ 40 }
          width={ width }
        />

        { /* Green Selector */ }      

        <defs>
          <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={ styleG1 } />
            <stop offset="100%" style={ styleG2 } />
          </linearGradient>
        </defs>

        <text
          x={ 50 }
          y={ 60 }
          dy={ 30 }
          dx={ -35 }
          style={ captionText }
          text-anchor="start"
        >
        G
        </text>

        <rect 
          x={ 50 }
          y={ 60 }
          rx={ 20 }
          ry={ 20 }
          fill="url(#g)" 
          height={ 40 }
          width={ width }
        />  

        { /* Blue Selector */ }      

        <defs>
          <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={ styleB1 } />
            <stop offset="100%" style={ styleB2 } />
          </linearGradient>
        </defs>

        <text
          x={ 50 }
          y={ 110 }
          dy={ 30 }
          dx={ -35 }
          style={ captionText }
          text-anchor="start"
        >
        B
        </text>

        <rect 
          x={ 50 }
          y={ 110 }
          rx={ 20 }
          ry={ 20 }
          fill="url(#b)" 
          height={ 40 }
          width={ width }
        />

        { /* The Circles */ }

        <circle cx={ (50 + 20) + posR } cy={ 20 + 10 } r={ 20 } fill={ "#FFFFFF" } stroke="#3C3C3C" strokeWidth="5"/>
        <circle cx={ (50 + 20) + posG } cy={ 60 + 20 } r={ 20 } fill={ "#FFFFFF" } stroke="#3C3C3C" strokeWidth="5"/>
        <circle cx={ (50 + 20) + posB } cy={ 110 + 20 } r={ 20 } fill={ "#FFFFFF" } stroke="#3C3C3C" strokeWidth="5"/>

        { /* The Result */ }  
        <circle cx={ 50 + width + 10 + 45 } cy={ 55 } r={ 45 } fill={ color } stroke="#767676" strokeWidth="3"/>
        
        <text
          x={ 50 + width + 10 + 45 }
          y={ 110 }
          dy={ 25 }
          dx={ -30 }
          style={ colorText }
          text-anchor="end"
        >
        { color }
        </text>

      </svg>
    )
  }
}