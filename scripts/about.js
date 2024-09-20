// about.js
document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = {
        name: "Youssef Mohamed",
        profession: "Software Engineer | AWS Cloud Specialist",
        bio: "I'm a passionate software engineer with experience in Data Engineering, backend development, cloud computing, and web scraping. Currently honing my skills in AWS and database management while developing solutions for real-world problems. Let's build something amazing together!",
    };

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        const nameElement = aboutSection.querySelector("#name");
        const professionElement = aboutSection.querySelector("#profession");
        const bioElement = aboutSection.querySelector("#bio");

        if (nameElement) nameElement.textContent = aboutContent.name;
        if (professionElement)
            professionElement.textContent = aboutContent.profession;
        if (bioElement) bioElement.textContent = aboutContent.bio;
    }
});
