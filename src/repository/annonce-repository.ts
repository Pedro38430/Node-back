import { ObjectId } from "mongodb";
import { Annonce } from "../entities";
import { connection } from "./connection"


const collection = connection.db('Projet_Partage').collection<Annonce>('Annonce');

export const annonceRepository = {

findAll(){
    return collection.find().toArray();
},

findById(_id:string) {
    return collection.findOne(new ObjectId(_id));
},

async persist(Annonce:Annonce) {
    const result = await collection.insertOne(Annonce);
    Annonce._id = result.insertedId;
    return Annonce;
},

remove(_id:string){
return collection.deleteOne({_id:new Object(_id)})
},
update(_id:string, Annonce:Annonce) {
    return collection.updateOne({_id:new ObjectId(_id)}, {$set:Annonce})
    }
}
