Channels = new Mongo.Collection('channels');

let ChannelsSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'The name of the channel.'
  }
});

Channels.attachSchema( ChannelsSchema );
