import React from 'react'
import { CoursesInfo } from '../Functions/CoursesInfo';
import { Titles } from '../Functions/Titles'

const infoCursosEs = [
    {title: "Quality Assurance", place: "freeCodeCamp", info: 'Curso de programación que profundiza los conocimientos dictados en "Back End Development and APIs" enseñando a escribir pruebas utilizando <b>Chai</b> para asegurarnos del buen funcionamiento de la aplicación. Así como aprendar <b>Node.js</b> avanzado como el uso de <b>Passport</b> para la autentificación y <b>Socket.io</b> para la comunicación entre el servidor y el cliente.'},
    {title: "Relational Database", place: "freeCodeCamp", info: 'Curso de programación en la terminal utilizando <b>Bash</b>, <b>PostgreSQL</b> y <b>Git</b> para poder realizar programas interactivos con almacenamiento en bases de datos y un sistema de control de versiones. Duración: 300hs.'},
    {title: "Responsive Web Design", place: "freeCodeCamp", info:'Curso de programación utilizando <b>HTML</b> y <b>CSS</b> para crear páginas web tanto estáticas como dinámicas de 300hs de duración.'},  
    {title: "Scientific Computing with Python", place: "freeCodeCamp", info: 'Curso de programación acerca de <b>Python</b> orientado a las bases fundamentales y sus aplicaciones en estructuras de datos, networking, bases de datos relacionales y visualización de datos.'},
    {title: "Back End Development and APIs", place: "freeCodeCamp", info: 'Curso de programación Back End utilizando <b>Node.js</b> con el framework <b>Espress.js</b> por medio de microservicios y almacenando datos en bases no relacionales con <b>MongoDB</b> de 300hs de duración.'},
    {title: "JavaScript Algorithms and Data Structures", place: "freeCodeCamp", info: 'Curso de programación en <b>JavaScript</b> orientado a las bases fundamentales, el Front End interactivo, así como OOP y FP de 300hs de duración.'},
    {title: "FrontEnd Development Libraries", place: "freeCodeCamp", info: 'Curso de programación sobre librerias FrontEnd tales como, <b>Bootstrap</b>, <b>Sass</b>, <b>jQuery</b> para los estilos de las páginas, el muestreo de la información con la libreria <b>D3.js</b> y las librerias <b>React</b> y <b>Redux</b> de 100hs de duración.'},
  ];

export const InfoCursosEs = () => {
  return (
    <div className='divCursos'>
      <Titles text="CURSOS" />
      {infoCursosEs.map(({ title, place, info }) => <CoursesInfo title={title} place={place} info={info} />)}
    </div> 
  )
}
