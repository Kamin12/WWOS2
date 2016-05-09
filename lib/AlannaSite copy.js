
FlowRouter.route('/', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'market' } );
}
});

FlowRouter.route('/about', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'about' } );
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

FlowRouter.route('/resume', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'Resume' } );
}
});

FlowRouter.route('/market', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'market' } );
}
});

FlowRouter.route('/reel', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'reel' } );
}
});

FlowRouter.route('/contact', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'menu', main: 'contact' } );
}
});
