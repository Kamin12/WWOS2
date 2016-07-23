Orders = new Mongo.Collection('orders');
Products = new Mongo.Collection('products');
Projects = new Mongo.Collection('projects');


if (Meteor.isClient) {

  Meteor.startup(function() {
    Stripe.setPublishableKey(Meteor.settings.public.stripe);
  });

  Template.market.helpers({
    products: [{
      image: '/images/squaddalean.jpg',
      Title: "Bernie by BERNZ! Tee",
      Price: '$ 30',
      Account: "Society",
      id: 'berniebybernz'
    }, {
      image: '/images/selectionfourfinal.jpg',
      Title: "Bernie for Society Tee",
      Price: '$ 30',
      Account: 'Society',
      id: 'societyforbernie'
    }]
  });

  Template.join2.onRendered(function() {
    Meteor.setTimeout(() => {
      var modal2 = $('.modal2');
      modal2.css('display', 'block');
    }, 500);
  });

  Template.Create.onRendered(function() {
    Meteor.setTimeout(() => {
      var modal2 = $('.modal3');
      modal2.css('display', 'block');
    }, 500);
  });

  Template.MyMessages.onRendered(function() {
    Meteor.setTimeout(() => {
      var modal3 = $('#messagesModal');
      modal3.css('display', 'block');
    }, 500);
  });




  Template.menu.events({
    'click #mainiconsthree' (event) {
      Blaze.render(Template.join2, document.body);
    },
    'click #create' (event) {
      Blaze.render(Template.Create, document.body);
    },
    'click #messages' (event) {
      Blaze.render(Template.MyMessages, document.body);
    },
    'click #you' (event) {
      $('#youmenu').show();
    }
  });

Template.Create.helpers({
  back: function(){
    return Template.instance().formback.get();
  },
  next: function (){
    return Template.instance().formnext.get();
  }
});


Template.Create.onRendered(function CreatingisCreation(){
  this.formnext = new ReactiveVar('fone');
  this.formback = new ReactiveVar('fone');
  this.errormessageorder1 = new ReactiveVar('null');
  $('#creatorproduct').hide();
  $('#creatorproject').hide();
});

Template.Create.events({
  'click #ProductSelection2' (event) {
    $('#ProductSelection2').attr('id','ProductSelection3');
    $('#ProductSelection').hide();
    $('#creatorproduct').show();
    $('#basics').hide()
    $('#monetize').hide()
    $('#shareproduct').hide();
  },
  'click #ProjectSelection2' (event){
    $('#ProjectSelection2').attr('id','ProjectSelection3');
    $('#ProductSelection').hide();
    $('#creatorproject').show();
    $('#basics').hide()
    $('#monetize').hide()
    $('#shareproject').hide();
  },
  'click #fone' (event) {
    $('#prodimages').show();
    $('#basics').hide();
    $('#monetize').hide();
    $('#shareproduct').hide();
    $('#formnext').show();
    Template.instance().formback.set('ProductSelection2');
    Template.instance().formnext.set('ftwo');
  },
  'click #ftwo' (event) {
    $('#basics').show();
    $('#monetize').hide();
    $('#prodimages').hide();
    $('#shareproduct').hide();
    $('#formnext').show();
    Template.instance().formback.set('fone');
    Template.instance().formnext.set('fthree');

  },
  'click #fthree' (event) {
    $('#prodimages').hide();
    $('#basics').hide();
    $('#monetize').show();
    $('#shareproduct').show();
    $('#formnext').hide();
    $('#shareproduct').show();
    Template.instance().formback.set('ftwo');
  },

'click #gone' (event) {
  $('#prodimages').show();
  $('#basics').hide();
  $('#monetize').hide();
  $('#shareproduct').hide();
  $('#formnext').show();
  Template.instance().formback.set('ProductSelection2');
  Template.instance().formnext.set('ftwo');
},
'click #gtwo' (event) {
  $('#basics').show();
  $('#monetize').hide();
  $('#prodimages').hide();
  $('#shareproduct').hide();
  $('#formnext').show();
  Template.instance().formback.set('fone');
  Template.instance().formnext.set('fthree');
},
'click #gthree' (event) {
  $('#prodimages').hide();
  $('#basics').hide();
  $('#monetize').show();
  $('#shareproduct').show();
  $('#formnext').hide();
  $('#shareproduct').show();
  Template.instance().formback.set('ftwo');
},
'click #youuu' (event) {
  $('click #youmenu').show();
},
'submit .addProject' (event, template){
  event.preventDefault();

  var projectDetails = {
  "Images": event.target.imagesv.value,
  "Title": event.target.titlev.value,
  "createdAt": new Date,
  "Description": event.target.descriptionv.value,
}
for (var key in productDetails) {
  if (!productDetails[key]) {
    pass = false;
    missingElement = key;
    Template.instance().errormessageorder1.set('Error: Please Enter'+ missingElement + '!!');
  }
}
if (pass){
  Meteor.call('addProduct', productDetails);
  console.log('ham');
}
},
  'submit .addProduct' (event, template) {
    event.preventDefault();

    var productDetails = {
      "Images": event.target.imagesv.value,
      "Title": event.target.titlev.value,
      "Quantity": event.target.quantityv.value,
      "Description": event.target.descriptionv.value,
      "Price": event.target.pricev.value,
      "ShipPrice": event.target.shippricev.value,
      "ShipTime": event.target.shiptimev.value,
      "createdAt": new Date,
    },
    pass = true,
    missingElement;

    for (var key in productDetails) {
      if (!productDetails[key]) {
        pass = false;
        missingElement = key;
        Template.instance().errormessageorder1.set('Error: Please Enter'+ missingElement + '!!');
      }
    }
    if (pass){
      Meteor.call('addProduct', productDetails);
      console.log('ham');
    }
  }
});

  Template.Product.onCreated( function CreateTokenHandlerOnCreated() {
/*
  var template = Template.instance();
  template.selectedChoice  = new ReactiveVar( false );
  */
  });


  Template.Product.events ({
    /*
    'click .buydarkfeed' (event, template) {

     var order = event.target.dataset.choice;
     Session.set('piece', 'order');

     Blaze.render(Template.paymentModal, document.body);
  },
  */
  'click .berniebybernz' (event,template) {
    Blaze.render(Template.paymentModal, document.body);
    Session.set('selectedItem', 'Bernie by BERNZ! Tee');
  },
  'click .societyforbernie' (event, template) {
    Blaze.render(Template.paymentModal, document.body);
      Session.set('selectedItem', 'Bernie for Society Tee');
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
      Template.instance().mainimageconsole.set('images/SOCIETYIMAGE.jpg');
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
      Template.instance().mainimageconsole.set('images/SOCIETYIMAGE.jpg');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowsix' (event) {
      Template.instance().mainimageconsole.set('/images/selectionfourfinal.jpg');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click #buybuttonnavigatorbern' (event) {
      Session.set('selectedItem', 'Bernie by BERNZ! Tee');
      Blaze.render(Template.paymentModal, document.body);
    },
    'click #buybuttonnavigatorfor' (event) {
      Session.set('selectedItem', 'Bernie for Society Tee');
      Blaze.render(Template.paymentModal, document.body);
    },
    'click #mediatab' (event) {
      $("#aboutcontainer").hide();
      $('#payment-form').hide();
      $("#mediacontainer").show();
    },
    'click #abouttab' (event) {
      $("#aboutcontainer").show();
      $("#mediacontainer").hide();
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
      Template.instance().mainimageconsole.set('/images/SOCIETYIMAGE.jpg');
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
      Template.instance().mainimageconsole.set('images/SOCIETYIMAGE.jpg');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowsix' (event) {
      Template.instance().mainimageconsole.set('/images/squaddalean.jpg');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click #buybuttonnavigatorbern' (event) {
      Session.set('selectedItem', 'Bernie by BERNZ! Tee');
      Blaze.render(Template.paymentModal, document.body);
    },
    'click #buybuttonnavigatorfor' (event) {
      Session.set('selectedItem', 'Bernie for Society Tee');
      Blaze.render(Template.paymentModal, document.body);
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

  Template.ProductCloud.helpers({
    products: function(){
      return Products.find({})
    }
  });

  Template.ProductWebsite.helpers({
    products: function(){
      return  Products.find({})
    },

  });



Template.YourOrders.helpers({
  yourorders: function(){
    return Orders.find();
  }
});

Template.MyMessages.events({
   "click #send":function(message,username){
     var message = $('#chat-message').val();
     var user = Meteor.users.findOne({_id: userId});
     chatCollection.insert({
        user: user.username(),
       message: message,
     });
   }
});







}
