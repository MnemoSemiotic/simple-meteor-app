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
  },

  addSection: function (sectionInput) {

    console.log("addSection was called");
    console.log(sectionInput);

    if (sectionInput.sectionnumber > 0
      && sectionInput.course.length > 0
      && sectionInput.professor.length > 0) {

        sectionInput.createdAt = new Date();
        SectionInfo.insert(sectionInput);

        console.log("Section added");
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

// Publish sections
Meteor.publish("sections", function () {
  return SectionInfo.find();
})

// Utility to add entities to DB, duplicated in collections.js
collections = {};

function makeCollection(name) {
	collections[name] = new Mongo.Collection(name.toLowerCase());
	return collections[name];
}

CourseInfo = makeCollection("CourseInfo");
ProfessorInfo = makeCollection("ProfessorInfo");
SectionInfo = makeCollection("SectionInfo");
