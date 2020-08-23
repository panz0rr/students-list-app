import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {
  listAlumnos: Alumno[] = [];
/* el AlumnoService es el servicio creado en alumno.services el cual se importa */
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.getAlumno();
  }
/* Aquí a nuestra lista vacía le pasamos los valores ya creados en alumnoService! ya que es private,
 no podemos acceder a al servicio, llamamos a this.alumnoService y llamamos a la lista creada dentro
 con sus objetos, que es la listAlumnos */
  getAlumno(){
    this.listAlumnos = this.alumnoService.listAlumnos;
  }

  updateAlumno(id: number, estado:string){
    this.alumnoService.updateAlumno(id, estado);
  }

}
