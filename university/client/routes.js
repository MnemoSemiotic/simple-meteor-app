if (Meteor.isClient) {
  Router.route("/", function() {
    this.render("home");
  })

  Router.route("/courses", function() {
    Meteor.subscribe("courses");
    this.render("showCourses");
  })

  Router.route("/courses/addcourse", function() {
    this.render("addCourse");
  })
}
