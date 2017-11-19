Audio = new Mongo.Collection('Audio');

const AudioSchema = new SimpleSchema({
  audiotitleblz: {type: String},
  audiotextblz: {type: String}

});

Audio.attachSchema(AudioSchema);
