Template.paymentModal.events({
  "click .close": function(event, template) {
    var modal = $('#myModal');
    modal.css('display', 'none');
    Blaze.remove(template.view);

  }
});

Template.paymentModal.onRendered(function() {
  Meteor.setTimeout(() => {
    var modal = $('#myModal');
    modal.css('display', 'block');
  }, 500);
});
