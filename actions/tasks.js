import { browserHistory } from 'react-router';

export const addTaskAction = (task) => {
  return (dispatch) => {
    // const payload = task;
    console.log('taskkk', task);
    dispatch({ type: 'ADD_TASK', task });

  };
}
