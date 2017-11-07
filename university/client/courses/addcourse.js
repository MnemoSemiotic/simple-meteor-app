Template.addCourse.events({
  'click #submit': function(event, instance) {
    if (event && event.preventDefault) event.preventDefault();

    var courseInput = {};

    // taking form data
    courseInput.coursename = $("#coursename").val();
    courseInput.coursedescription = $("#coursedescription").val();
    courseInput.credithours = $("#credithours").val();

    Meteor.call("addCourse", courseInput);

    Router.go('/courses');
  }
});
