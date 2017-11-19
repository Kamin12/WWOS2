Meteor.methods({

"chargeCard": function(stripeToken) {
Stripe.charges.create({
        amount: 3800,
        currency: "usd",
        source: stripeToken
      }, function(err, charge) {
        console.log(err, charge);
      });
 }

});
