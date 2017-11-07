Template.addProfessor.events({
    'click #submit': function (event, instance) {
        if (event && event.preventDefault) event.preventDefault();
        var professorInput = {};
        professorInput.professorname = $("#professorname").val();
        Meteor.call("addProfessor", professorInput);
        Router.go('/professors');
    }
});
