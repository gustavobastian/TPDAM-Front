export class Dispositivo{
    private _dispositivoId: number;
    private _electrovalvulaId: number;
    private _nombre: string;
    private _ubicacion: string;
    

    constructor(electrovalvId: number, nombre: string, ubic: string, dispositivoId: number){
        this._dispositivoId= dispositivoId;
        this._nombre= nombre;
        this._ubicacion = ubic;
        this.electrovalvulaId= electrovalvId;
    }
    
    public  get dispositivoId(){
        return this._dispositivoId;
    }
    public set dispositivoId(num: number){
         this._dispositivoId = num;
    }
    
    public  get electrovalvulaId(){
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(num: number){
        this._electrovalvulaId = num;
    }
    
    public get nombre() {
        return this._nombre;
    }
    public set nombre(nom: string){
        this._nombre = nom;
    }
    public get ubicacion(){
        return this._ubicacion;
    }
    public set ubicacion(ubic: string){
        this._ubicacion = ubic;
    }
};
