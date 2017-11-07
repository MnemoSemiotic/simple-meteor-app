import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({

  addCourse: function (courseInput) {

    console.log("addCourse was called");
    console.log(courseInput);

    if (courseInput.coursename.length > 0
      && courseInput.coursedescription.length > 0
      && courseInput.credithours > 0) {

      courseInput.createdAt = new Date();
      CourseInfo.insert(courseInput);

      console.log("Course added.");
    }
  },

  addProfessor: function (professorInput) {

    console.log("addProfessor was called");
    console.log(professorInput);

    if (professorInput.professorname.length > 0) {

      professorInput.createdAt = new Date();
      ProfessorInfo.insert(professorInput);

      console.log("Professor Added");
    }
  }
});

// Publish courses
Meteor.publish("courses", function () {
  return CourseInfo.find();
})

// Publish professors
Meteor.publish("professors", function () {
  return ProfessorInfo.find();
})

// Utility to add entities to DB
collections = {};

function makeCollection(name) {
	collections[name] = new Mongo.Collection(name.toLowerCase());
	return collections[name];
}

CourseInfo = makeCollection("CourseInfo");
ProfessorInfo = makeCollection("ProfessorInfo");
