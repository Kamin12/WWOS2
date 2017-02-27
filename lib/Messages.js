Messagess = new Mongo.Collection( 'messages' );

let MessagesSchema = new SimpleSchema({
  'channel': {
    type: String,
    label: 'The ID of the channel this message belongs to.',
  },
  'To': {
    type: String,
    label: 'The ID of the user this message was sent directly to.',
  },
  'Creator': {
    type: String,
    label: 'The ID of the user that created this message.'
  },
  'TimeAndDate': {
    type: Date,
    label: 'The date and time this message was created.'
  },
  'Message': {
    type: String,
    label: 'The content of this message.'
  }
});

Messagess.attachSchema( MessagesSchema );
