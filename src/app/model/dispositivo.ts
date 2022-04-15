export class Dispositivo{
    public dispositivoId: number;
    public nombre: string;
    public ubicacion: string;
    public electrovalvulaId: number;

    constructor(electrovalvId: number, nombre: string, ubic: string, dispositivoId: number){
        this.dispositivoId= dispositivoId;
        this.nombre= nombre;
        this.ubicacion = ubic;
        this.electrovalvulaId= electrovalvId;
    }
    /*
    public  gDispositivoId(): number{
        return this.dispositivoId;
    }
    public  sDispositivoId(num: number){
         this.dispositivoId = num;
    }
    public  gElectrovalvId(): number {
        return this.electrovalvulaId;
    }
    public  sElectrovalvId(num: number){
        this.electrovalvulaId = num;
    }

    public  gNombre(): string {
        return this.nombre;
    }
    public  sNombre(nom: string){
        this.nombre = nom;
    }
    public gUbicacion(): string{
        return this.ubicacion;
    }
    public sUbicacion(ubic: string){
        this.ubicacion = ubic;
    }*/
};
