


AccountsTemplates.configure({
  defaultTemplate: 'atForm',
  defaultLayout: 'Appbody',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {}
});


/*
exposed = FlowRouter.group {}

exposed.route ‘/login’,
 name: ‘login’
 action: ->
   BlazeLayout.render “login”

exposed.route ‘/signup’,
 name: ‘signup’
 action: ->
   BlazeLayout.render “signup”

loggedIn = FlowRouter.group
 triggersEnter: [ ->
   unless Meteor.loggingIn() or Meteor.userId()
     route = FlowRouter.current()
     unless route.route.name is 'login'
       Session.set 'redirectAfterLogin', route.path
     FlowRouter.go ‘login’
 ]
 */



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

FlowRouter.route('/join', {
  action () {
    BlazeLayout.render('Appbody', {top: 'menu1', main: 'join' });
  }
});
