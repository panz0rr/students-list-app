import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
nombre = '';
estado =  'No aprobado';

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
  }

  agregarAlumno(): void{
    const alumno: Alumno = {
      nombre: this.nombre, estado: this.estado
    };

    /* aquí llamamos a alumno service que se agregó al constructor acá para poder acceder a él,
    y llamamos al método creado que lo añade a la lista */

    this.alumnoService.addAlumno(alumno);
    this.nombre = '';
    this.estado = 'No aprobado';
    
  }

}
