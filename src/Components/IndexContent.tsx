import React from 'react';
import 'bootstrap-material-design'
import 'jquery'
import '../indexContent.css';
import Niños from '../img/FilosofiaNiños 1.png'

const IndexContent: React.FC= () => {
  return (
    <div className="row" id="contenido">
        <div className="col">
            <div className="row">
                <div className="col-8">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Niños} alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Niños} alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Niños} alt="Second slide"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 cards">
                    <div className="row">
                        <div className="col">
                            <div className="card cards1">
                                <div className="card-body">
                                    <h6>
                                        ¿Forma de aprender?
                                    </h6>
                                    <p>
                                        ¿Acaso existen diferentes formas de aprender? ¡si!, los metodos de aprendizaje son 
                                        acciones formativas que esperan conseguir la enseñanza de determinados contenidos y 
                                        la obtención de objetivos específicos. Cada método es diferente en sí, y persigue objetivos 
                                        distintos. No todos los estudiantes aprenden de la misma manera. A unos el estímulo visual 
                                        les llega antes, a otros el auditivo, el táctil o el cinestético. Si descubres qué tipo de 
                                        aprendizaje sigues, podrás conseguir que tu rendimiento académico sea mayor y mejor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card card2 cards1">
                                <div className="card-body">
                                    <h6>
                                        ¿Metodos de aprendizaje?
                                    </h6>
                                    <p>
                                        es el conjunto lógico de procedimientos que tienden a dirigir el aprendizaje hacia un objetivo, 
                                        tema o contenido,  ya sea exponer de manera lógica-secuencial un tema de estudio, resolver problemáticas 
                                        mediante la investigación, trabajo en equipo,  la colaboración, presentación de resultados. La finalidad de los 
                                        métodos de aprendizaje es lograr el aprendizaje significativo y el desarrollo de competencias para obtener soluciones 
                                        pertinentes, creativas e innovadoras.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col">
                        <div className="card card2">
                            <div className="card-body">
                                <h6>
                                    ERRRE
                                </h6>
                              <p>
                                El método de estudio “ERRRE” que por sus siglas significa: Exploración, Recepción, Reflexión,
                                 Repaso, Evaluación; es un procedimiento o conjunto de reglas que se aplican para lograr un objetivo 
                                 que es estudiar, es enseña a comprender el material para asimilar y repasar un tema en específico.
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
   </div>
      
  );
}

export default IndexContent;