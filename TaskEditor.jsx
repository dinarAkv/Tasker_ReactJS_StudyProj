import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import { editTaskAction } from './actions/tasks';
import './styles/taskEditor.css';
import { indexUrl } from './constants/appUrls';
import * as TaskActionCreators  from './actions/tasks';


// Component to edit task. It change user defined task in state.
const TaskEditor = ({selectedTask, taskActions}) => {

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

      taskActions.editTaskAction(editedTask);
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

      <Link className='btn btn-success saveBtn' onClick={changeTaskInState} to={indexUrl}>Save</Link>

    </div>
  );
}



const mapStateToProps = (state, ownProps) => ({
  // Find task with specified id.
  selectedTask: state.tasks.find(task => task.id === Number(ownProps.params.id)),
});

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(TaskActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(TaskEditor);
