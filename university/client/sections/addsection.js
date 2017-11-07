Template.addSection.events({
    'click #submit': function (event, instance) {
        if (event && event.preventDefault) event.preventDefault();
        var sectionInput = {};
        sectionInput.sectionnumber = +$("#sectionnumber").val();
        sectionInput.professor = $("#professor").val();
        sectionInput.course = $("#course").val();
        Meteor.call("addSection", sectionInput);
        Router.go('/sections');
    }
});
