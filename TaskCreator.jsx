import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { addTaskAction } from './actions/tasks';




// Component create new task and save it in state.
const TaskCreator = ({ tasks, onAddTask }) => {

  let headerText = "Header:";
  let descriptionText = "Description:";

  let headerInput = '';
  let descriptionInput = '';

  let indexLink = `/`;

  // Create new task and call action to save new task
  // in state.
  const addTask = () => {
    console.log('Add task');

    const maxId = Math.max.apply(Math, tasks.map((obj) => {return obj.id}));
    const newId = maxId + 1;

    const newTask = {
      id: newId,
      header: headerInput.value,
      description: descriptionInput.value
    }

    onAddTask(newTask);


  }

  return(
    <div>
      <form className='form-group' >
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

        <Link className='btn btn-success' to={indexLink} onClick={addTask}>Save</Link>
      </form>
    </div>
  );
}

export default connect(
  (state) => ({
    tasks: state.tasks
  }),
  dispatch => ({
    // Bind method in action and this component.
    onAddTask: (task) => {
        console.log('onAddTask');

        dispatch(addTaskAction(task)).then((response) => {
            console.log('success');
        }, (response) => {
            console.log('rejected');
        });

    }


  })
)(TaskCreator);
