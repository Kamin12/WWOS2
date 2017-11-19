if (Meteor.isServer) {

Meteor.publish("userdata", function (Membername) {
    if (!this.Membername) {
  return this.ready();
 }
 return Meteor.users.find({
  Membername: this.Membername
 });
 });


Meteor.publish('sidebar', function(){
  if (!this.userId) {
  return this.ready();
}

  new SimpleSchema({
    listId: {type: String}
  }).validate({ listId });

  return [
    Groups.find(),
    Messages.find()
  ];
});

Meteor.publish( 'channel', function( isDirect, channel ) {
  if (!this.userId) {
  return this.ready();
}

  new SimpleSchema({
    listId: {type: String}
  }).validate({ listId });

if (!this.userId) {
  return this.ready();
}
  check( isDirect, Boolean );
  check( channel, String );

  if ( isDirect ) {
    let user = Meteor.users.findOne( { username: channel.replace( '@', '' ) } );
    return Messages.find({
      $or: [ { owner: this.userId, to: user._id }, { owner: user._id, to: this.userId } ]
    });;
  } else {
    let selectedChannel = Channels.findOne( { name: channel } );
    return Messages.find( { channel: selectedChannel._id } );
  }
});


/*
Meteor.publish('productFeed', function getProductTitle() {
  if (!this.userId) {
  return this.ready();
}

  new SimpleSchema({
  listId: {type: String}
}).validate({ listId });

  return Products.find({},
    {
      fields: {
        Member: 1,
        Members: 1,
        Title: 1,
        DateCreated: 1,
        Description: 1
      }
    }
  )
 });


Meteor.publish('audioFeed', {
  if (!this.userId) {
  return this.ready();
}

  return Audiocloud.find({}, {
      fields:
    });
});

Meteor.publish('videoFeed', {
  if (!this.userId) {
  return this.ready();
}

  return Video.find({
      Title: projectn
    }, {
      fields:
    });
});

Meteor.publish('textFeed', {
  if (!this.userId) {
  return this.ready();
}

  return Texts.find({
      Title:
    }, {
      fields:
    });
});




Meteor.publish('imageFeed', {
  if (!this.userId) {
  return this.ready();
}

  return Images.find({
      Title: projectn
    }, {
      fields: Lists.publicFields
    });
});
*/


/*
Meteor.publish('imageCloud', function() {
  if (!this.userId) {
  return this.ready();
}
  return Images.find({imagemember: this.imagemember},
      {  fields: {
         imagemember: 1,
         imagetitle: 1,
         imagedate: 1 }
       });
    });


    Meteor.publish('textCloud', function() {
      if (!this.userId) {
      return this.ready();
    }

      return Texts.find({
        textmember: this.textemember},
       {  fields: {
          textmember: 1,
          texttitle: 1,
          textdate: 1 }});
        });


        Meteor.publish('videoCloud', function() {
          if (!this.userId) {
          return this.ready();
        }
          return Video.find({
              videomember: this.videomember
            }, {
              fields: {
              videomember: 1,
              videotitle: 1,
              videodate: 1
            }
            });
        });


        Meteor.publish('productCloud', function () {
          if (!this.userId) {
          return this.ready();
        }

          return Products.find({productmember: this.productmember},
            {
              fields: {
                productmember: 1,
                producttitle: 1,
                productdate: 1
              }
            }
          )
         });

         Meteor.publish('audioCloud', function () {
           if (!this.userId) {
           return this.ready();
         }

           return Audio.find({audiomember: this.audiomember},
             {
               fields: {
                 audiomember: 1,
                 audiotitle: 1,
                 audiodate: 1
               }
             }
           )
          });
*/


Meteor.publish('imageStream', function (imageTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Images.findOne({imageTitle}, {
    fields: {
      imagemember: 1,
      imagemembers: 1,
      imagetitle: 1,
      imagedate: 1,
      imagetext: 1
    }
  });
});

Meteor.publish('textStream', function (textTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Texts.findOne({textTitle}, {
    fields: {
      textmember: 1,
      textmembers: 1,
      texttitle: 1,
      textdate: 1,
      texttext: 1
    }
  });
});

Meteor.publish('videoStream', function (videoTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Video.findOne({videoTitle}, {
      fields: {
        videomember: 1,
        videomembers: 1,
        videotitle: 1,
        videodate: 1,
        videotext: 1
     }
    });
});

Meteor.publish('audioStream', function (audioTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Audio.findOne({audioTitle}, {
    fields: {
      audiomember: 1,
      audiomembers: 1,
      audiotitle: 1,
      audiodate: 1,
      audiotext: 1
   }
 });
});

Meteor.publish('productStream', function (productTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Products.findOne({productTitle}, {
      fields: {
        productmember: 1,
        productmembers: 1,
        producttitle: 1,
        productdate: 1,
        producttext: 1
      }
    });
 });
}
