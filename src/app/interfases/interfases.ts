export interface Examen {
  calif: number;
  aciertos: number;
  pregExamen: Pregunta[];
}

export interface Pregunta {
    id_preg: number;
    desc: string;
    respuestas: Respuesta[];
    resp_correcta: number;
    desccm: string;
    respuser: number;
    correcta: boolean;
    subtema: string;
  }

export interface Respuesta {
    id: number;
    desc: string;
  }
