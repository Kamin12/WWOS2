
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
