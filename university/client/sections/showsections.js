Template.addSection.helpers({
    getProfessors: function () {
        return ProfessorInfo.find();
    },
    getCourses: function () {
        return CourseInfo.find();
    },
    getSections: function () {
        return SectionInfo.find();
    }
});
Template.showSections.helpers({
    getSections: function () {
        return SectionInfo.find();
    },
    getProfessor: function (id) {
        professor = ProfessorInfo.findOne(id);
        return professor.professorname;
    },
    getCourse: function (id) {
        course = CourseInfo.findOne(id);
        return course.coursename;
    }
});
