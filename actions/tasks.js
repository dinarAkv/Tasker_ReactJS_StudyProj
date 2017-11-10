// import { browserHistory } from 'react-router';
import {  replace } from 'react-router-redux'

import  store from './../main';




export const addTaskAction = (task) => (dispatch) =>
        new Promise((resolve, rejected) => {

            const payload = {
              id: task.id,
              header: task.header,
              description: task.description
            };

            dispatch({ type: 'ADD_TASK', payload, });

            resolve('success');
        });


export const editTaskAction = (task) => (dispatch) =>
        new Promise((resolve, rejected) => {

            const payload = {
              id: task.id,
              header: task.header,
              description: task.description
            };

            try {
                dispatch({ type: 'EDIT_TASK', payload });
                resolve('success');
            } catch (e) {
                rejected('failed');
            }

        });

export const deleteTaskAction = (task) => (dispatch) =>
       new Promise((resolve, rejected) => {

          const payload = {
            id: task.id,
            header: task.header,
            description: task.description
          };

          try {
            dispatch({ type: 'DELETE_TASK', payload });
            resolve('success');
          } catch (e) {
            rejected('failed');
          }

       });
