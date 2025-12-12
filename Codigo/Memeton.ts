export class Memento {
  private estado: string;

  constructor(estado: string) {
    this.estado = estado;
  }

  public getEstado(): string {
    return this.estado;
  }
}