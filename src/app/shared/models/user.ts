import { Timestamp } from '../../../../node_modules/rxjs';

export interface User {
    apellidos: string;
    direccion?: string;
    fechNac: any;
    mail: string;
    nombre: string;
    password: string;
    telefono?: number;
    confPassword?:string;
}
