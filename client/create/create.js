if (Meteor.isClient) {


Template.Create.helpers({
  'NotLoggedIn': function() {
    if ( !Meteor.user() & !Meteor.loggingIn()) { return false; } else { return true; }
  },
  'FormRendered': function() {
    return Template.instance().rendered.get();
  }
});

Template.CreateNavigator.events({

});

Template.CreateNavigator.onCreated(function(){
  var renderedtemplate = Session.get('currentForm');
  var ham = 'template.Create'
  const completeham = ham.concat(renderedtemplate);
});

Template.Create.onRendered(function CreatingisCreation(){
Session.set('rendered', false);

  this.formnext = new ReactiveVar('fone');
  this.formback = new ReactiveVar('fone');
  this.errormessagecreate = new ReactiveVar('null');
});



Template.CreateVideo.events({
  'submit #CreateVideoForm': function(event) {
    event.preventDefault();

		var instance = Template.instance();
		var videodata = {
		 videotitle : event.target.TitleVideo.value,
		 videotext : event.target.TextVideo.value,
     videovideo : event.target.VideoVideo.value,
     videoimage : event.target.ImageVideo.value,
		 videomembers : event.target.MembersVideo.value,
		 videodate : event.target.DateVideo.value
	},
  pass = true,
  missingElement;

    for (var key in videodata) {
      if (!memberDetails[key]) {
        pass = false;
        missingElement = key;
        template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');
      }
    }
  if (pass) {
    Meteor.call('createVideo', videodata, function (err,response) {
    if (err) {
        alert(err.messsage);
      } else {
        Session.set('rendered', false);
    }
  });
  }
},
'click .back': function (event, template){
  Blaze.remove(Template.instance().view);
  Session.set('SelectedForm', '+++');
}
});

Template.CreateImage.events({
	'submit #createimage': function(event) {
    event.preventDefault();
      var instance = Template.instance();
			var imagedata = {
				  imagetext : event.target.TextImage.value,
          imagetitle: event.target.TextTitle.value,
          imageimage : event.target.ImageImage.value,
				  imagemember : event.target.MemberImage.value,
				  imagedate : event.target.DateImage.value
			 },
       pass = true,
       missingElement;

         for (var key in imagedata) {
           if (!imagedata[key]) {
             pass = false;
             missingElement = key;
             template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');
           }
         }
       if (pass) {
         Meteor.call('createImage', imagedata, function (err,response) {
         if (err) {
             alert(err.messsage);
           } else {
             Session.set('rendered', false);
         }
       }
       );
       }
     },
     'click .back': function (event, template){
       Blaze.remove(Template.instance().view);
       Session.set('SelectedForm', '+++');
     }
			});

Template.CreateText.onRendered(function createlocationvar(){
  Session.set('rendered', true);
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateImage.onRendered(function createlocationvar(){
  Session.set('rendered', true);
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateAudio.onRendered(function createlocationvar(){
  Session.set('rendered', true);
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateProduct.onRendered(function createlocationvar(){
  Session.set('rendered', true);
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateVideo.onRendered(function createlocationvar(){
Session.set('rendered', true);
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});


Template.CreateText.events({
'submit #CreateText': function(event, template) {
  event.preventDefault();

  var instance = Template.instance();

var textdata ={
  texttitle : event.target.TitleText.value,
  texttext : event.target.TextText.value,
  textmember : event.target.MemberText.value,
  textmedia : event.target.ImageFileText.value,
  textdate : event.target.DateText.value
},
pass = true,
missingElement;

  for (var key in videodata) {
    if (!memberDetails[key]) {
      pass = false;
      missingElement = key;
      template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');
    }
  }
if (pass) {
  Meteor.call('createText', textdata, function (err,response) {
  if (err) {
      alert(err.messsage);
    } else {
      Session.set('rendered', false);

  }
});
}
   },
   'click .back': function (event, template){
     Blaze.remove(Template.instance().view);
     Session.set('SelectedForm', '+++');
   },
   'click #textlocationbutton': function(event, template) {
     template.locationamount.set(true);
     $('#textlocationbutton').hide();

     function getLocation() {
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(showPosition);
         } else {
             x.innerHTML = "Geolocation is not supported by this browser.";
         }
     }

     function showPosition(position) {
         x.innerHTML = "Latitude: " + position.coords.latitude +
         "<br>Longitude: " + position.coords.longitude;
     }

     var locationlatitude = getlocation();

}
});

Template.CreateText.helpers({
  locationvisual: function(){
    return template.locationamount.get();
  },
  location: function(){
    return getLocation();
  }
});


Template.CreateAudio.events({
  'submit #createaudio': function(event, template ) {
    event.preventDefault();

  var instance = Template.instance();

const data = {
  audiotitle : event.target.TitleAudio.value,
  audiotext : event.target.TextAudio.value
}
    Audio.methods.addtext.call(data);
},
'click .back': function (event, template){
  Blaze.remove(Template.instance().view);
  Session.set('SelectedForm', '+++');
}
});

/*
Template.CreateProject.events({
  'submit #createproject': function(event) {
  var instance = Template.instance();
  var data ={
      projecttitle : event.target.TitleProject.value,
      projecttext : event.target.TextProject.value,
      projectdatestart : event.target.StartProject.value,
      projectdateend : event.target.EndProject.value,
      projectmember : event.target.MemberProject.value,
      projectmedia : event.target.MediaProject.value,
      projectmembers : event.target.MembersProject.value,
  },
  pass = true,
  missingElement;

    for (var key in videodata) {
      if (!memberDetails[key]) {
        pass = false;
        missingElement = key;
        template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');
      }
    }
  if (pass) {
    Meteor.call('createVideo', videodata);
  }
  }
});

Template.CreateRequest.events({
  'submit #createrequest': function(event) {
var instance = Template.instance();
var requestdata ={
      requesttitle : event.target.TitleRequest.value,
      requesttext : event.target.TextRequest.value,
      requestdate : event.target.DateRequest.value,
      requestmember : event.target.MemberRequest.value,
      requestmedia : event.target.MediaRequest.value,
      requestmembers : event.target.MembersRequest.value,
  },
  pass = true,
  missingElement;

    for (var key in videodata) {
      if (!memberDetails[key]) {
        pass = false;
        missingElement = key;
        template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');
      }
    }
  if (pass) {
    Meteor.call('createRequest', requestdata);
  }
  }
});
*/

Template.CreateText.onRendered(function(){
  $( "#createtext" ).slideUp( 3000, "slow");
});

Template.CreateImage.onRendered(function(){
  $( "#createimage" ).slideUp( 3000, "slow");
});

Template.CreateAudio.onRendered(function(){
  $( "#createaudio" ).slideUp( 3000, "slow");
});


Template.Create.helpers({
  back: function(){
    return Template.instance().formback.get();
  },
  next: function (){
    return Template.instance().formnext.get();
  }
});

Template.CreateNavigator.helpers ({
currentForm: function() {
  return Session.get('SelectedForm');
}
})

Template.Create.onRendered(function() {
  Session.set('SelectedForm', '+++' );
  Meteor.setTimeout(() => {
    var modal2 = $('.modal3');
    modal2.css('display', 'block');
  }, 500);
});

Template.Create.events({
  'click #AudioSelection': function (event, template) {
    Session.set('SelectedForm', 'Audio' );
    Blaze.render(Template.CreateAudio, template.$('#createnav').get(0));
  },
  'click #TextSelection': function (event, template) {
    Session.set('SelectedForm','Text' );
    Blaze.render(Template.CreateText, template.$('#createnav').get(0));
  },
  'click #ImageSelection': function (event, template) {
    Session.set('SelectedForm', 'Image');
    Blaze.render(Template.CreateImage, template.$('#createnav').get(0));
  },
  'click #VideoSelection': function (event, template) {
    Session.set('SelectedForm', 'Video' );
    Blaze.render(Template.CreateVideo, template.$('#createnav').get(0));
  },
  'click #RequestSelection': function (event, template) {
    Session.set('SelectedForm', 'Request' );
    Blaze.render(Template.CreateRequest, template.$('#createnav').get(0));
  },
  'click #ProductSelection2': function (event, template) {
    Session.set('SelectedForm', 'Product' );
    Blaze.render(Template.CreateProduct,  template.$('#createnav').get(0));
  },
  'click .close': function(event, template) {
    Blaze.remove(Template.instance().view);
    Session.set('SelectedForm', '+++');
  }
});



Template.CreateProduct.events({
  'submit .addproduct': function(event, template){
      event.preventDefault();
      var productDetails = {
          productmedia: event.target.MediaProduct.value,
          producttitle: event.target.TitleProduct.value,
          producttext: event.target.TextProduct.value,
          productprice: event.target.PriceProduct.value,
          productshipprice: event.target.ShipPriceProduct.value,
          productshiptime: event.target.ShipTimeProduct.value
      },
      pass = true,
      missingElement;
      for (var key in productDetails) {
        if (!productDetails[key]) {
          pass = false;
          missingElement = key;
          Template.instance().errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');
        }
      }
      if (pass){
        Meteor.call('createProduct', productDetails , function (err,response) {
        if (err) {
            alert(err.messsage);
          } else {
            Session.set('rendered', false);
        }
      });
      }
    },
    'click #addmember': function (event, template) {
      var memberval = event.target.AddSearchMembers.value;
      $('#addmember').hide();
      template.l

    },
  'click #fone': function(event) {
    Template.instance().formback.set('ProductSelection2');
    Template.instance().formnext.set('ftwo');
  },
  'click #ftwo': function (event) {
    Template.instance().formback.set('fone');
    Template.instance().formnext.set('fthree');
  },
  'click #fthree': function (event) {
    Template.instance().formback.set('ftwo');
  },
  'click .back': function (event, template){
    Blaze.remove(Template.instance().view);
    Session.set('SelectedForm', '+++');
  }
});


Template.CreateProject.events({
  'click #gone': function (event) {
    Template.instance().formback.set('ProductSelection2');
    Template.instance().formnext.set('ftwo');
  },
  'click #gtwo': function (event) {
    Template.instance().formback.set('fone');
    Template.instance().formnext.set('fthree');
  },
  'click #gthree': function (event) {
    Template.instance().formback.set('ftwo');
  }
  });

Template.CreateGroup.events({
  'click #sharegroup': function(event, template) {
  },
  'click #convert': function (event, template) {
    var groupmembers = this.members;
    Blaze.remove(Template.view);
  }
});

Template.CreateMenu.helpers({
  CurrentSelection (event, template) {
    return Session.get('SelectedForm')
  }
});

}
