Requests = new Mongo.Collection( 'requests' );


let RequestsSchema = new SimpleSchema({
  requesttitle : {type: String},
  requesttext : {type: String},
  requestdate : {type: String},
  requestmember : {type: String},
  requestmedia : {type: [Object]},
  requestmembers : {type: String},
  });


Requests.attachSchema( RequestsSchema );
