import { createStore } from "redux";

const initialState = {
  tickets: [
    {
      id: 1,
      titulo: "Hacer Alta Individuo",
      tipo: {
        breve: "req",
        descripcion: "Requerimiento"
      },
      descripcion: "Se solicita la baja del individuo DNI 265555444",
      estado: "Leido",
      fecha_creacion: "12/01/2019",
      fecha_ult_modificacion: "13/01/2019",
      proyecto: {
        id: 1,
        nombre: "SIGeMi",
        descripcion: "Aplicactivo SIGeMi"
      },
      movimientos: [
        {
          id: 1,
          user: "GPIMENTEL",
          fecha: "12/01/2019",
          detalle: "Se inicio el reclamo"
        },
        {
          id: 2,
          user: "JRODRIGUEZ",
          fecha: "12/01/2019",
          detalle: "Se inicio el reclamo"
        },
        {
          id: 3,
          user: "JRODRIGUEZ",
          fecha: "13/01/2019",
          detalle: "Prueba el reclamo"
        }
      ]
    },
    {
      id: 2,
      titulo: "Hacer Baja Individuo",
      tipo: {
        breve: "req",
        descripcion: "Requerimiento"
      },
      descripcion: "Se solicita la baja del individuo DNI 265555444",
      estado: "Leido",
      fecha_creacion: "14/01/2019",
      fecha_ult_modificacion: "14/01/2019",
      proyecto: {
        id: 1,
        nombre: "SIGeMi",
        descripcion: "Aplicactivo SIGeMi"
      },
      movimientos: [
        {
          id: 4,
          user: "GPIMENTEL",
          fecha: "12/01/2019",
          detalle: "Se inicio el reclamo"
        }
      ]
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
  ],
  tipoTicket: [
    { id: 1, breve: "req", descripcion: "Requerimiento" },
    { id: 1, breve: "rec", descripcion: "Reclamo" },
    { id: 1, breve: "err", descripcion: "Error" }
  ]
};

const reducerTickets = (state = initialState, action) => {
  switch (action.type) {
    case "ELIMINAR_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(t => t.id !== action.ticket.id)
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
    case "EDITAR_TICKET":
      const tickets = state.tickets.map(ticket => {
        if (ticket.id === action.ticket.id) {
          return action.ticket;
        } else {
          return ticket;
        }
      });
      return { ...state, tickets };
    default:
      return state;
  }
};

export default createStore(reducerTickets);
