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
  proyectos: [
    {
      id: 1,
      nombre: "SIGeMi",
      descripcion: "Aplicactivo SIGeMi"
    },
    {
      id: 2,
      nombre: "APEX",
      descripcion: "Aplicaciones APEX"
    }
  ]
};

const reducerTickets = (state = initialState, action) => {
  switch (action.type) {
    case "ELIMINAR_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(t => t.id !== action.id)
      };
    case "AGREGAR_TICKET":
      return { ...state, tickets: state.tickets.concat(action.ticket) };
    case "AGREGAR_PROYECTO":
      return { ...state, proyectos: state.proyectos.concat(action.proyecto) };
    case "ELIMINAR_PROYECTO":
      return {
        ...state,
        proyectos: state.proyectos.filter(
          proyecto => proyecto.id !== action.proyecto.id
        )
      };
    case "EDITAR_PROYECTO":
      const proyectos = state.proyectos.map(proyecto => {
        if (proyecto.id === action.proyecto.id) {
          return action.proyecto;
        } else {
          return proyecto;
        }
      });
      return { ...state, proyectos };

    default:
      return state;
  }
};

export default createStore(reducerTickets);
