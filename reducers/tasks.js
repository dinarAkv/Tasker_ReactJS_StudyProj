const defaultTask = [
  {
    id: 1,
    title: 'default task',
    description: ''
  }
]

export default function tasks(state = defaultTask, action){
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      action.payload
    ];
  }

  return state;
}
