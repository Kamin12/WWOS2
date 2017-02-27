Audio = new Mongo.Collection('Audio');

let AudioSchema = new SimpleSchema({
  audiotext: {type: String},
  audioimage: {type: [Object]},
  audiomember: {type: String},
  audiomembers: {type: String},
  audiodate: {type: String},
});

Audio.attachSchema( AudioSchema );
