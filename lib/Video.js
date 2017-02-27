Videos = new Mongo.Collection('Videos');


let VideosSchema = new SimpleSchema({
  videotext: {type: String},
  videotitle: {type: String},
  videodate: {type: String},
  videoimage: {type: [Object]},
  videovideo: {type: [Object]},
  videomember: {type: String},
  videomembers: {type: String},
  videodate: {type: String},
});

Videos.attachSchema( VideosSchema );
