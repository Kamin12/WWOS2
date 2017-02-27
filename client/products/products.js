if (Meteor.isClient) {

/* Product Feed */

Template.Market.helpers({
  prodArgs(product) {

  }
});

Template.ProductItem.helpers({
pathforProductStream: function (){
  var product = this;
  var params = {
    product : product.producttitle,
  };
  var channel = "products";
  var path = FlowRouter.path(channel, params);
  return path;
}
});



Template.Product.events ({
  'click #buydarkfeed' (event, template) {
   var item = this;
   Session.set('selectedItem', 'this.title');
   Blaze.render(Template.paymentModal, document.body);
   }
});


/* Product Stream Smart */

  Template.StreamProductMain.onCreated(function StreamProductOnCreated() {
    this.mainimageconsole = new ReactiveVar('{{product.imageone}}');
    this.leftarrow = new ReactiveVar('slideshowarrowone');
    this.rightarrow = new ReactiveVar('slideshowarrowtwo');
    this.productArgue = new ReactiveDict();
    this.productArgue.setDefault({
      editing: false,
      purchased: false,
      commented: false
    });

    this.getproductTitle = () => FlowRouter.getParam('product');
    this.autorun(() => {
    this.subscribe('productStream', this.getproductTitle());
  });
});

/*
Template.StreamProductMain.helpers({
  Liked: function(){
   if (!Likedby.indexOf({{this.MemberName, -1}})) {
     return 'red';
   }  else {
     return 'white';
   }
 },
 Bought: function(){
  if (!Boughtby.indexOf({{this.MemberName, -1}})) {
    return 'red';
  }  else {
    return 'white';
  }
},
Saved: function(){
 if (!Savedby.indexOf({{this.MemberName, -1}})) {
   return 'red';
 }  else {
   return 'white';
 }
},
Shared: function(){
 if (!Sharedby.indexOf({{this.MemberName, -1}})) {
   return 'red';
 }  else {
   return 'white';
 }
},
productArgs: function(productTitle){
saved
    liked
    bought with green check mark
    return Products.findOne({Title: productTitle })
  },
  productTitleArray(productTitle) {
      const instance = Template.instance();
      const productTitle = instance.getProductTitle();
      return Products.findOne(productTitle) ? [productTitle] : [];
    }
});

*/
/* Product Stream Reusable */

  Template.StreamProduct1.events({
    'click .slideshowarrowone' (event) {
      Template.instance().mainimageconsole.set('productimagethree');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowtwo' (event) {
      Template.instance().mainimageconsole.set('productimagetwo');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowthree' (event) {
      Template.instance().mainimageconsole.set('productimageone');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click .slideshowarrowfour' (event) {
      Template.instance().mainimageconsole.set('productimagethree');
      Template.instance().leftarrow.set('slideshowarrowfive');
      Template.instance().rightarrow.set('slideshowarrowsix');
    },
    'click .slideshowarrowfive' (event) {
      Template.instance().mainimageconsole.set('productimagetwo');
      Template.instance().leftarrow.set('slideshowarrowthree');
      Template.instance().rightarrow.set('slideshowarrowfour');
    },
    'click .slideshowarrowsix' (event) {
      Template.instance().mainimageconsole.set('productimageone');
      Template.instance().leftarrow.set('slideshowarrowone');
      Template.instance().rightarrow.set('slideshowarrowtwo');
    },
    'click #buybuttonnavigatorstream' (event) {
      Session.set('selectedItem', 'Title');
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

  Template.StreamProduct1.onRendered(function StreamProductonRendered1() {
    $("#aboutcontainer").hide();
    $('#payment-form').hide();
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
      }
    });

   Template.ProductCloud.onCreated(function(){
     this.currentTab = new ReactiveVar( "Created" );
   });

   Template.ProductCloud.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  },
});

Template.ProductCloud.events({
'click .nav-pills li': function( event, template ) {
    var currentTab = $( event.target ).closest( "li" );
    currentTab.addClass( "active" );
    $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );
    template.currentTab.set( currentTab.data( "template" ) );
}
});
/*
Template.YourProducts.helpers({
  yourProductArgs: function( ){
    return
  }
});

Template.YourOrders.helpers ({
  yourOrderArgs: function( ){
    return
  },
  yourorders: function(){
    const orderId = instance.getOrderId();
  }
});
*/
}
