Template.Register.events ({
'submit #userregisterform': function(event, template) {
  event.preventDefault();

  var userRegistration = {
       "name": event.target.userimageone.value,
       "location": event.target.userlocationone.value,
       "bio": event.target.userbioone.value,
       "userimage": event.target.userimageone.value,

    },
    pass = true,
    missingElement;

      for (var key in userRegistration) {
        if (!userRegistration[key]) {
          pass = false;
          missingElement = key;
          template.errormessageregister.set('Error: Please Enter'+ missingElement + '!!');
        }
      }
    if (pass) {
      Meteor.call('addUserRegister', userRegistration);
    }
}
  });

  Template.LowerNavigator.events({
  'click #createicon':function (event, template) {
  FlowRouter.go('/create');
  },
  'click #messages':function (event, template){
     Blaze.render(Template.MyMessages, document.body);
  },
  'click #cloudicon': function(event, template){
    FlowRouter.go('/cloud');
  },
'click #usericon': function(event, template) {
  Blaze.render(Template.YouMenu, document.body);
}
  });
