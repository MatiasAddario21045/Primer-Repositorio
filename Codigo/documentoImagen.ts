import { Documento } from "./Documento.ts";


export class DocumentoImagen extends Documento {

  private alto: number;
  private largo : number;

  constructor(nombre : string, contenido: string,alto : number, largo: number){
    super(nombre,contenido)
    this.alto = alto;
    this.largo = largo;
  }

  
  public getAlto() : number {
    return this.alto;
  }
  

  public getLargo() : number {
    return this.largo;
  }
    
  validar(contenido: string): boolean {
    if ((contenido === "png" || contenido === "jpg" || contenido === "bmp") && this.alto >= 100 && this.largo >= 100) {
      return true;
    } else {
      return false;
    }
  }
}