import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './styles/app.css';

const App = ({ tasks }) => {

  let headerNameCol = "Header";
  let descriptionNameCol = "Description";
  let addTaskLink = `/addTask/`;



  const addTask = () => {

  }

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
                  <a><i className="glyphicon glyphicon-pencil"></i></a>
                </td>
                <td>
                  <a><i className='glyphicon glyphicon-remove'></i></a>
                </td>
              </tr>
           )}
        </tbody>

      </table>


        <Link className='btn btn-success addTask' to={addTaskLink}>Add task</Link>

    </div>
  );
}


export default connect(
  (state, ownProps) => ({
    tasks: state.tasks,
    ownProps
  }),
  dispatch => ({

  })
)(App);
