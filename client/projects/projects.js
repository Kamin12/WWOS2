

/*
Template.ProjectMembers.onCreated( function(){
this.payMember = () => {

},
this.messageMember = () => {

}
});

Template.ProjectMembers.helpers({
projectArgs(projectName){
  return Projects.findOne(projectName);
},
projectmembers(projectName){
  return Projects.findOne(projectName);
}
});

Template.YourProjects.onCreated(function(){

    this.subscribe('myProjects', this.Member);

    this.deleteProject = () => {
      Meteor.call('deleteProject');
    };

    this.editProject = () => {
      Meteor.call('editProject');
    };
});
/*
Template.YourProjects.events({
  'click #deleteproject'() {

  },
  'click #editproject'(){

  }
});


Template.ProjectStreamHome.onCreated( function(){
    this.getprojectName = () => FlowRouter.getParam('Title');
    this.autorun(() => {
      this.subscribe('projectName', this.getprojectName());
    });
  });

Template.ProjectStreamHome.helpers({
projArgs() {
  const instance = Template.instance();
   const project = instance.getProjectName();
   return Projects.findOne(project) ? [project] : [];
},
projectData(project){
  return Projects.findOne(project);
}
});
*/
