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
 },
"addUserRegister": function(userRegistration){
Meteor.users.update({
     userRegistration
   });
 },
 "userExists": function(username){
            return !!Meteor.users.findOne({username: username});
        }
 /*
 "uploadUserImage": function(fileObj){
UserImages.insert({fileObj});
}
*/
});
}
