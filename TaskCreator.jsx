import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';

import { addTaskAction } from './actions/tasks';
import { indexUrl } from './constants/appUrls';
import * as TaskActionCreators  from './actions/tasks';



// Component create new task and save it in state.
const TaskCreator = ({ tasks, taskActions, myVal }) => {

  let headerText = "Header:";
  let descriptionText = "Description:";

  let headerInput = '';
  let descriptionInput = '';

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

    taskActions.addTaskAction(newTask);
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

        <Link className='btn btn-success' to={indexUrl} onClick={addTask}>Save</Link>
      </form>
    </div>
  );
}



const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(TaskActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator);
