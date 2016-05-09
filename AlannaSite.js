if (Meteor.isClient) {
  Meteor.startup(function() {
    Stripe.setPublishableKey(Meteor.settings.public.StripePub);
  })

  Template.market.helpers({
    products: [{
      image: '/images/squaddalean.jpg',
      Title: "Bernie by BERNZ!",
      Price: '$ 30',
      Account: "Society",
      id: 'berniebybernz'
    }, {
      image: '/images/selectionfourfinal.jpg',
      Title: "Bernie for Society",
      Price: '$ 30',
      Account: 'Society',
      id: 'societyforbernie'
    }]
  });

  /*
  Template.Product.events ({
    'click #buydarkfeed' (event, template) {

      var shirts = {
            'Westside': {
              amount: 30.00,
              description: "Full Torso Apparition Removal"
            },
            'Rightside': {
              amount: 30.00,
              description: "Free-Floating Repeater Removal"
            }
          };

    var choice = shirts[ event.target.dataset.choice];

    template.selectedChoice.set( choice );
    template.processing.set( true );

           template.checkout.open({
           name: 'Society',
           description: choice.description,
           amount: 30.00,
           sizes: 'S,M,L,XL,2XL,3XL'
         });
  }
  });
  */
  /*
  Template.Product.onCreated( function CreateTokenHandlerOnCreated() {
  var template = Template.instance();

  template.selectedChoice  = new ReactiveVar( false );
  template.processing = new ReactiveVar( false );

  template.checkout = StripeCheckout.configure({
      key: Meteor.settings.public.stripe,
      image: 'https://tmc-post-content.s3.amazonaws.com/ghostbusters-logo.png',
      locale: 'auto',
      token ( token ) {
        let choice = template.selectedChoice.get(),
        charge  = {
        amount: token.amount || choice.amount,
        currency: token.currency || 'usd',
        source: token.id,
        description: token.description || choice.description,
        receipt_email: token.email
        };

  Meteor.call( 'processPayment', charge, function ( error, response )  {
          if ( error ) {
            template.processing.set( false );
            Bert.alert( error.reason, 'danger' );
          } else {
            Bert.alert( 'Congratulations.', 'success' );
          }
        });
      },
      closed () {
       template.processing.set( false );
    }
    });
  });
  */

  Template.Product.helpers({
    processing: function() {
      return Template.instance().processing.get();
    },
    societyimage: function() {
      return '/images/societylogo.jpg';
    }
  });

  Template.StreamProduct1.onCreated(function StreamProductOnCreated() {
    this.mainimageconsole = new ReactiveVar('/images/selectionfourfinal.jpg');
    this.leftarrow = new ReactiveVar('slideshowarrowone');
    this.rightarrow = new ReactiveVar('slideshowarrowtwo');
    $("#aboutcontainer").hide();
  });

  Template.StreamProduct1.events({
    'click .slideshowarrowone' (event) {
      Template.instance().mainimageconsole.set('/images/selectionfive.JPG');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowtwo' (event) {
      Template.instance().mainimageconsole.set('images/selectionthree.JPG');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowthree' (event) {
      Template.instance().mainimageconsole.set('/images/selectionfourfinal.jpg');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click .slideshowarrowfour' (event) {
      Template.instance().mainimageconsole.set('/images/selectionfive.JPG');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowfive' (event) {
      Template.instance().mainimageconsole.set('images/selectionthree.JPG');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowsix' (event) {
      Template.instance().mainimageconsole.set('/images/selectionfourfinal.jpg');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },

    'click #buybuttonnavigator' (event) {
      $("#aboutcontainer").hide();
      $("#mediacontainer").hide();
      $('#payment-form').show();
    },
    'click #mediatab' (event) {
      $("#aboutcontainer").hide();
      $('#payment-form').hide();
      $("#mediacontainer").show();
    },
    'click #abouttab' (event) {
      $("#aboutcontainer").show();
      $("#mediacontainer").hide();
    },
    'submit #payment-form': function(event) {
      event.preventDefault();

      var cardDetails = {
        "number": event.target.cardNumber.value,
        "cvc": event.target.cardCVC.value,
        "exp_month": event.target.cardExpiryMM.value,
        "exp_year": event.target.cardExpiryYY.value,
      }

      console.log(cardDetails);
      if (_.isEmpty(cardDetails.number) && _.isEmpty(cardDetails.cvc) && _.isEmpty(cardDetails.exp_month) && _.isEmpty(cardDetails.exp_year)) {
        alert("Card details missing");
      } else {
        Stripe.createToken(cardDetails, function(status, response) {
          if (response.error) {
            alert(response.error.message);
          } else {
            Meteor.call("chargeCard", response.id, function(err, response) {
              if (err) {
                alert(err.messsage);
              } else {
                alert("Success" + response);
              }
            })
          }
        });
      }
    }
  });


  Template.StreamProduct2.onCreated(function StreamProductOnCreated() {
    this.mainimageconsole = new ReactiveVar('/images/squaddalean.jpg');
    this.leftarrow = new ReactiveVar('slideshowarrowone');
    this.rightarrow = new ReactiveVar('slideshowarrowtwo');

  });

  Template.StreamProduct1.onRendered(function StreamProductonRendered1() {
    $("#aboutcontainer").hide();
    $('#payment-form').hide();

  });

  Template.StreamProduct2.onRendered(function StreamProductonRendered2() {
    $("#aboutcontainer").hide();
    $('#payment-form').hide();

  });

  Template.StreamProduct2.events({
    'click .slideshowarrowone' (event) {
      Template.instance().mainimageconsole.set('/images/squadda1.JPG');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowtwo' (event) {
      Template.instance().mainimageconsole.set('images/squadda3.JPG');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowthree' (event) {
      Template.instance().mainimageconsole.set('/images/squaddalean.jpg');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click .slideshowarrowfour' (event) {
      Template.instance().mainimageconsole.set('/images/squadda1.JPG');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowfive' (event) {
      Template.instance().mainimageconsole.set('images/squadda3.JPG');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowsix' (event) {
      Template.instance().mainimageconsole.set('/images/squaddalean.jpg');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },

    'click #buybuttonnavigator' (event) {
      $("#aboutcontainer").hide();
      $("#mediacontainer").hide();
      $('#mastermenu').hide();
      $("#streamnavigatortwo").hide();
      $("#streamnavigatorone").hide();
      $("#payment-form").show();
    },
    'click #mediatab' (event) {
      $("#aboutcontainer").hide();
      $("#mediacontainer").show();
    },
    'click #abouttab' (event) {
      $("#aboutcontainer").show();
      $("#mediacontainer").hide();
    }
  });



  Template.StreamProduct1.helpers({
    mainimagehref: function() {
      return Template.instance().mainimageconsole.get();
    },
    leftarrowhelper: function() {
      return Template.instance().leftarrow.get();
    },
    rightarrowhelper: function() {
      return Template.instance().rightarrow.get();
    },
    selectedchoice: function() {
      return Template.instance().selectedchoice.get();
    },
    societyimage: function() {
      return '/images/societylogo.jpg';
    }
  });

  Template.StreamProduct2.helpers({
    mainimagehref: function() {
      return Template.instance().mainimageconsole.get();
    },
    leftarrowhelper: function() {
      return Template.instance().leftarrow.get();
    },
    rightarrowhelper: function() {
      return Template.instance().rightarrow.get();
    },
    selectedchoice: function() {
      return Template.instance().selectedchoice.get();
    },
    societyimage: function() {
      return '/images/societylogo.jpg';
    },
    deadmon: function() {
      return '/images/deadmonbernz.jpg';
    }
  });
}

if (Meteor.isServer) {
  var stripe = StripeAPI(Meteor.settings.StripePri);

  Meteor.methods({
    "chargeCard": function(cardToken) {
      stripe.charges.create({
        amount: 3000,
        currency: "usd",
        source: cardToken
      }, function(err, response) {
        if (err) {
          throw new Meteor.error(500, "stripe-error", err.message);
        } else {
          console.log(response);
          return response;
        }
      })
    }
  })
}



/*
Template.market.onRendered(function(e) {
$("#images").animate({
  margin-top: '12em'
}, 2000 );
});
}
*/
