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
"createProduct": function (productDetails){
Products.insert({
     productDetails
   });
 },
"addUserRegister": function(memberAccount){
Meteor.users.update({
     memberAccount
   });
 },
"addGroup": function( groupDetails ) {
Groups.insert({
  groupDetails
});
},
'insertMessageOne': function ( message ) {
Messagess.insert({
 message
 });
},
/*
 "userExists": function(username){
            return !!Meteor.users.findOne({username: username});
},
*/
'createText': function( textdata) {
	Texts.insert({
textdata
	    }, function(error) {
		console.log(error);
	});
},
"createAudio": function (audiodata ) {
	Audio.insert({
audiodata
	    }, function(error) {
		console.log(error);
	});
},

"createImage": function(imagedata ) {
	Images.insert({
imagedata

	    }, function(error) {
		console.log(error);
	});
},
"createVideo": function(videodata ) {
Video.insert({
videodata
	    }, function(error) {
		console.log(error);
	});
},
removeFollowing: function(userId) {
  Meteor.users.update({
    _Username: Meteor.userId()
  }, {
    $pull: {
      'following': userId
    }
  });
},
addFollowing: function(userId) {
  Meteor.users.update({
    _Username: Meteor.userId()
  }, {
    $addToSet: {
      'following': userId
    }
  });
}
});
}
