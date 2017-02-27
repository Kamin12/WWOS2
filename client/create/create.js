if (Meteor.isClient) {



Template.CreateNavigator.events({
'click .close': function(event, template) {
  Blaze.remove(template.view);
}
});


Template.Create.onRendered(function CreatingisCreation(){
  this.formnext = new ReactiveVar('fone');
  this.formback = new ReactiveVar('fone');
  this.errormessagecreate = new ReactiveVar('null');
});

Template.CreateProduct.onCreated(function(){

this.CreateProductMedia = new ReactiveDict('CreateProductMedia');
});



Template.CreateVideo.onCreated(function(){

});


Template.CreateVideo.events({
  'submit #CreateVideo': function(event) {
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
        console.log("wread");
    }
  });
  }
			}
});

Template.CreateImage.events({
	'submit #createimage': function(event) {
      var instance = Template.instance();
			var imagedata = {
				  imagetext : event.target.TextImage.value,
          imagetitle: event.target.TextTitle.value,
          imageimage : event.target.ImageImage.value,
				  imagemember : event.target.MemberImage.value,
				  imagemembers : event.target.MembersImage.value,
				  imagedate : event.target.DateImage.value
			 },
       pass = true,
       missingElement;

         for (var key in imagedata) {
           if (!memberDetails[key]) {
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

         }
       }
       );
       }
				}
			});

Template.CreateText.onRendered(function createlocationvar(){
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateImage.onRendered(function createlocationvar(){
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateAudio.onRendered(function createlocationvar(){
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateProduct.onRendered(function createlocationvar(){
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});

Template.CreateVideo.onRendered(function createlocationvar(){
var template = Template.instance();
template.locationamount = new ReactiveVar(false);
template.collaborators = new ReactiveVar(false);

});


Template.CreateText.events({
'submit #CreateText': function(event, template) {
  var instance = Template.instance();

var textdata ={
  texttitle : event.target.TitleText.value,
  texttext : event.target.TextText.value,
  textmember : event.target.MemberText.value,
  textmembers : event.target.MembersText.value,
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

  }
});
}
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
  'submit #createaudio': function(event) {
  var instance = Template.instance();
  var audiodata ={
      audiotitle : event.target.TitleAudio.value,
      audioaudio : event.target.AudioAudio.value,
      audiotext : event.target.TextAudio.value,
      audiodate : event.target.DateAudio.value,
      audiomember : event.target.MemberAudio.value,
      audiomedia : event.target.MediaAudio.value,
      audiomembers : event.target.MembersAudio.value
  },
  pass = true,
  missingElement;

    for (var key in audiodata) {
      if (!memberDetails[key]) {
        pass = false;
        missingElement = key;
        template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');
      }
    }
  if (pass) {
    Meteor.call('createAudio', audiodata, function (err,response) {
    if (err) {
        alert(err.messsage);
      } else {
        console.log("wread");
    }
  });
  }
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

Template.CreateText.onCreated(function(){
  textMembers = [];

});

Template.CreateImage.onCreated(function(){
  imageMembers = [];

});

Template.CreateAudio.onCreated(function(){
  audioMembers = [];

});


Template.Create.helpers({
  back: function(){
    return Template.instance().formback.get();
  },
  next: function (){
    return Template.instance().formnext.get();
  }
});

Template.Create.onRendered(function() {
  Meteor.setTimeout(() => {
    var modal2 = $('.modal3');
    modal2.css('display', 'block');
  }, 500);
});


Template.CreateProduct.events({
  'click #shareproduct': function(event, template){
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
            console.log("wread");
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

Template.CreateNavigator.helpers({
'currentForm:': function(event, template) {
  var form = FlowRouter.getRouteName();
if (form = 'createaudio'){
  return 'Create Audio';
} else if(form = 'createvideo') {
  return 'Create Video';
} else if( form = 'createproduct') {
  return 'Create Product';
} else if( form = 'createimage') {
  return 'Create Image';
} else if( form = 'createtext') {
  return 'Create Text';
} else if( form="createbooking") {
  return 'Create Text';
}
}
});


}
