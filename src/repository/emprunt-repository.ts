import { ObjectId } from "mongodb";
import { Emprunt } from "../entities";
import { connection } from "./connection"


const collection = connection.db('Projet_Partage').collection<Emprunt>('emprunt');

export const empruntRepository = {

findAll(){
    return collection.find().toArray();
},

findById(_id:string) {
    return collection.findOne(new ObjectId(_id));
},

async persist(emprunt:Emprunt) {
    const result = await collection.insertOne(emprunt);
    emprunt._id = result.insertedId;
    return emprunt;
},

remove(_id:string){
return collection.deleteOne({_id:new Object(_id)})
},
update(_id:string, emprunt:Emprunt) {
    return collection.updateOne({_id:new ObjectId(_id)}, {$set:emprunt})
    }
}
