import React from 'react'
import { CoursesInfo } from '../Functions/CoursesInfo';
import { Titles } from '../Functions/Titles'

const infoCursosEs = [
  {title: "Data Analyisis with Python - freeCodeCamp", info: 'Curso sobre los fundamentos del análisis de datos con <b>Python</b>, aprendiendo a leer informacion de archivos CSV y SQL, y cómo usar las librerias <b>Pandas</b>, <b>NumPy</b>, <b>Matplotlib</b> y <b>Seaborn</b> para procesar y visualizar información.'},
  {title: "Relational Database - freeCodeCamp", info: 'Curso en la terminal utilizando <b>Bash</b>, <b>PostgreSQL</b> y <b>Git</b> para poder realizar programas interactivos con almacenamiento en bases de datos y un sistema de control de versiones. Duración: 300hs.'},
  {title: "Scientific Computing with Python - freeCodeCamp", info: 'Curso acerca de <b>Python</b> orientado a las bases fundamentales y sus aplicaciones en estructuras de datos, networking, bases de datos relacionales y visualización de datos.'},
  {title: "Back End Development and APIs - freeCodeCamp", info: 'Curso Back End utilizando <b>Node.js</b> con el framework <b>Espress.js</b> por medio de microservicios y almacenando datos en bases no relacionales con <b>MongoDB</b> de 300hs de duración.'},
  {title: "Quality Assurance - freeCodeCamp", info: 'Curso que profundiza los conocimientos dictados en "Back End Development and APIs" enseñando a escribir pruebas utilizando <b>Chai</b> para asegurarnos del buen funcionamiento de la aplicación. Así como aprender <b>Node.js</b> avanzado como el uso de <b>Passport</b> para la autentificación y <b>Socket.io</b> para la comunicación entre el servidor y el cliente.'},
  {title: "Responsive Web Design - freeCodeCamp", info:'Curso utilizando <b>HTML</b> y <b>CSS</b> para crear páginas web tanto estáticas como dinámicas de 300hs de duración.'},  
  {title: "JavaScript Algorithms and Data Structures - freeCodeCamp", info: 'Curso en <b>JavaScript</b> orientado a las bases fundamentales, el Front End interactivo, así como OOP y FP de 300hs de duración.'},
  {title: "FrontEnd Development Libraries - freeCodeCamp", info: 'Curso sobre librerias FrontEnd tales como, <b>Bootstrap</b>, <b>Sass</b>, <b>jQuery</b> para los estilos de las páginas, el muestreo de la información con la libreria <b>D3.js</b> y las librerias <b>React</b> y <b>Redux</b> de 100hs de duración.'},
  ];

export const InfoCursosEs = () => {
  return (
    <div className='divCursos m-0 pt-10'>
      <Titles text="CURSOS Y FORMACIÓN COMPLEMENTARIA" />
      {infoCursosEs.map(({ title, place, info }) => <CoursesInfo title={title} place={place} info={info} />)}
    </div> 
  )
}
