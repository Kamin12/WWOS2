if (Meteor.isClient) {


Template.Settings.events({
'click #updatesettings': function(event,template) {

  const Membername : event.target.Membername.value;
  const Firstname : event.target.Firstname.value;
  const Lastname : event.target.Lastname.value;


  Meteor.call('UpdateSettings', Membername, Firstname, Lastname, function (err,response) {
  if (err) {
      alert(err.messsage);
    } else {
      Session.set('rendered', false);
  }
});
}
});



}
