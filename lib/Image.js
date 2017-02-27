Images = new Mongo.Collection('Images');

let ImagesSchema = new SimpleSchema({
imagetext: {type: String},
imageimage: {type: [Object]},
imagemember: {type: String},
imagemembers: {type: String},
imagedate: {type: String},
});

Images.attachSchema( ImagesSchema );
