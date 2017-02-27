if (Meteor.isClient) {

  Meteor.subscribe('directory');

  Meteor.startup(function() {
    Stripe.setPublishableKey(Meteor.settings.public.stripe);
  });


Template.Menu.helpers({
 NotLoggedIn() {
   if ( !Meteor.user() & !Meteor.loggingIn()) { return false; } else { return true; }
 }
});

/*
  Template.join2.events({
    "click .close": function(event, template) {
      var modal = $('#myModal');
      modal.css('display', 'none');
      Blaze.remove(template.view);
    }
  });
*/

Template.Menu.events({
    'click .maintext3' (event, template) {
      Blaze.render(Template.Login, document.body);
    },

    'click #waveicon' (event, template) {
      Blaze.render(Template.WreadAbout, document.body);
    }
});

Template.WreadAbout.events({
  "click .closeyou1" (event, template) {
    var modal3z = $('.modal-contentyou0');
    modal3z.css('display', 'none');
    Blaze.remove(template.view);
  }
});

Template.WreadAbout.onRendered(function(){
  Meteor.setTimeout(() => {
    var modal512 = $('#myyyModal1');
    modal512.css('display', 'block');
  }, 500);
});

Template.StreamMenu.helpers({
  currentitem(){
    return Session.get('selectedItem');
  }
});

 Template.LoginNow.events ({
   'click #loginbutton' (event, template) {
     var modal35 = $('.modal35');
     modal3.css('display', 'none');
     Blaze.remove(template.view);
   },
   'click #signupbutton' (event, template) {
     var modal3 = $('.modal-content');
     modal3.css('display', 'none');
     Blaze.remove(template.view);
   }
 });

/*
 Template.Register.events({
   'submit #userregisterform': function(event, template) {
     event.preventDefault();

     var memberAccount = {
          "image": event.target.userimageone.value,
          "location": event.target.userlocationone.value,
          "bio": event.target.userbioone.value,
        }
        Meteor.call('addUserRegister', memberAccount)
 }
});
*/

Template.YouMenu.events({
  "click .closeyou" (event, template) {
    var modal3 = $('.modal-content');
    modal3.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #logout2' (event, template){
         event.preventDefault();
         Meteor.logout();
  }
});

Template.YouMenu.onRendered(function(){
  Meteor.setTimeout(() => {
    var modal511 = $('#myyyModal');
    modal511.css('display', 'block');
  }, 500);
});


}
