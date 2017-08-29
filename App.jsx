import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './styles/app.css';

const App = ({ tasks }) => {

  let headerNameCol = "Header";
  let descriptionNameCol = "Description";

  console.log('Tasks:' ,tasks);

  return(
    <div>
      <table>

        <thead>
          <tr>
            <th className='taskHeader'>{headerNameCol}</th>
            <th className='taskHeader'>{descriptionNameCol}</th>
          </tr>
        </thead>

        <tbody >
          {tasks.map((task, index) =>
              <tr key={index} >
                <td className='cellParams'>{task.title}</td>
                <td className='cellParams'>{task.description}</td>
              </tr>
           )}
        </tbody>

      </table>

      <button className='addTask' className='btn btn-success' >Add task</button>
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
