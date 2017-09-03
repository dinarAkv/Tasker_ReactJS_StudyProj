// import { browserHistory } from 'react-router';
import {  replace } from 'react-router-redux'

import  store from './../main';

export const addTaskAction = (task) => (dispatch) =>
        new Promise((resolve, rejected) => {

            console.log('taskkk2', task);

            const payload = {
              id: task.id,
              header: task.header,
              description: task.description
            };

            console.log('taskkk2', payload);

            dispatch({ type: 'ADD_TASK', payload, });

            console.log('store', store.getState());

            resolve('success');
        });


  // console.log('taskkk1', task);
  // return new Promise((dispatch) => {
  //    console.log('taskkk2', task);
  //    const payload = {
  //      id: task.id,
  //      header: task.header,
  //      description: task.description
  //    };
  //    console.log('taskkk2', payload);
  //
  //    dispatch({ type: 'ADD_TASK', payload, });
  //
  //
  //
  // });
