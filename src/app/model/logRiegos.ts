export class LogRiegos{
    private _logRiegoId: number;
    private _apertura: number;
    private _fecha: string;
    private _electrovalvulaId: number;

    constructor(logRiegoIdDato: number, aperturaDato: number, fechaDato: string, electrovalvulaIdDato: number){
        this._logRiegoId = logRiegoIdDato;
        this._fecha= fechaDato;
        this._apertura = aperturaDato;
        this._electrovalvulaId= electrovalvulaIdDato;
    }

    public get logRiegoId() {
        return this._logRiegoId;
    }
    public get apertura() {
        return this._apertura;
    }
    public get fecha() {
        return this._fecha;
    }
    public get electrovalvulaId() {
        return this._electrovalvulaId;
    }

    public set logRiegoId(num: number) {
         this._logRiegoId =num;
    }
    public set apertura(num :number) {
         this._apertura=num;
    }
    public set fecha(fechaData: string) {
         this._fecha= fechaData;
    }
    public set electrovalvulaId(num: number) {
        this._electrovalvulaId= num;
    }

};

