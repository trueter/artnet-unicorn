import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Fixture from './Fixture'
import * as fixtureActions from '../reducers/fixtures'

const mapStateToProps = state => ({
  fixtures: state.fixtures.data,
  selected: state.fixtures.selected
})

export default class FixtureCanvas extends Component {

  static propTypes = {
    width   : PropTypes.number.isRequired,
    height  : PropTypes.number.isRequired,

    toggleFixture: PropTypes.func.isRequired,

    fixtures: PropTypes.arrayOf(
      PropTypes.shape({
          x       : PropTypes.number.isRequired,
          y       : PropTypes.number.isRequired
        })
      ).isRequired,
    selected: PropTypes.arrayOf( PropTypes.number ).isRequired
  };

  constructor( props ) {
    super( props )

    this.renderFixture = ::this.renderFixture
    // this.renderFixture = this.renderFixture.bind( this )
    // fixtures.map( ::this.renderFixture )
  }

  renderFixture( fixture ) {
    return (
      <Fixture
        key={ fixture.id }
        id={ fixture.id }
        x={ fixture.x }
        y={ fixture.y }
        selected={ this.props.selected.includes( fixture.id ) }
        handleClick={ this.props.toggleFixture.bind( this, fixture.id ) }
      />
    )
  }

  render() {
    const { width, height, fixtures } = this.props

    return (
      <svg
        height={ height }
        width={ width }

      >
        <rect
          x="0"
          y="0"
          fill="transparent"
          height={ height }
          width={ width }
        />

        { fixtures.map( this.renderFixture ) }

      </svg>
    )
  }
}

export default connect( mapStateToProps, fixtureActions )( FixtureCanvas )
