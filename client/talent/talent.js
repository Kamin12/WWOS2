
  Template.Talent.onCreated( function(){
    this.subscribe('allusers')
  });

  Template.Talent.helpers({
    users: function(){
      return Meteor.users.find()
    }
  });
