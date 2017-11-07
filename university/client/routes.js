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

  Router.route("/professors", function () {
    Meteor.subscribe("professors");
    this.render("showProfessors");
  })

  Router.route("/professors/addprofessor", function () {
    this.render("addProfessor");
  })

  Router.route("/sections", function () {
      Meteor.subscribe("sections");
      Meteor.subscribe("professors");
      Meteor.subscribe("courses");
      this.render("showSections");
  })

  Router.route("/sections/addsection", function () {
        Meteor.subscribe("courses");
        Meteor.subscribe("professors");
        this.render("addSection");
  })
}
