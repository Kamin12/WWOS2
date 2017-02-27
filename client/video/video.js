Template.StreamVideo.onCreated( function(){
   this.getVideoTitle = () => FlowRouter.getParam('vtitle');
   this.autorun( () => {
     this.subscribe('videoStream', this.getVideoTitle());
   });
});

Template.StreamVideo.helpers({
  videoContext: function(){
    const instance = Template.instance();
    const videoTitle = instance.getVideoTitle();
    return Video.findOne(videoTitle) ? [videoTitle] : [];
  },
  videoArgs: function(videoTitle){
  return Videos.findOne(videoTitle);
  }
});

Template.VideoItem.helpers({
pathforVideoStream: function (){
  var video = this;
  var params = {
    vtitle : video.videotitle
  };
  var channel = "videos";
  var path = FlowRouter.path(channel, params);
  return path;
}
});


Template.VideoFeed.helpers({

});

/*
Template.StreamVideo.helpers{(
  Liked: function(){
   if (!Likedby.indexOf({{this.MemberName, -1}})) {
     return 'red';
   }  else {
     return 'white';
   }
 },
 Bought: function(){
  if (!Boughtby.indexOf({{this.MemberName, -1}})) {
    return 'Green';
  }  else {
    return 'white';
  }
},
Saved: function(){
 if (!Savedby.indexOf({{this.MemberName, -1}})) {
   return 'Purple';
 }  else {
   return 'white';
 }
},
Shared: function(){
 if (!Sharedby.indexOf({{this.MemberName, -1}})) {
   return 'Turquoise';
 }  else {
   return 'white';
 }
}
)};

Template.VideoItem.helpers({
  Liked: function(){
   if (!Likedby.indexOf({{this.MemberName, -1}})) {
     return 'red';
   }  else {
     return 'white';
   }
 },
 Bought: function(){
  if (!Boughtby.indexOf({{this.MemberName, -1}})) {
    return 'Green';
  }  else {
    return 'white';
  }
},
Saved: function(){
 if (!Savedby.indexOf({{this.MemberName, -1}})) {
   return 'Purple';
 }  else {
   return 'white';
 }
},
Shared: function(){
 if (!Sharedby.indexOf({{this.MemberName, -1}})) {
   return 'Turquoise';
 }  else {
   return 'white';
 }
}
})
*/
