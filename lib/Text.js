Texts = new Mongo.Collection('Texts');

let TextsSchema = new SimpleSchema({
  texttext: {type: String },
  texttitle: {type: String, optional: true},
  textdate: {type: String, optional: true},
  textimage: {type: [Object], optional: true},
  textmembers: {type: String, optional: true},
});

Texts.attachSchema( TextsSchema );
