export const tickets = [
  {
    id: 1,
    titulo: "Hacer Alta Individuo",
    tipo: "Requerimiento",
    descripcion: "Se solicita la baja del individuo DNI 265555444",
    estado: "Leido",
    fecha_creacion: "12/01/2019",
    fecha_ult_modificacion: "13/01/2019",
    movimientos: [
      { id: 1, detalle: "se creo el requerimiento" },
      { id: 2, detalle: "se leyó el requerimiento" }
    ]
  },
  {
    id: 2,
    titulo: "Hacer Baja Individuo",
    tipo: "Requerimiento",
    descripcion: "Se solicita la baja del individuo DNI 265555444",
    estado: "Leido",
    fecha_creacion: "14/01/2019",
    fecha_ult_modificacion: "14/01/2019",
    movimientos: [
      { id: 3, detalle: "se creo el requerimiento" },
      { id: 4, detalle: "se leyó el requerimiento" }
    ]
  },
  {
    id: 3,
    titulo: "Hacer Baja Individuo",
    tipo: "Requerimiento",
    descripcion: "Se solicita la baja del individuo DNI 265555444",
    estado: "Leido",
    fecha_creacion: "14/01/2019",
    fecha_ult_modificacion: "14/01/2019",
    movimientos: [
      { id: 3, detalle: "se creo el requerimiento" },
      { id: 4, detalle: "se leyó el requerimiento" }
    ]
  },

  {
    id: 4,
    titulo: "Hacer Baja Individuo",
    descripcion: "Se solicita la baja del individuo DNI 20005540",
    tipo: "Requerimiento",
    estado: "Leido",
    fecha_creacion: "14/01/2019",
    fecha_ult_modificacion: "14/01/2019",
    movimientos: [
      { id: 3, detalle: "se creo el requerimiento" },
      { id: 4, detalle: "se leyó el requerimiento" }
    ]
  }
];
export const tipoTicket = [
  { key: "1", text: "Requerimiento", value: "req" },
  { key: "2", text: "Reclamo", value: "rec" },
  { key: "3", text: "Error", value: "err" }
];

export const proyectos = [
  { id: 1, nombre: "SIGeMi", descripcion: "Sistema Gestion Municipal" },
  { id: 2, nombre: "APEX", descripcion: "Sistemas APEX" }
];
