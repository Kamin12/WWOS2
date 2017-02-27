Orders = new Mongo.Collection( 'orders' );


let OrdersSchema = new SimpleSchema({
  'channel': {
    type: String,
    label: 'The ID of the channel this message belongs to.',
    optional: true
  },
  'To': {
    type: String,
    label: 'The ID of the user this message was sent directly to.',
    optional: true
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

Orders.attachSchema( OrdersSchema );
