export default {
  capture: {
    capture: false,
    captureText: '',
    disabled: '',
    resetDisabled: 'disabled',
  },
  currentPianoNote: '',
  octave: {
    leftOctave: 3,
    rightOctave: 4,
    up: '',
    down: '',
  },
  keyStrokeEvents: [],
  exerciseScores: [],
  greenTime: {
    accumulated: 0,
    required: 1,
  },
  score: 100,
  targetNote: null,
  targetNoteIndex: 0,
  sungNote: {
    frequency: null,
    name: null,
    centDiff: null,
    arrowValue: 90 / 180,
  },
  tuningSpecs: {
    greenYellowBand: 20,
    redYellowBand: 49,
  },
  recordingStatus: false,
  singButton: {
    singText: 'Sing',
    disabled: true,
  },
  loginSuccess: null,
  signupSuccess: null,
  currentExerciseId: null,
  graphData: null,
  dashboard: [],
};
