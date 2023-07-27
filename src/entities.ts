export interface User {
    _id?:any;
    name:string;
    email:string;
    password:string;
    roles: string;
}

export interface Annonce {
    _id?:any;
    description:string;
    adresse: string;
    type:string;
    name:string;
    status:boolean;
    User: {
        _id?:any;
        name:string;
    }
}


export interface Emprunt{
    _id?:any;
    Objet:{
        _id?:any;
        name:string;
    }
    date: Date;
    demande:string;
    status:string;
    User: {
        _id?:any;
        name:string;
    }

}