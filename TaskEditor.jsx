import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { editTaskAction } from './actions/tasks';
import './styles/taskEditor.css';


// Component to edit task. It change user defined task in state.
const TaskEditor = ({selectedTask, onEditTask}) => {

  let headerText = "Header:";
  let descriptionText = "Description:";

  let headerInput = '';
  let descriptionInput = '';

  // Form edited task object and call action for add it to state.
  const changeTaskInState = () => {
      const editedTask = {
        id: selectedTask.id,
        header: headerInput.value,
        description: descriptionInput.value
      }

      onEditTask(editedTask);
  }

  return(
    <div>

      <div>
        <label htmlFor='headerInput'>{headerText}</label>
        <input type='text' className='form-control' id='headerInput' placeholder='Enter header of task'
                  defaultValue={selectedTask.header} ref={(input) => headerInput = input}></input>
      </div>
      <div>
        <label htmlFor='descrptionInput'>{descriptionText}</label>
        <input type='text' className='form-control' id='descriptionInput' placeholder='Enter description of task'
                  defaultValue={selectedTask.description}   ref={(input) => descriptionInput = input}></input>
      </div>

      <Link className='btn btn-success saveBtn' onClick={changeTaskInState} to='/'>Save</Link>

    </div>
  );
}


export default connect(
  (state, ownProps) => ({
    // Find task with specified id.
    selectedTask: state.tasks.find(task => task.id === Number(ownProps.params.id))
  }),
  dispatch => ({
      onEditTask: (task) => {
        console.log('Edit task');

        dispatch(editTaskAction(task)).then((response) => {
          console.log('Edit task reponse:', response);
        });
      }
  })
)(TaskEditor);
