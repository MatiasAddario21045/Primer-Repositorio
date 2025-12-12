import { Memento } from "./Memeton.ts";
export class Historial {
  private pila: Memento[];

  constructor() {
    this.pila = [];
  }

  public guardar(memento: Memento): void {
    this.pila.push(memento);
  }

  public deshacer(): Memento | null {
    if (this.pila.length > 0) {
      return this.pila.pop() || null;
    } else {
      return null;
    }
  }

  public mostrarHistorial(): void {
    console.log("Historial de versiones:");
    for (let i = 0; i < this.pila.length; i++) {
      console.log("Versión " + (i + 1) + ": " + this.pila[i].getEstado());
    }
  }
}
