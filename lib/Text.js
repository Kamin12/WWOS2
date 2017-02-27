Texts = new Mongo.Collection('Texts');

let TextsSchema = new SimpleSchema({
  texttext: {type: String},
  texttitle: {type: String},
  textdate: {type: String},
  textimage: {type: [Object]},
  textmember: {type: String},
  textmembers: {type: String},
  textdate: {type: String},
});

Texts.attachSchema( TextsSchema );
