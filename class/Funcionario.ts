import { randomUUID } from "crypto";

class Funcionario {
    id: string;
    nome: string;
    cargo: string;
    taxaHoraria: number;
    horasTrabalhadas: number[];

    constructor(nomeP: string, cargoP: string, taxaHorariaP: number){
        this.id = randomUUID().sub
    }
}