const defaultTask = [
  {
    id: 1,
    header: 'Header1',
    description: 'Descr1',
  },
  {
    id: 2,
    header: 'Header2',
    description: 'Descr2'
  },

]

export default function tasks(state = defaultTask, action){



  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      action.payload
    ];
  }
  else if (action.type === 'EDIT_TASK'){
      state.forEach((item, index, arr) => {
        if (item.id === action.payload.id){
          item.header = action.payload.header;
          item.description = action.payload.description;
          return state;
        }
      });

      return state;
  }
  else if (action.type === 'DELETE_TASK'){
      state.forEach((item, index, arr) => {
        if (item.id === action.payload.id) {
          state = state.filter(task => task.id !== action.payload.id);
          return state;
        }
      });

      return state;
  }

  return state;
}
