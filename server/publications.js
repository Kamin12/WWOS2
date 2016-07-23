Meteor.publish('userdata', function() {
  return Meteor.users.find({
    username: this.username
  }, { name: 1, location: 1, bio:1 })
});


Meteor.publish('allusers', function(){
  return Meteor.users.find();
});
