import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    // currentPianoNote: state.currentPianoNoteReducer,
    // octave: state.octaveReducer.current,
    keyStrokeEvents: state.keyEventsReducer,
    targetNote: state.targetNoteReducer,
    targetNoteIndex: state.targetNoteIndexReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };

const renderKeyEventNotesAsTargetNotes = (keyEvents, targetNoteIndex) => {
  if (!keyEvents) { return ''; } else {
    return keyEvents.map((item, index) => {
      if (index === targetNoteIndex) {
        return <li className="active"><h3>{ item.noteName }</h3></li>;
      }
      return <li>{ item.noteName }</li>;
    });
  }
};

class TargetNoteIndicator extends Component {
  render() {
    return (
      <div>
        <div className="thumbnail noteScoreIndicatorsBorder">
          <div className="noteScoreIndicatorsText">
            <h4>Target Notes</h4>
            {/* <div style={style}>
              <h2>{_renderKeyEventNotesAsTargetNotes(this.props.keyStrokeEvents)}</h2>
            </div> */}
            <ul className="pagination">
              {renderKeyEventNotesAsTargetNotes(this.props.keyStrokeEvents, this.props.targetNoteIndex)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetNoteIndicator);
