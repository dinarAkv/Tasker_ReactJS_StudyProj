import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';






const TaskCreator = ({}) => {

  let headerText = "Header:";
  let descriptionText = "Description:";


  return(
    <div>
      <form className='form-group'>
        <div>
          <label for='headerInput'>{headerText}</label>
          <input type='text' className='form-control' id='headerInput' placeholder='Enter header of task'></input>
        </div>
        <div>
          <label for='descrptionInput'>{descriptionText}</label>
          <input type='text' className='form-control' id='descriptionInput' placeholder='Enter description of task'></input>
        </div>

        <button className='btn btn-success'>Сохранить</button>
      </form>
    </div>
  );
}

export default connect(
  (state) => ({

  }),
  dispatch => ({

  })
)(TaskCreator);
