/*eslint-disable*/
import axios from 'axios';

let config = {
  headers: {'Token': localStorage.getItem('token')}
};

export const dashboardRun = () => {
  let API_URL = `https://ppp-capstone-music.herokuapp.com/users/1/exercises/1/scores`;
  let data = axios.get(API_URL, config)
  return {
    type: 'DASHBOARD_RUN',
    payload: data
  }
}

export const postSignUp = (user) => {
  let API_URL = `https://ppp-capstone-music.herokuapp.com/user/signup`;
  let data = axios.post(API_URL, user)
  return {
    type: 'USER_SIGN_UP',
    payload: data
  }
}

export const postLogIn = (user) => {
  let API_URL = `https://ppp-capstone-music.herokuapp.com/user/login`;
  let data = axios.post(API_URL, user);
  return {
    type: 'USER_LOG_IN',
    payload: data
  };
}

export const currentNote = (note) => {
  return {
    type: 'CURRENT_NOTE',
    payload: note,
  };
};

export const pushKeyEventToArray = (noteObj) => {

  return {
    type: 'ADD_KEY_EVENT',
    payload: noteObj,
  };
};

export const toggleCapture = () => {
  return {
    type: 'TOGGLE_CAPTURE',
  };
};

export const shiftOctaves = (direction) => {
  return {
    type: 'SHIFT_OCTAVES',
    payload: direction,
  };
};

export const toggleAudioCapture = () => {
  return {
    type: 'TOGGLE_AUDIO_CAPTURE',
  };
};

export const incrementGreenTime = () => {
  return {
    type: 'INCREMENT_GREEN_TIME',
  };
};

export const resetGreenTime = () => {
  return {
    type: 'RESET_GREEN_TIME',
  };
};

export const changeGreenTimeRequirement = (amount) => {
  return {
    type: 'CHANGE_GREEN_TIME_REQUIREMENT',
    amount,
  };
};

export const decrementScore = (amount) => {
  return {
    type: 'DECREMENT_SCORE',
    amount,
  };
};

export const resetScore = () => {
  return {
    type: 'RESET_SCORE',
  };
};

export const setKeyEventAsTargetNote = (keyEvent) => {
  return {
    type: 'SET_KEY_EVENT_AS_TARGET_NOTE',
    payload: keyEvent,
  };
};

export const setSungNote = (note) => {
  return {
    type: 'SET_SUNG_NOTE',
    payload: note,
  };
};

export const incrementTargetNoteIndex = () => {
  return {
    type: 'INCREMENT_TARGET_NOTE_INDEX',
  };
};

export const resetTargetNoteIndex = () => {
  return {
    type: 'RESET_TARGET_NOTE_INDEX',
  };
};

export const pushScoreToExerciseScoresArray = (score) => {
  return {
    type: 'PUSH_SCORE_TO_EXERCISE_SCORES_ARRAY',
    payload: score,
  };
};

export const singButton = () => {
  return {
    type: 'TOGGLE_SING_BUTTON'
  };
};

export const resetState = () => {
  return {
    type: 'RESET_STATE'
  };
};

const fetchAllPastExercises = (userId) => {
  const API_URL = `https://ppp-capstone-music.herokuapp.com/users/${userId}/exercises`;
  console.log(API_URL);
  return axios
  .get(API_URL)
  .then((response) => {
    console.log(response.data);
    return response.data;
  })
}

export const setAllPastExercises = (userId) => {
  const data = fetchAllPastExercises(userId);
  return {
    type: 'SET_ALL_PAST_EXERCISES',
    payload: data,
  }
}

export const doSearchExercises = () => {
  const API_URL =
  `https://ppp-capstone-music.herokuapp.com/users/17/exercises`;
  return {
    type:'SEARCH_USER_EXERCISES',
    payload: data,
  }
}
