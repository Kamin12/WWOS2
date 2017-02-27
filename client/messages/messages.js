if (Meteor.isClient) {

Template.MyMessages.helpers({
  "user": function() {
    return Meteor.userId.username();
  },
  'NotLoggedIn': function() {
    if ( !Meteor.user() & !Meteor.loggingIn()) { return false; } else { return true; }
  }
});

Template.MyMessages.events({
  "click .close3": function(event, template) {
    var modal3 = $('#messageswhole');
    modal3.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #calltojoin': function(event, template) {
    var modal3 = $('#messageswhole');
    modal3.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #calltologin': function(event, template) {
    var modal3 = $('#messageswhole');
    modal3.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #addmessages': function(event, template){
  Blaze.render(Template.NewMessage, conversation)
  }
});

Template.MyMessages.onRendered(function() {
  Meteor.setTimeout(() => {
    var modal3 = $('.modal35');
    modal3.css('display', 'block');
  }, 500);
});


Template.YourMessages.onCreated( function() {

  this.establishSubscription = ( template, isDirect, channel ) => {
    template.subscribe( 'channel', isDirect, channel, () => {
      setScroll( 'messages' );
      setTimeout( () => { template.loading.set( false ); }, 300 );
    });
    };

  this.setupReactiveVariables = ( template ) => {
  template.isDirect = new ReactiveVar();
  template.loading  = new ReactiveVar( true );
  };

  this.handleSwitch = ( template ) => {
  let channel = FlowRouter.getParam( 'channel' );
  if ( channel ) {
    let isDirect = channel.includes( '@' );
    template.isDirect.set( isDirect );
    template.loading.set( true );
    establishSubscription( template, isDirect, channel );
  }
  };

  this.handleChannelSwitch = ( template ) => {
    setupReactiveVariables( template );
    Tracker.autorun( () => { handleSwitch( template ); } );
  };

  let template = Template.instance();
  handleChannelSwitch(template);

    this.getMessage = ( template ) => {
    let message = template.find( '[name="message"]' ).value;
    return message.trim();
    };

    this.checkIfCanInsert = ( message, event ) => {
    return message !== '' && event.keyCode === 13;
    };

    this.buildMessage = ( template ) => {
    return {
    destination: FlowRouter.getParam( 'channel' ).replace( '@', '' ),
    isDirect: template.isDirect.get(),
    message: template.find( '[name="message"]' ).value
    };
    };

    this.handleInsert = ( message, event, template ) => {
    insertMessageOne(message, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      event.target.value = '';
    }
    });
    };

    this.handleMessageInsert = ( event, template ) => {
    let text = getMessage( template ),
      canInsert = checkIfCanInsert( text, event );
    if ( canInsert ) {
    setScroll( 'messages' );
    handleInsert( buildMessage( template ), event, template );
    }
    };

    this.cleanUpMessageBeforeInsert = ( message ) => {
    delete message.destination;
    delete message.isDirect;
    };

    this.getChannelId = ( channelName ) => {
    let channel = Channels.findOne( { name: channelName } );
    if ( channel ) {
      return channel._id;
    }
    };

    this.getUserId = ( username ) => {
    let user = Meteor.users.findOne({ username: username });
    if ( user ) {
      return user._id;
    }
    };

    this.assignDestination = ( message ) => {
    if ( message.isDirect ) {
      message.Member = getUserId( message.destination );
    } else {
      let channelId = getChannelId( message.destination );
      message.Group = channelId;
    }
    };

    this.checkIfSelf = ({ destination, owner }) => {
    return destination === owner;
    };

    this.assignOwnerAndTimestamp = ( message ) => {
    message.owner     = Meteor.user.username();
    message.timestamp = new Date();
    };

    this.insertMessage = ( message ) => {
    assignOwnerAndTimestamp( message );
    if ( ! checkIfSelf( message ) ) {
      assignDestination( message );
      cleanUpMessageBeforeInsert( message );
      Meteor.call(insertMessageOne, message);
    } else {
      throw new Meteor.Error( '500', 'Can\'t send messages to yourself.' );
    }
    };

});

Template.NewMessage.events({
  'click #send2': function (event, template) {
  handleMessageInsert( event, template );
  },
  'click #close4': function (event, template) {
    var modal300 = $('#createnewmessage');
    modal300.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #creategroup': function (event, template) {
    Blaze.render(Template.CreateGroup, createnewmessage )
  },
  'change #fileInput': function(event,template){
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      var upload = Messages.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic'
      }, false);

      upload.on('start', function () {
        template.currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        template.currentUpload.set(false);
      });

      upload.start();
    }
  }
  });

Template.YourMessages.helpers({
  'messages': function(){
    return Messages.find({});
  }
});

Template.YourMessages.events({
   'click #newmessage': function (event, template) {
    Blaze.render(Template.NewMessage, conversation)
  },
   'change #fileInput': function(event,template){
     if (e.currentTarget.files && e.currentTarget.files[0]) {
       // We upload only one file, in case
       // multiple files were selected
       var upload = Images.insert({
         file: e.currentTarget.files[0],
         streams: 'dynamic',
         chunkSize: 'dynamic'
       }, false);

       upload.on('start', function () {
         template.currentUpload.set(this);
       });

       upload.on('end', function (error, fileObj) {
         if (error) {
           alert('Error during upload: ' + error);
         } else {
           alert('File "' + fileObj.name + '" successfully uploaded');
         }
         template.currentUpload.set(false);
       });

       upload.start();
     }
   }
 });

 Template.YourMessages.helpers({
  isLoading() {
    return Template.instance().loading.get();
  },
  isDirect() {
    return Template.instance().isDirect.get();
  },
  username() {
    return FlowRouter.getParam( 'channel' );
  }
  });

  Template.Sidebar.helpers({
    currentChannel( name ) {
   let current = FlowRouter.getParam( 'channel' );
   if ( current ) {
     return current === name || current === `@${ name }` ? 'active' : false;
   }
 },
messages (message){
  return Messages.find({});
}
  });

  Template.Message.onCreated( function() {
  new SimpleSchema({
    Member: {type: string},
    Group: {type: string},
    Message: {type: string},
  }).validate(Template.currentData());
  });

  Template.Sidebar.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'sidebar' );
});


 Template.SideMessage.onCreated( ()=> {
   new SimpleSchema({
     Member: {type: string},
     Group: {type: string},
     Message: {type: string},
   }).validate(Template.currentData());
   });

}
