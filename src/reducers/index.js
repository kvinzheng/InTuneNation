import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import keyEventsReducer from './keyEvents';
import targetNoteReducer from './targetNote';
import targetNoteIndexReducer from './targetNoteIndex';
import sungNoteReducer from './sungNote';
import recordingStatusReducer from './recordingStatus';
import greenTimeReducer from './greenTime';
import scoreReducer from './score';
import exerciseScoresReducer from './exerciseScores';
import currentExerciseIdReducer from './currentExerciseId';
import { captureReducer, octaveReducer, currentPianoNoteReducer, navBarReducer } from './interface';
import signupReducer from './signUp';
import loginReducer from './login';
import dashboardReducer from './dashboard';
import singButtonReducer from './singButton';

import googleOauthReducer from './googleOauth.js'

import tuningSpecsReducer from './tuningSpecs';
// import resetStateReducer from './resetState';
import initialState from './initialState';
import graphDataReducer from './graphData';

const appReducer = combineReducers({
  form: formReducer,
  currentPianoNoteReducer,
  captureReducer,
  octaveReducer,
  greenTimeReducer,
  scoreReducer,
  exerciseScoresReducer,
  currentExerciseIdReducer,
  keyEventsReducer,
  targetNoteReducer,
  targetNoteIndexReducer,
  sungNoteReducer,
  recordingStatusReducer,
  singButtonReducer,
  signupReducer,
  loginReducer,
  dashboardReducer,
  graphDataReducer,
<<<<<<< HEAD
  navBarReducer,
  googleOauthReducer,
=======
  tuningSpecsReducer,
>>>>>>> afee62ff079be3edb68ec1ece5b916ab0067297a
});

const rootReducer = (state, action) => {
  const resetState = (JSON.parse(JSON.stringify(initialState)));
  if (action.type === 'RESET_STATE') { state = resetState; } // refactor this out?
  return appReducer(state, action);
};


export default rootReducer;
