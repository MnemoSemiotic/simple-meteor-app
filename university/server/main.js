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

  resetDB: function () {
    console.log("ResetDB called. Goodbye");
    CourseInfo.remove({});
  }
});

// Publish courses
Meteor.publish("courses", function () {
  return CourseInfo.find();
})


// Utility to add entities to DB
collections = {};

function makeCollection(name) {
	collections[name] = new Mongo.Collection(name.toLowerCase());
	return collections[name];
}

CourseInfo = makeCollection("CourseInfo");
