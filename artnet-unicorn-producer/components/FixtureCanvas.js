import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import Fixture from './Fixture'

export default class FixtureCanvas extends Component {

  static propTypes = {
    width   : PropTypes.number.isRequired,
    height  : PropTypes.number.isRequired,
    fixtures: PropTypes.arrayOf(
      PropTypes.shape({
          x       : PropTypes.number.isRequired,
          y       : PropTypes.number.isRequired,
          selected: PropTypes.bool.isRequired,
        })
      ).isRequired,
    selected: PropTypes.array
  };

  static defaultProps = {
    width  : 400,
    height : 400,
    fixtures: [],
    selected: [],
  };

  constructor( props ) {
    super( props )

    this.renderFixture = ::this.renderFixture
    // this.renderFixture = this.renderFixture.bind( this )
    // fixtures.map( ::this.renderFixture )
  }

  renderFixture( fixture ) {
    return(
      <Fixture 
        key={fixture.id}
        id={fixture.id}
        x={fixture.x} 
        y={fixture.y} 
        selected={fixture.selected}  
        handleSelect={this.props.handleSelect}
      /> 
    )
  }

  render() {
    const { width, height, fixtures, handleSelect } = this.props
  
    return (
      <svg height={ height } width={ width }>
        <rect 
          x="0" 
          y="0" 
          fill="#332F2D" 
          height={ height } 
          width={ width }
        />

        { fixtures.map( this.renderFixture ) }
      </svg>
    )
  }
}