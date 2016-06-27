if (Meteor.isClient) {

Template.paymentModal.events({
  "click .close": function(event, template) {
    var modal = $('#myModal');
    modal.css('display', 'none');
    Blaze.remove(template.view);
  },
  'submit #payment-form': function(event, template) {
    event.preventDefault();

    var memberDetails = {
         "name": event.target.fullnameone.value,
         "email": event.target.email.value,
         "size": event.target.sizes.value,
         "item":  Session.get('selectedItem'),
         "createdAt": new Date,
      },
      pass = true,
      missingElement;

        for (var key in memberDetails) {
          if (!memberDetails[key]) {
            pass = false;
            missingElement = key;
            template.errormessageorder.set('Error: Please Enter'+ missingElement + '!!');
          }
        }
      if (pass) {
        Meteor.call('addCustomerData', memberDetails);
      }

    var cardDetails = {
      name: $('#fullname').val(),
      number: $('#cardnumber').val(),
       cvc: $('#cardcvc').val(),
      exp_month: $('#cardmonth').val(),
      exp_year: $('#cardyear').val(),
      address_line1: $('#streetaddress1').val(),
        address_city: $('#city').val(),
        address_state: $('#state').val(),
        address_zip: $('#zipcode').val(),
      },
      pass = true,
      missingElement;

    for (var key in cardDetails) {
      if (!cardDetails[key]) {
        pass = false;
        missingElement = key;
      }
    }

    if (pass) {
      Stripe.card.createToken(cardDetails, function(status, response) {
        stripeToken = response.id;
        Meteor.call("chargeCard", stripeToken, function (err,response) {
        if (err) {
            alert(err.messsage);
          } else {
            $("#payment-form").hide();
            console.log("wread");
            template.successful.set(true);
            $("#successful").show();
        }
      })
    })
  }
}
});


Template.paymentModal.helpers({
  errorMessage:function(){
    return Template.instance().errorMessage.get();
  },
  successful: function(){
    return Template.instance().successful.get();
  },
  errormessageorder:function(){
    return Template.instance().errormessageorder.get();
  },
  brand:function(){
    return 'Society';
  },
  item:function(){
  return Session.get("selectedItem") || "Not Set Yet";

  },
  price:function(){
    return '$30.00';
  },
  shipping:function(){
    return '8.00';
  }
});

Template.paymentModal.onRendered(function() {
  Meteor.setTimeout(() => {
    var modal = $('#myModal');
    modal.css('display', 'block');
  }, 500);
  $("pay").hide()
});

Template.paymentModal.onCreated(function(){
  this.errormessageorder = new ReactiveVar(null);
  this.errorMessage = new ReactiveVar(null);
  this.successful = new ReactiveVar(false);
});

}
