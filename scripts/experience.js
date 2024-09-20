// Example usage (You can call these functions in the console or trigger them via buttons)
// addProject({ name: 'New Project', description: 'Description...', technologies: ['Tech1', 'Tech2'], link: 'https://example.com' });
// removeProject('Gold Price Tracker');
// updateProject('Portfolio Website', { name: 'Updated Portfolio', description: 'Updated description...', technologies: ['NewTech1', 'NewTech2'], link: 'https://new-link.com' });

// Data: List of experience entries
let experienceData = [
    {
        jobTitle: "Software Engineer",
        companyName: "FlexiHeart",
        companyLink: "https://flexi-heart.com/",
        dates: "Jan 2024 - Present",
        description:
            "Developed backend services and projects using Node.js and MongoDB, and worked on creating REST APIs and managing cloud infrastructure to ensure scalability and performance.",
    },
    {
        jobTitle: "Co-Founder and Software Engineer",
        companyName: "Seen - س",
        companyLink: "https://seen-arabic.github.io/",
        dates: "May 2021 - Present",
        description:
            "Built free open source projects, focusing on helping the Arabic community.",
    },
];

// Function to render experience entries
function renderExperience() {
    const experienceList = document.getElementById("experience-list");
    experienceList.innerHTML = ""; // Clear any previous entries

    experienceData.forEach((experience) => {
        // Create an experience item div
        const experienceDiv = document.createElement("div");
        experienceDiv.classList.add("experience-item");

        // Create the job title
        const jobTitle = document.createElement("h3");
        jobTitle.textContent = experience.jobTitle;

        // Create the company name
        const companyName = document.createElement("a");
        companyName.classList.add("company-name");
        companyName.href = experience.companyLink;
        companyName.textContent = experience.companyName;

        // Create the dates
        const experienceDates = document.createElement("p");
        experienceDates.classList.add("experience-dates");
        experienceDates.textContent = experience.dates;

        // Create the job description
        const description = document.createElement("p");
        description.textContent = experience.description;

        // Append all elements to the experience div
        experienceDiv.appendChild(jobTitle);
        experienceDiv.appendChild(companyName);
        experienceDiv.appendChild(experienceDates);
        experienceDiv.appendChild(description);

        // Append the experience div to the list
        experienceList.appendChild(experienceDiv);
    });
}

// Call the function to render experience initially
renderExperience();

// Example functions to add, remove, and modify experience entries
function addExperience(newExperience) {
    experienceData.push(newExperience);
    renderExperience(); // Re-render the updated experience list
}

function removeExperience(jobTitle) {
    experienceData = experienceData.filter((exp) => exp.jobTitle !== jobTitle);
    renderExperience(); // Re-render the updated experience list
}

function updateExperience(oldTitle, updatedExperience) {
    const experienceIndex = experienceData.findIndex(
        (exp) => exp.jobTitle === oldTitle
    );
    if (experienceIndex !== -1) {
        experienceData[experienceIndex] = updatedExperience;
        renderExperience(); // Re-render the updated experience list
    }
}
