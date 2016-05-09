Template.paymentModal.events({
  "click .close": function(event, template) {
    var modal = $('#myModal');
    modal.css('display', 'none');
    Blaze.remove(template.view);
  },
  'submit #payment-form': function(event, template) {
    event.preventDefault();

    var cardDetails = {
        "number": event.target.cardNumber.value,
        "cvc": event.target.cardCVC.value,
        "exp_month": event.target.cardExpiryMM.value,
        "exp_year": event.target.cardExpiryYY.value,
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
      Stripe.createToken(cardDetails, function(status, response) {
        if (response.error) {
          template.errorMessage.set(response.error.message);
        } else {
          Meteor.call("chargeCard", response.id, function(err, response) {
            if (err) {
              alert(err.messsage);
            } else {
              alert("Success" + response.id);
            }
          })
        }
      });
    } else {
      template.errorMessage.set(missingElement + ' Is missing');
    }

  }
});

Template.paymentModal.helpers({
  errorMessage:function(){
    return Template.instance().errorMessage.get();
  }
});

Template.paymentModal.onRendered(function() {
  Meteor.setTimeout(() => {
    var modal = $('#myModal');
    modal.css('display', 'block');
  }, 500);
});

Template.paymentModal.onCreated(function(){
  this.errorMessage = new ReactiveVar(null);
});
