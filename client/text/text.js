Template.StreamText.onCreated( function(){
     this.getTextTitle = () => FlowRouter.getParam('ttitle');
     this.autorun( () => {
     this.subscribe('textStream', this.getTextTitle());
   });
});

Template.StreamTextReusable.helpers({
  textContext: function(){
    const instance = Template.instance();
    const textTitle = instance.getTextTitle();
    return Texts.findOne(textTitle) ? [textTitle] : [];
  },
  textArgs: function(textTitle){
    return Texts.findOne(textTitle);
  }
});

Template.TextItem.helpers({
pathforTextStream: function (){
  var text = this;
  var params = {
    ttitle : text.texttitle
  };
  var channel = "texts";
  var path = FlowRouter.path(channel, params);
  return path;
}
});



Template.TextFeed.helpers({
texts: function() {
  return Texts.find({}, {sort: {createdAt: -1}});
}
});
/*
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
}
*/
