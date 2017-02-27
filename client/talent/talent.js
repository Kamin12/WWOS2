/*

Inquiriesdb = new Mongo.Collection('inquiriesdb');
Spacedb = new Mongo.Collection('spacedb');
EasySearch.createSearchIndex('inquiries', {
  collection: inquiriesdb,
  field: ['position', 'location', 'payment', 'postedOn','organization'],
  limit: 10,
  use: 'mongo-db',
  query: function(searchString, opts) {
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, '^' + searchString);
    return query;
  }
});
var filterArray = [];
var _dep = new Deps.Dependency();

Template.Network.onRendered(function() {
  $('.carousel').carousel();
});

Template.Network.events({
  'click #directoryLink': function() {
    if (Session.get('networkPage') !== 'Directory') {
      Session.set('networkPage','Directory');
    }
  },
  'click #eventsLink': function() {
    Session.set('networkPage', 'Events');
  },
  'click #spaceLink': function() {
    Session.set('networkPage', 'Spaces');
  },
  'click #opportunityLink': function() {
    Session.set('networkPage', 'Inquiries');
  },
  'click #calendarLink': function() {
    Session.set('networkPage', 'EventCalendar');
  },
  'click #subscribe':function(e,t){
    Meteor.call('subscribe', Meteor.userId(), this._id);
  }
});

Template.Directory.events({
  'click .profiles': function(e,t){
    Session.set("usrid", this._id);
  },
  'click img[data-target="#inquiryModal"]': function () {
    Session.set('inquiryUserTo', this._id);
  },
  'click .filter' : function () {
    var clicked = this;
    var found = filterArray.some(function (el) {
      return (el.id == clicked._id);
    });
    if (!found) {
       filterArray.push({
        id: this._id,
        value: this.name
      });
    _dep.changed();
    }
  },
  'click .remove' : function () {
    var index = -1;
    var clicked = this;
    for(var i=0;i<filterArray.length;i++){
      if (filterArray[i].id == clicked.docId){
        index = i;
      }
    }
    if (index > -1) {
      filterArray.splice(index, 1);
    }
    _dep.changed();
   },

  "submit #searchForm": function(event, template) {
    var nameFilter = event.target.name_filter.value.trim();
    var locationFilter = event.target.location_filter.value.trim();

    if(nameFilter === "" && locationFilter === "") {
      Session.set('isFiltered', false);
      return false;
    }

    if(locationFilter === "") {
      EasySearch.changeProperty('users','filteredLocation','all');
    }

    if (nameFilter === "") {
      EasySearch.search('locations',locationFilter, function(error,data) {
        if (error) {
          console.log(error);
        } else {
          Session.set('filteredUsers', data.results);
          Session.set('isFiltered', true);
          console.log(data.results);
        }
      });
    } else if(locationFilter === "") {
      EasySearch.search('users',nameFilter, function(error,data) {
        if (error) {
          console.log(error);
        } else {
          Session.set('filteredUsers', data.results);
          Session.set('isFiltered', true);
          console.log(data.results);
        }
      });
    } else {
      var instance = EasySearch.getComponentInstance({ index: 'users'  });
      EasySearch.changeProperty('users','filteredLocation',locationFilter);

      EasySearch.search('users',nameFilter, function(error,data) {
        if (error) {
          console.log(error);
        } else {
          Session.set('filteredUsers', data.results);
          Session.set('isFiltered', true);
          console.log(data.results);
        }
      });
    }

    return false;
  },
    'click #book':function(e,t){
     Session.set('bookthisuser',this._id);
     Session.set('pcontext','Members');
     //Router.go("projects");

     }
});

Template.pmod.events({
'click #invite':function(event,template){
  var p = Projectdb.find({_id: template.find('#projid2').value}).fetch();
  var proj = p[0];
  for(var j=0; j<proj.roles.length; j++){
  	if(proj.roles[j].id == template.find('#roleid').value){
	   var r = proj.roles[j];
	  break;
	}
}

Meteor.call('updateProject',
  template.find('#projid2'.value),
  Session.get('bookthisuser'),
  template.find('#projid2'.value),
  Meteor.userId(),
  proj.title,
  template.find('#roleid').value,
  r.role,
  r.location,
  r.payment,
  r.equity,
  "No",
  template.find('#invitationtext').value,
  []
);

var messageText = template.find('#invitationtext').value;
    Meteor.call('addChat', Meteor.userId(), Session.get('bookthisuser'), Random.id(17), Meteor.userId(), messageText, new Date(), "none", new Date(), "")
},
'change #projid2':function(e,t){
    Session.set('projid2',t.find('#projid2').value);
    Session.set('selectedrole',t.find('#roleid').value);
  },
  'change #roleid': function(e,t){
    Session.set('selectedrole',t.find('#roleid').value);
  },
});

Template.Inquiries.events({
  'click #listopp':function(e,t){
    Meteor.call('addInquiry', Meteor.userId(), t.find('#org').value, t.find('#locn').value, t.find('#posn').value, t.find('#payment').value, t.find('#equity').value, new Date());
  },
  'click #searchopp':function(e,t){
    e.preventDefault();
    Session.set('searched', {pos: t.find('#posnopp').value, loc: t.find('#locnopp').value});//, pay: p});
    }
});

Template.Spaces.events({
  'click #listspace':function(e,t){
    Meteor.call('addSpace', Meteor.userId(), t.find('#vname').value, t.find('#vlocn').value, t.find('#vcost').value);
  }
});


Template.Directory.helpers({
  users: function () {
    if(Session.get('isFiltered')) {
        return Session.get('filteredUsers');
      }
      _dep.depend();
    if(filterArray.length==0){
      return Meteor.users.find({username: {$ne: null}, "profile.fname": {$ne: null}},{fields:{_id:1, emails:1, username: 1, profile: 1}});
    }
    else{
      return Meteor.users.find({username: {$ne: null}, "profile.fname": {$ne: null}, "profile.skillset": {$elemMatch: {$in: filterArray}}},{fields:{_id:1, emails:1, username: 1, profile: 1}});
    }
  },
  profilepic: function(){
    var user = Meteor.users.findOne({_id: this._id});
    if (!user.profile) {
      return [];
    }
    if (!user.profile.picture) {
      return [];
    }
    return UploadedFiles.find({_id: user.profile.picture});
  },
  files: function(){
    //only return 3 to show
    return UploadedFiles.find({owner: this._id}, {limit:3});
  },
  isAudio: function(orig_name){
    return (orig_name.match(/\.mp3$/)==".mp3");
  },
  isVideo: function(orig_name){
    return (orig_name.match(/\.mp4$/)==".mp4");
  },
  isFiltered: function() {
    return Session.get('filterUsers');
  },
  filteredUser: function() {
    return Session.get('filteredUsers');
  }
});

Template.filters.helpers({
  'allskills': function(){
    return Skillsdb.find();
  }
});

Template.Network.helpers({
  loadPage: function() {
    if (!Session.get('networkPage')) {
      return 'Directory';
    }
    return Session.get('networkPage');
  },

  pageData: function() {
    return Session.get('templateData');
  }
});

Template.pmod.helpers({
'getprojects':function(){
    return Projectdb.find({createdBy: Meteor.userId()},{sort: {createdAt: -1}});
  },
  'thisproject':function(){
    return Projectdb.find({_id: Session.get('projid2')});
  },
  'thisrole':function(){
    var ans = Projectdb.find({_id: Session.get('projid2')}).fetch();//Session.get('selectedrole');
    for(var i=0;i<ans[0].roles.length;i++){
      if(ans[0].roles[i].id == Session.get('selectedrole')){
        return ans[0].roles[i].role;
      }
    }
  }
});

Template.Inquiries.helpers({
'opp': function(){
if(!Session.get('searched')){
	return inquiriesdb.find();
}else{
	var a=Session.get('searched');
	var p1=new RegExp(a.pos);
	var p2=new RegExp(a.loc);
	//var p3 = a.pay;
	//if(isNaN(p3)) p3=0;
	return inquiriesdb.find({position: p1, location: p2});//, payment:{$gte: p3}});
}},

'pictureof':function(uid){

  var user = Meteor.users.findOne({_id: uid});

  if (!user.profile) {

    return [];

  }

  if (!user.profile.picture) {

    return [];

  }

return UploadedFiles.find({_id: user.profile.picture});

},

'nameof': function(uid){
var ans =  Meteor.users.find({_id: uid}).fetch();
return (ans[0].profile.fname+" "+ans[0].profile.lname);
}
});

Template.Spaces.helpers({
'space': function(){
return Spacedb.find();
},
'pictureof':function(uid){
  var user = Meteor.users.findOne({_id: uid});
  if (!user.profile) {
    return [];
  }
  if (!user.profile.picture) {
    return [];
  }
return UploadedFiles.find({_id: user.profile.picture});
},
'nameof': function(uid){
var ans =  Meteor.users.find({_id: uid}).fetch();
return (ans[0].profile.fname+" "+ans[0].profile.lname);
}
});


Template.pmod.onCreated = function(){
var ans = Projectdb.find({createdBy: Meteor.userId()},{sort: {createdAt: -1}, limit: 1}).fetch();
if(!jQuery.isEmptyObject(ans)){
Session.set('projid2',ans[0]._id);
}};

Template.Inquiries.onCreated = function () {
Session.set('searched',false);
};

Template.Directory.created = function () {


    filterArray=[];

    this.autorun(function () {

    var instance = EasySearch.getComponentInstance(

    { index : 'skills' });

    instance.on('autosuggestSelected', function (values) {
      // run every time the autosuggest selection changes

    if(!jQuery.isEmptyObject(values)){

    var found = filterArray.some(function (el) {

  return (el.id == values[values.length-1].id);});


if (!found) {
filterArray.push(values[values.length-1]);
_dep.changed();
    }}
    });
  });
};

Template.Directory.rendered = function () {
};

Template.Directory.destroyed = function () {
};

Template.registerHelper('getFirstSkill', function(skillset) {
  if (!skillset) {
    return "No skills listed";
  } else if (skillset.length === 0) {
    return "No skills listed";
  } else {
    return skillset[0];
  }
});
*/
