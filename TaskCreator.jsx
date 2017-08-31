import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import { addTaskAction } from './actions/tasks';




const TaskCreator = ({ tasks, onAddTask }) => {

  let headerText = "Header:";
  let descriptionText = "Description:";

  let headerInput = '';
  let descriptionInput = '';

  const addTask = () => {
    console.log('Add task');

    const maxId = Math.max.apply(Math, tasks.map((obj) => {return obj.id}));
    const newId = maxId + 1;

    const newTask = {
      id: newId,
      header: headerInput.value,
      description: descriptionInput.value
    }

    onAddTask(newTask).then(() => {console.log('');});


  }

  return(
    <div>
      <form className='form-group'>
        <div>
          <label htmlFor='headerInput'>{headerText}</label>
          <input type='text' className='form-control' id='headerInput' placeholder='Enter header of task'
                    ref={(input) => headerInput = input}></input>
        </div>
        <div>
          <label htmlFor='descrptionInput'>{descriptionText}</label>
          <input type='text' className='form-control' id='descriptionInput' placeholder='Enter description of task'
                    ref={(input) => descriptionInput = input}></input>
        </div>

        <button className='btn btn-success' onClick={addTask}>Сохранить</button>
      </form>
    </div>
  );
}

export default connect(
  (state) => ({
    tasks: state.tasks
  }),
  dispatch => ({

    onAddTask: (task) => {
      const payload = {
        id: task.id,
        header: task.header,
        description: task.description
      };
      dispatch({ type: 'ADD_TASK', payload });
    }


  })
)(TaskCreator);
