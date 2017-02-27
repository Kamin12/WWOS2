Template.StreamImage.onCreated( function(){
     this.getImageTitle = () => FlowRouter.getParam('Title');
     this.autorun( () => {
     this.subscribe('imageStream', this.getImageTitle());
   });
});


Template.StreamImage.helpers({
  imageContext: function(){
    const instance = Template.instance();
    const imageTitle = instance.getImageTitle();
    return Images.findOne(imageTitle) ? [imageTitle] : [];
  },
  imageArgs: function(imageTitle){
  return Images.findOne(imageTitle);
  }
});


Template.ImageItem.helpers({
pathforImageStream: function (){
  var image = this;
  var params = {
    image : image.imagetitle
  };
  var channel = "images";
  var path = FlowRouter.path(channel, params);
  return path;
}
});




/*
Template.StreamImage.helpers {(
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
)};
*/
