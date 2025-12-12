import type { IValidable } from "./Ivalidable.ts";

export abstract class Documento implements IValidable {

    private nombre: string;
    private contenido: string;


    constructor(nombre: string, contenido: string) {
        this.nombre = nombre;
        this.contenido = contenido;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getContenido(): string {
        return this.contenido;
    }

    public setContenido(contenido: string): void {
        this.contenido = contenido;
    }

    public editar(nuevoContenido: string): void {
        this.contenido = nuevoContenido;
    }
    
    abstract validar(contenido: string): boolean;
    

}