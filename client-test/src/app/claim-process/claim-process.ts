export class ContactPerson {

    id?: number;
    deliveryFlag?: boolean;
    type?: {
        code: number;
        value: string;
    };
    firstName?: string;
    lastName?: string;
    identity?: number;
    address?: Adderss;
    cellPhone?: number;
    email?: string;
}

export class Adderss {
    homeNumber?: number;
    cityName?: string;
    streetName?: string;
}