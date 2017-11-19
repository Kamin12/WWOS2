if (Meteor.isServer) {
  var Stripe = StripeAPI(Meteor.settings.private.stripe);


/*
const Ordersinsert = new ValidatedMethod ({
name:'Orders.methods.insert' ,
validate: new SimpleSchema({
name: { type: String},
email: {type: String},
size: {type: String},
item: {type: String},
createdAt: {type: Object}
}).validator(),
run({name, email, size, item, createdAt}){
Orders.insert({
ordername: name,
orderemail: email,
ordersize: size,
orderitem: item,
orderdate: createdAt
});
}
 });

const Usersinsert= new ValidatedMethod ({
name: 'Users.methods.insert',
validate:  new SimpleSchema({
  Membernameone: { type: String },
  Firstnameone: { type: String },
  Lastnameone: { type: String },
  Memberbioone: { type: String }
}).validator(),
run({ Membernameone, Firstnameone, Lastnameone, Memberbioone  }) {
Meteor.users.update( { _id: Meteor.userId() } , {
    $set: {
    Membername: Membernameone,
    Firstname: Firstnameone,
    Lastname: Lastnameone,
    Memberbio: Memberbioone
    }
  });
}
});

const Productsinsert = new ValidatedMethod({
  name : 'Products.methods.insert',
  validate: new SimpleSchema({
    productmedia: {type: Object},
    producttitle: {type: String},
    producttext: {type: String},
    productdate: {type: Date},
    productshiptime: {type: String},
    productshipprice: {type: String}
  }).validator(),
  run({productmedia, producttitle, producttext, productdate, productshiptime, productshipprice }) {
Products.insert({
mediaproduct: productmedia,
titleproduct: producttitle,
textproduct: producttext,
dateproduct: productdate,
shiptimeproduct: productshiptime,
shippriceproduct : productshipprice
});
  }
});

const Textsinsert = new ValidatedMethod({
  name : 'Texts.methods.insert',
  validate: new SimpleSchema ({
    texttitle: { type: String },
    texttext: {type: String },
    textmember: {type: String},
    textmedia: {type: String}
  }).validator(),
  run({ texttitle, texttext, textmember, textmedia}) {
    Texts.insert({
      titletext: texttitle,
      texttexttwo: texttext,
      membertext: textmember,
      mediatext: textmedia
    });
  }
});

const Audioinsert = new ValidatedMethod({
  name: 'Audio.methods.insert',
  validate:new SimpleSchema({
      audiotitle: { type: String },
      audiotext: { type: String }
    }).validator(),
    run({audiotitle, audiotext}) {
	Audio.insert({
    titleaudio: audiotitle,
    textaudio: audiotext
	});
}
});

const Imagesinsert = new ValidatedMethod({
name: 'Images.methods.insert',
validate: new SimpleSchema ({
  imagetext: {type: String},
  imagetitle: {type: String},
  imageimage: {type: Object},
  imagedate: {type: Date}
}).validator(),
run({imagetext, imagetitle, imageimage,imagedate}) {
Images.insert({
  textimage: imagetext,
  titleimage: imagetitle,
  imageimagetwo: imageimage,
  dateimage: imagedate
});
}
});

const Videosinsert = new ValidatedMethod({
name: 'Videos.methods.insert',
validate: new SimpleSchema({
   videotitle: {type: String},
   videotext: {type: String},
   videovideo: {type: Object},
   videoimage: {type: Object},
   videodate: {type: Date}
}).validator(),
run({}) {
  Videos.insert({
    titlevideo: videotitle,
    textvideo: videotext,
    videovideotwo: videovideo,
    imagevideo: videoimage,
    datevideo: videodate
  });
}
});

const Settingsinsert = new ValidatedMethod({
name: 'Settings.methods.insert',
validate: new SimpleSchema({
  Membername: { type: String },
  Firstname: {type: String },
  Lastname: {type: String}
}).validator(),
run({}) {
Meteor.users.update({ _id: Meteor.UserId()}, {
  $set: {
  Membername: Membername,
  Firstname: Firstname,
  Lastname: Lastname
  }
});
}
});


*/
}
