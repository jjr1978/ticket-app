import { createStore } from "redux";

const initialState = {
  tickets: [
    {
      id: 1,
      titulo: "Hacer Alta Individuo",
      tipo: "Requerimiento",
      descripcion: "Se solicita la baja del individuo DNI 265555444",
      estado: "Leido",
      fecha_creacion: "12/01/2019",
      fecha_ult_modificacion: "13/01/2019"
    },
    {
      id: 2,
      titulo: "Hacer Baja Individuo",
      tipo: "Requerimiento",
      descripcion: "Se solicita la baja del individuo DNI 265555444",
      estado: "Leido",
      fecha_creacion: "14/01/2019",
      fecha_ult_modificacion: "14/01/2019"
    }
  ],
  proyectos: []
};

const reducerTickets = (state = initialState, action) => {
  if (action.type === "ELIMINAR_TICKET") {
    return { ...state, tickets: state.tickets.filter(t => t.id !== action.id) };
  } else if (action.type === "AGREGAR_TICKET") {
    return { ...state, tickets: state.tickets.concat(action.ticket) };
  }

  return state;
};

export default createStore(reducerTickets);
