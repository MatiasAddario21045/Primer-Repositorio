import { DocumentoImagen } from "./documentoImagen.ts";
import { DocumentoTexto } from "./documentoTexto.ts";
import { GestorVersiones } from "./gestorVersiones.ts";

const doc1 = new DocumentoTexto("Apunte", "Primera versión");
const gestor = new GestorVersiones(doc1);

// Guardamos versiones
gestor.guardarVersion();
doc1.editar("Segunda versión");
gestor.guardarVersion();
doc1.editar("Tercera versión");
gestor.guardarVersion();

// Mostramos historial
gestor.mostrarVersiones();

// Restauramos una versión anterior
gestor.restaurarUltima();
console.log("Contenido actual del documento: " + doc1.getContenido());

// Restauramos otra versión anterior

gestor.restaurarUltima();
console.log("Contenido actual del documento: " + doc1.getContenido());

// Restauramos otra versión anterior

gestor.restaurarUltima();
console.log("Contenido actual del documento: " + doc1.getContenido());

// no hay nada
gestor.restaurarUltima();
console.log("Contenido actual del documento: " + doc1.getContenido());

//sumamos una version luego de vaciar el historial
doc1.editar("version 4");
gestor.guardarVersion();

//mostramos el historial
gestor.mostrarVersiones