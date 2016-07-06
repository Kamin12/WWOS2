if (Meteor.isServer) {
  var Stripe = StripeAPI(Meteor.settings.private.stripe);

  Meteor.methods({
    "chargeCard": function(stripeToken) {
      Stripe.charges.create({
        amount: 3800,
        currency: "usd",
        source: stripeToken
      }, function(err, charge) {
        console.log(err, charge);
      });
},
   "addCustomerData": function(memberDetails) {
     Orders.insert({
     memberDetails
   });
 },
 "addProduct": function (productDetails){
   Products.insert({
     productDetails
   });
   console.log('ham');
 }
});
}
