export class Medicion{
    private _medicionId: number;
    private _fecha: string;
    public _valor: string;
    private _dispositivoId: number;

    constructor(medIdDato: number, fechaDato: string, valorDato: string, dispositivoIdDato: number){
        this._medicionId = medIdDato;
        this._fecha= fechaDato;
        this._valor = valorDato;
        this._dispositivoId= dispositivoIdDato;
    }

    public get medicionId(){
        return this._medicionId;
    }
    public get fecha() {
        return this._fecha;
    }
    public get valor() {
        return this._valor;
    }
    public get dispositivoId() {
        return this._dispositivoId;
    }
    public set medicionId(num: number){
        this._dispositivoId=num;
    }
    public set  fecha(fechadata: string){
        this._fecha=fechadata;
    }
    public set valor(valor: string){
        this._valor=valor;
    }
    public set dispositivoId(num: number){
        this._dispositivoId= num;
    }
    

};
