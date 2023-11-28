export function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added':{
        return [...tasks,
        {
          text: action.text,
          id: action.id}]
      }
      case 'delete':{
        return tasks.filter(idx => idx.id != action.id)
      }  
      default:
        throw new Error('Unknown action: '+ action.type) ;
    }
  } 