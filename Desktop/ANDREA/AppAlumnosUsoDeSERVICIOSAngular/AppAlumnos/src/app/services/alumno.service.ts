import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno'

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
listAlumnos: Alumno[] = [
  {nombre: 'Juan Perez', estado: 'Aprobado'},
  {nombre: 'Nicolás García', estado: 'No aprobado'},
  {nombre: 'María Funes', estado: 'Promocionado'}
]
  constructor() { }
/* 
  aqui pusheamos el alumno a la lista del servicio, y usamos unshift para que lo agregue de primero y no de último */
  addAlumno(alumno: Alumno): void{
    this.listAlumnos.unshift(alumno);
  }

  updateAlumno(id:number, estado:string):void{

    this.listAlumnos[id].estado = estado;
  }
}
