if (Meteor.isClient) {
Template.Users_show_page.onCreated(function(){

  this.getMemberName = () => FlowRouter.getParam('Membername');

  this.autorun(() => {
  this.subscribe('userdata', {Membername: this.getMemberName()});
});


this.userconnection = new ReactiveDict();
this.userconnection.setDefault({
  editing: false,
  connected: false,
  request: true
});

});

Template.ProductWebsite.helpers({
  productWebs: function(memberName){
    return  Products.find({ productmember : memberName});
  }
});

Template.Users_show_page.events({
   'click #listproducts': function (event, template) {
     Template.instance.selling.set('true');
   },
  'click #messagez': function (event, template) {
    Blaze.render(Template.NewMessage, document.body);
  },
  'click #edit': function (event, template) {
   template.editing.set(editing, true);
  },
 'click #connect': function (event, template) {
  Meteor.call('addFollowing');
   }
 });

 Template.Users_show_page.helpers({
 memberNameArray: function (){
  var instance = Template.instance();
  var memberName = instance.getMemberName();
  return Meteor.users.findOne(memberName);
},
memberArgs: function (memberName){
  return Meteor.users.findOne(memberName);
}
 });


Template.ProductWebsite.helpers({
  productWebArgs (productWeb){
  return Products.findOne(productWeb);
  },
  productWebs (productWeb) {
  return Products.findOne(productWeb);
  }
});
/*
Template.Users_show_page.helpers({
    editing(memberName) {
    return Template.instance.state('editing').get();
    },
    selling(memberName){
    return Template.instance.selling.get();
    },
    request(memberName) {
    return Template.instance.request.get();
    },
    connect(memberName){
    return Template.instance.connect.get();
    },
    memberNameArray() {
    const instance = Template.instance();
    const memberName = instance.getMemberName();
    return Meteor.users.findOne(memberName) ? [memberName] : [];
  },
    memberArgs(memberName) {
    const instance = Template.instance();
    return {
      Member,
      editing: instance.state.equals('editing', true),
      request: instate.state.equals('request', true),
      connected: instance.state.equals('connected', true)
    };
  }
});
*/
}
