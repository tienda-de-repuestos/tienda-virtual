import { Timestamp } from '../../../../node_modules/rxjs';

export interface Product {
    code: string;
    image: string;
    maker: string;
    name: string;
    price: number;
    quantity: number;
    manu_date?: Timestamp<Date>;
    model? : string;
    description?: string;
}
