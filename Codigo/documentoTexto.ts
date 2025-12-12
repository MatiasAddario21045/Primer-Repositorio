import { Documento } from "./Documento.ts";

export class DocumentoTexto extends Documento {
  validar(contenido: string): boolean {
    
    return contenido !== "";
  }
}