Projects = new Mongo.Collection( 'projects' );

let ProjectsSchema = new SimpleSchema({
  'titlev': {
    type: String,
    label: 'The title of the project.',
    optional: true
  },
  'descriptionv': {
    type: String,
    label: 'The ID of the user this message was sent directly to.',
    optional: true
  },
  'locationv': {
    type: String,
    label: 'The ID of the user that created this message.'
  },
  'project1': {
    type: Date,
    label: 'The date and time this message was created.'
  },
  'project2': {
    type: String,
    label: 'The content of this message.'
  }
});

Projects.attachSchema( ProjectsSchema );
