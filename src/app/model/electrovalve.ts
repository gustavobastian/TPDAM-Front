export class Electrovalvula{
    private _electrovalvulaId: number;
    private _nombre: string;

    constructor(electrovalvulaId: number, nombre: string){
        this._electrovalvulaId = electrovalvulaId;
        this._nombre = nombre;
    }

    public get nombre(): string{
        return this._nombre;
    }
    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }
    public set nombre(nombre: string){
        this._nombre = nombre;
    }
    public set electrovalvulaId(electrovalvulaId: number){
        this._electrovalvulaId= electrovalvulaId;
    }

}

    