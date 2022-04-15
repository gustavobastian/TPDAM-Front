export class Medicion{
    public medicionId: number;
    public fecha: string;
    public valor: string;
    public dispositivoId: number;

    constructor(medIdDato: number, fechaDato: string, valorDato: string, dispositivoIdDato: number){
        this.medicionId = medIdDato;
        this.fecha= fechaDato;
        this.valor = valorDato;
        this.dispositivoId= dispositivoIdDato;
    }
};
