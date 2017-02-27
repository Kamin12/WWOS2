Notifications = new Mongo.Collection( 'notifications' );


let NotificationsSchema = new SimpleSchema({
  'To': {
    type: String,
    label: 'The ID of the user that received the notification.',
  },
  'From': {
    type: String,
    label: 'The ID of the user that created the notification.'
  },
  'Reason': {
    type: Date,
    label: 'The type of notification that was received.'
  }
});

Notifications.attachSchema( NotificationsSchema );
