

  Template.LowerNavigator.events({
  'click #createicon':function (event, template) {
    Blaze.render(Template.Create, template.$('#network_nav').get(0));
  },
  'click #messages':function (event, template){
FlowRouter.go('/messages');
},
  'click #cloudicon': function(event, template){
    FlowRouter.go('/cloud');
  },
'click #usericon': function(event, template) {
  Blaze.render(Template.YouMenu, template.$('#network_nav').get(0));
}
  });


  Template.LowerNavigator.helpers({
    NotLoggedIn() {
       if ( !Meteor.user() & !Meteor.loggingIn()) { return false; } else { return true; }
    }
  });
