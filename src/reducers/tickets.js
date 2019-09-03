
const tickets = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TICKET':
        return [
          ...state,
          {
            id: action.id,
            titulo: action.titulo,
            descripcion: action.descripcion,
            tipo: action.tipo,
            estado: action.estado
          }
        ]
    //   case 'DELETE_TICKET':
    //     return state.map(ticket =>
    //       (ticket.id === ticket.id)
    //         ? {...ticket, completed: !ticket.completed}
    //         : ticket
    //     )
      default:
        return state
    }
  }
  
  export default tickets