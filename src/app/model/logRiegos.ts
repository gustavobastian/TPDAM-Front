export class LogRiegos{
    public logRiegoId: number;
    public apertura: number;
    public fecha: string;
    public electrovalvulaId: number;

    constructor(logRiegoIdDato: number, aperturaDato: number, fechaDato: string, electrovalvulaIdDato: number){
        this.logRiegoId = logRiegoIdDato;
        this.fecha= fechaDato;
        this.apertura = aperturaDato;
        this.electrovalvulaId= electrovalvulaIdDato;
    }
};

