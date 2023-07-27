/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Projet_Partage');

// Insert a few documents into the sales collection.
// db.user.insertMany([
//     {
//         name: 'Pierre',
//         email: 'pedro38@gmail.com',
//         mdp :'',
        
//     },{
//         name: 'Marco',
//         email: 'moi@gmail.com',
//         mdp :'',
//     },{
//         name: 'Victor',
//         email: 'moi2@gmail.com',
//         mdp :'',
//     }
// ])


// db.Annonce.findOne()

// export interface Emprunt{
//     _id?:any;
//     _idObjet?:any;
//     User: {
//         _id?:any;
//         name:string;
//     }
//     date: Date;
//     demande:string;
//     status:string;
// }

// db.Annonce.insertOne([
//     {
//         name: 'Carte Pokémon',
//         description: 'Dracaufeu EX SHINY',
//         type: 'Carte',
//         status: false,
//         adresse: 'Mont de Marsan',
//         User: {
//              "_id": {
//             "$oid": "64c0e676796c85b12a91a49c"},

//         }

//     }
// ])


// db.emprunt.insertOne([
//         {
//             demande: 'Dracaufeu EX SHINY',
//             date: '2023/10/10',
//             status: 'En Cours',
//             User: {
//                  "_id": {
//                 "$oid": "64c0e676796c85b12a91a49c"},
//             },
//             Objet:{
//                "_id":{
//               "$oid": "64c0e8c7eee0e62bdbbf3641"},
//                 name:"pedro"
//             }
//         }
//     ])
    
    