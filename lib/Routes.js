FlowRouter.route('/', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'Market', footer: 'LowerNavigator' });
}
});

FlowRouter.route('/mymessages', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'MyMessages', footer: 'LowerNavigator' });
}
});


FlowRouter.route('/welcome', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", main:'welcomecampaign' });
}
});

FlowRouter.route('/create', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", main:'Create', footer: 'LowerNavigator' });
}
});


FlowRouter.route('/cloud', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", main:'Cloud', footer: 'LowerNavigator' });
}
});

FlowRouter.route('/home', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", footer: 'LowerNavigator' });
}
});

FlowRouter.route('/media', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", footer: 'LowerNavigator' });
}
});


FlowRouter.route('/about', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'About', footer: 'LowerNavigator' });
}
});

FlowRouter.route('/market', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'Market', footer: 'LowerNavigator' });
}
});

FlowRouter.route('/newmessage', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'NewMessage', footer: 'LowerNavigator' });
}
});

FlowRouter.route('/societyforbernie', {
  action (){
    BlazeLayout.render('Appbody', { top:'Menu', main:'StreamProduct1'});
  }
});

FlowRouter.route('/berniebybernz', {
action (){
  BlazeLayout.render('Appbody', { top:'Menu', main:'StreamProduct2', footer: 'LowerNavigator' });
}
});

FlowRouter.route('/talent', {
  action() {
    BlazeLayout.render('Appbody', {top: 'Menu', main: 'Talent', footer: 'LowerNavigator' });
  }
});

FlowRouter.route('/register', {
  action() {
    BlazeLayout.render('Appbody', { main: 'Register' });
  }
});

FlowRouter.route('/comein', {
  action() {
    BlazeLayout.render('Appbody', { main: 'LoginNowTwo' });
  }
});

FlowRouter.route('/settings', {
  action() {
    BlazeLayout.render('Appbody', {top: 'Menu', main: 'Settings', footer: 'LowerNavigator' });
  }
});

FlowRouter.route('/mysite', {
  action(){
    BlazeLayout.render('Appbody', {main: 'Mysite'});
  }
});

FlowRouter.route('/createproduct', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateProduct'});
  }
});

FlowRouter.route('/createaudio', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateAudio'});
  }
});

FlowRouter.route('/createtext', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateText'});
  }
});

FlowRouter.route('/createvideo', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateVideo'});
  }
});

FlowRouter.route('/createimage', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateImage'});
  }
});

FlowRouter.route('/createbooking', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateBooking'});
  }
});

FlowRouter.route('/messages', {
  action(){
    BlazeLayout.render('Appbody', { main: 'YourMessages', footer: 'LowerNavigator'});
  }
});

FlowRouter.route('/:_id', {
  name:'MemberSite',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'Users_show_page'});
}
});

FlowRouter.route('/products/:product', {
  name:'StreamProduct',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
}
});

FlowRouter.route('/videos/:video', {
  name:'StreamVideo',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
}
});

FlowRouter.route('/texts/:text', {
  name:'StreamText',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
}
});

FlowRouter.route('/images/:image', {
  name:'StreamImage',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
}
});

FlowRouter.route('/requests/:request', {
  name:'StreamRequest',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
}
});

const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/messages/:channel', {
  name: 'channel',
  action() {
    BlazeLayout.render( 'Appbody', { top: 'Menu', main:'MyMessages' });
  }
});

var mysignUpFlow = function (error) {
  if (!error) {
 Router.go('/register');
 }
};

AccountsTemplates.configure({
  defaultLayout: 'Appbody',
  defaultLayoutRegions: {
      top: 'Menu',
    },
  postSignUpHook: mysignUpFlow,
  defaultContentRegion: 'main',
  confirmPassword: true,
  enablePasswordChange: true,
  showForgotPasswordLink: true,
  enablePasswordChange: true,
 sendVerificationEmail: true,
 confirmPassword: true,
 forbidClientAccountCreation: false,
 showPlaceholders: true,
 continuousValidation: true,
 negativeValidation: true
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');

/*
AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
 layoutType: 'blaze',
defaultLayoutRegions: {},
 contentRegion: 'main',
 layoutTemplate: 'Appbody'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
  defaultLayoutRegions: {},
 layoutType: 'blaze',
 contentRegion: 'main',
 layoutTemplate: 'Appbody'
});

AccountsTemplates.configureRoute('forgotPwd', {
  name: 'forgotPwd',
  path: '/forgot-password',
  defaultLayoutRegions: {},
  layoutType: 'blaze',
  contentRegion: 'main',
  layoutTemplate: 'AppBody'
});

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
  defaultLayoutRegions: {},
 layoutType: 'blaze',
 contentRegion: 'main',
 layoutTemplate: 'AppBody'
});
*/
