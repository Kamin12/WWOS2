AccountsTemplates.configure({
  defaultTemplate: 'atForm',
  defaultLayout: 'Appbody',
  defaultContentRegion: 'main',
  showForgotPasswordLink: true,
  enablePasswordChange: true,
 sendVerificationEmail: true,
 confirmPassword: true,
 forbidClientAccountCreation: false,
 showPlaceholders: true,
 continuousValidation: true,
 negativeValidation: true,
  defaultLayoutRegions: {},
  texts: {
      button: {
          signUp: "Register Now!",
      }
    }
});



FlowRouter.route('/', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'market' } );
}
});

FlowRouter.route('/societyforbernie', {
  action (){
    BlazeLayout.render('Appbody', { top:'menu', main:'StreamProduct1'});
  }
});

FlowRouter.route('/berniebybernz', {
action (){
  BlazeLayout.render('Appbody', { top:'menu', main:'StreamProduct2'});
}
});

FlowRouter.route('/market', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'market' } );
}
});

FlowRouter.route('/about', {
  action () {
    BlazeLayout.render('Appbody', {top: 'menu1', main: 'account2' });
  }
});

/*
FlowRouter.route('/users/:_id', {
  name: 'Users.show',
  action() {
    BlazeLayout.render('Appbody', {main: 'Users_show_page'});
  }
});
*/

FlowRouter.route('/talent', {
  action() {
    BlazeLayout.render('Appbody', {top: 'menu1', main: 'Talent'});
  }
});

FlowRouter.route('/register', {
  action() {
    BlazeLayout.render('Appbody', {top: 'menu1', main: 'Register'});
  }
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login',
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/signup',
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
});






AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function(value){
        if (Meteor.isClient) {
            console.log("Validating username...");
            var self = this;
            Meteor.call("userExists", value, function(err, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    },
});
