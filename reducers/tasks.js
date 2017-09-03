const defaultTask = [
  {
    id: 1,
    header: 'default task',
    description: ''
  }
]

export default function tasks(state = defaultTask, action){

  console.log('reducer tasks');

  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      action.payload
    ];
    console.log('ADD_TASK changed');
  }

  return state;
}
