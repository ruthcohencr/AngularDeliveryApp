export class Client{
    id: string;
    from: string;
    to: string;
    humanId: string;
    client: {
        name: string;
        phone: string;
    };
    address: {
        street: string;
        number: string;
        city: string;
        geometry: {
            type: string;
            coordinates :number[];
        }
    }
}
