/**
 * KNOWN ISSUE
 *
 * Uncaught TypeError: Invalid attempt to destructure non-iterable instance(anonymous function) @ VM103588:24stopDragging @ KeyFrameCanvas.js?0ed9:64ReactErrorUtils.invokeGuardedCallback @ ReactErrorUtils.js?6b31:71executeDispatch @ EventPluginUtils.js?0958:79executeDispatchesInOrder @ EventPluginUtils.js?0958:102executeDispatchesAndRelease @ EventPluginHub.js?c6b1:43forEachAccumulated @ forEachAccumulated.js?b898:23processEventQueue @ EventPluginHub.js?c6b1:259runEventQueueInBatch @ ReactEventEmitterMixin.js?8a20:18handleTopLevel @ ReactEventEmitterMixin.js?8a20:34handleTopLevelWithoutPath @ ReactEventListener.js?2365:93handleTopLevelImpl @ ReactEventListener.js?2365:73perform @ Transaction.js?6dff:136batchedUpdates @ ReactDefaultBatchingStrategy.js?ef70:62batchedUpdates @ ReactUpdates.js?ce09:94dispatchEvent @ ReactEventListener.js?2365:204
 *
 **/
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import KeyFrame from './KeyFrame'
import * as keyFrameActions from '../reducers/keyFrames'
import _throttle from 'lodash/throttle'

const mapStateToProps = state => ({
  keyFrames    : state.keyFrames.frames,
  selectedFrame: state.keyFrames.selected
})

export class KeyFrameCanvas extends Component {

  static TRACK_PADDING = 1.5

  static propTypes = {
    selectKeyFrame: PropTypes.func.isRequired,
    updateKeyFrame: PropTypes.func.isRequired,

    selectedFrame: PropTypes.number.isRequired,

    width   : PropTypes.number.isRequired,
    height  : PropTypes.number.isRequired,
    keyFrames: PropTypes.arrayOf(
      PropTypes.shape({
        time    : PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        track   : PropTypes.number.isRequired,
      })
    ).isRequired
  }

  static defaultProps = {
    width      : 400,
    height     : 400,
    scaleFactor: 1 / 10
  }

  constructor( props ) {
    super( props )

    this.state = { 
      dragging : false,
      keyFrames: props.keyFrames
    }

    this.renderKeyFrame = ::this.renderKeyFrame
    this.stopDragging = ::this.stopDragging
    this.handleMouseMoveThrottled = _throttle( ::this.handleMouseMove, 10 )
  }

  renderKeyFrame( keyFrame, index ) {

    const props = this.transformTimeToChords( keyFrame )
    // partial application of "index" argument

    props.handleMouseDown = this.startDragging.bind( this, index )
    props.selected = this.props.selectedFrame === index

    return <KeyFrame key={ index } { ...props } />
  }

  stopDragging( e ) {
    const [ index ] = this.state.dragging
    this.setState({ dragging: false })

    this.props.updateKeyFrame( index, {
      time: this.state.keyFrames[ index ].time
    })
  }

  startDragging( index, e ) {

    this.props.selectKeyFrame( index )
    this.setState({ dragging: [ index, e.clientX ] })
  }

  transformTimeToChords({ time, track, duration }) {
    const { scaleFactor } = this.props

    return {
      x    : time * scaleFactor,
      y    : ( track * KeyFrameCanvas.TRACK_PADDING ) * KeyFrame.FRAME_HEIGHT,
      width: duration * scaleFactor
    }
  }

  handleMouseMove( e ) {

    if( ! this.state.dragging ) return false
    if( ! e.clientX ) return false

    const { keyFrames, dragging: [ index, lastX ] } = this.state
    const delta = e.clientX - lastX

    this.setState({
      keyFrames: [
        ...keyFrames.slice( 0, index ),
        {
          ...this.state.keyFrames[ index ],
          time: this.state.keyFrames[ index ].time + delta * 10
        },
        ...keyFrames.slice( index + 1, keyFrames.length )
      ],
      dragging: [ index, e.clientX ]
    })
  }

  render() {

    const {
      width, height, scaleFactor, timeOffset
    } = this.props
    const keyFrames = this.state.keyFrames

    const endTime = timeOffset + width * scaleFactor

    return (
      <svg
        height={ height }
        width={ width }
        className="keyFrameCanvas"
        onMouseUp={ this.stopDragging }
        onMouseMove={ this.handleMouseMoveThrottled  }
      >
        { keyFrames.map( this.renderKeyFrame ) }
      </svg>
    )
  }
}

export default connect( mapStateToProps, keyFrameActions )( KeyFrameCanvas )
