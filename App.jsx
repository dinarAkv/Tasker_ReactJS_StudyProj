import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './styles/app.css';
import { deleteTaskAction } from './actions/tasks';
import { addTaskUrl, editTaskUrl } from './constants/appUrls'

// Main component show list of all tasks in state.
// And show widgets to edit task or add new.
const App = ({ tasks, onDeleteTask }) => {

  let headerNameCol = "Header";
  let descriptionNameCol = "Description";

  return(
    <div>
      <table className='table taskTable'>

        <thead>
          <tr>
            <th className='taskHeader'>{headerNameCol}</th>
            <th className='taskHeader'>{descriptionNameCol}</th>
            <th></th>
          </tr>
        </thead>

        <tbody >
          {tasks.map((task, index) =>
              <tr key={index} >
                <td className='cellParams'>{task.header}</td>
                <td className='cellParams'>{task.description}</td>
                <td>
                  <Link to={editTaskUrl + task.id}><i className="glyphicon glyphicon-pencil"></i></Link>
                </td>
                <td>
                  <Link value={task.id} onClick={() => onDeleteTask(task)}>
                    <i className='glyphicon glyphicon-remove'></i>
                  </Link>
                </td>
              </tr>
           )}
        </tbody>

      </table>


        {/* // Go to component for adding new task. */}
        <Link className='btn btn-success addTask' to={addTaskUrl}>Add task</Link>

    </div>
  );
}


export default connect(
  (state) => ({
    // Get all tasks.
    tasks: state.tasks
  }),
  dispatch => ({

      onDeleteTask: (task) => {
        console.log('onDeleteTask');

        dispatch(deleteTaskAction(task)).then((response) => {
            console.log(response);
        })
      }

  })
)(App);
