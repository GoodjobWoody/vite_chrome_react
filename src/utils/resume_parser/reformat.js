const reformat = (orginalReumse) =>{

    let reformatResume = {};
    const profile = orginalReumse.profile;
    const educationsOriginal = orginalReumse.educations;
    const workExperincesOriginal = orginalReumse.workExperiences;
    const projectsOriginal = orginalReumse.projects;

    reformatResume.name = profile.name;


    let contact = {};
    contact.phone = profile.phone;
    contact.email = profile.email;
    contact.location = profile.location;
    contact.linkedin = profile.url;

    reformatResume.contact = contact;

    const highlights = ["hightLight One", "hightLight Two", "hightLight Three"];

    reformatResume.highlights = highlights;

    let workExperienceReformat = [];

    console.log(workExperincesOriginal);

    for (const workExperince of workExperincesOriginal) {
        const singleWorkExperience = {};
        singleWorkExperience.company = workExperince.company;
        singleWorkExperience.position = workExperince.jobTitle;
        singleWorkExperience.location = workExperince.location ?? "";
        singleWorkExperience.startDate = workExperince.date ?? "";

        singleWorkExperience.responsibilities = workExperince.descriptions ?? [];

        workExperienceReformat.push(singleWorkExperience);

    }

    reformatResume.workExperience = workExperienceReformat;

    let projectExperience = [];

    for (const project of projectsOriginal) {
        const singleProject = {};
        singleProject.company = project.project ?? "";
        singleProject.position = project.jobTitle ?? "" ;
        singleProject.location = project.location ?? "";
        singleProject.startDate = project.date ?? "";

        singleProject.responsibilities = project.descriptions ?? [];

        projectExperience.push(singleProject);

    }

    reformatResume.projectExperience = projectExperience;

    let education = [];
    
    for (const educationOriginal of educationsOriginal) {
        const singleEducation = {};
        singleEducation.university = educationOriginal.school;
        singleEducation.location = educationOriginal.location ?? "";
        singleEducation.degree = educationOriginal.degree;
        singleEducation.startDate = educationOriginal.date;
        singleEducation.endDate = educationOriginal.endDate ?? "";
        singleEducation.gpa = educationOriginal.gpa ?? "";

        education.push(singleEducation);
    }

    reformatResume.education = education;

    reformatResume.referencesAvailable = true;


    return reformatResume;


};



export {reformat};