import { Documento } from "./Documento.ts";
import { Historial } from "./Historial.ts";
import { Memento } from "./Memeton.ts";


export class GestorVersiones {
  private documento: Documento;
  private historial: Historial;

  constructor(documento: Documento) {
    this.documento = documento;
    this.historial = new Historial();
  }

  public getDocumento(): Documento {
    return this.documento;
  }

  public getHistorial(): Historial {
    return this.historial;
  }

  public guardarVersion(): void {
    const memento = new Memento(this.documento.getContenido());
    this.historial.guardar(memento);
  }

  public restaurarUltima(): void {
    const memento = this.historial.deshacer();
    if (memento) {
      this.documento.setContenido(memento.getEstado());
      console.log("Se restauró la última versión guardada.");
    } else {
      console.log("No hay versiones anteriores para restaurar.");
    }
  }

  public mostrarVersiones(): void {
    this.historial.mostrarHistorial();
  }
}
