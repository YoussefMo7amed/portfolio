// Example usage (You can call these functions in the console or trigger them via buttons)
// addSkill('React');
// removeSkill('C++');
// updateSkill('JavaScript', 'TypeScript');

// Data: List of projects
let projectsData = [
    {
        name: "PROMs Web Application",
        description:
            "PROMs is a patient recovery outcome measurement program that allows doctors to track patient recovery using graphs. I was responsible for the backend development and project infrastructure.",
        link: "https://proms.flexiheart.co/",
    },
    {
        name: "Sahih Application",
        description:
            "Sahih is a medical app that provides heart care services. I was responsible for the backend development and project infrastructure.",
        link: "https://play.google.com/store/apps/developer?id=FlexiHeart&hl=vn",
    },
    {
        name: "Arabic Services",
        description:
            "Developed the core functionality of an NPM package for Arabic language text processing, which has over 1.3k downloads. Collaborated on building an interactive website to showcase the package’s capabilities and features, visited nearly 400K times ",
        technologies: ["JavaScript", "TypeScript", "Python"],
        link: "https://seen-arabic.github.io/Arabic-Services/",
    },
    {
        name: " Udacity Data Engineer Nanodegree Capstone Project",
        description:
            "Built a scalable data pipeline using AWS services, including S3 and Redshift. Implemented ETL processes using Python, PySpark, and SQL to ensure high data quality and reliability.",
        technologies: ["Python", "SQL", "PySpark", "AWS", "Jupyter Notebook"],
        link: "https://github.com/YoussefMo7amed/Udacity-data-engineer-nanodegree-with-AWS-capstone-project/",
    },
    {
        name: "Graduation Project: Climate Change Analysis and Forecasting",
        description:
            "Analyzed historical temperature trends, forecasting future increases using time series models. Worked with datasets dating back to 1883 AD, revealing a steady rise in global temperatures linked to the emissions of CO2 .",
        technologies: [
            "Python",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Prophet",
            "Statsmodels",
        ],
    },
    {
        name: "Designing a Social Media Analytics Platform",
        description:
            "Designed a robust data engineering pipeline to ETL data from a JSON file into a PostgreSQL data warehouse using PySpark, Apache Airflow, and dbt. Improved pipeline speed significantly by implementing caching and pagination, reducing overall processing time and enhancing data flow efficiency.",
        technologies: [
            "Python",
            "Jupyter Notebook",
            "pyspark",
            "PostgreSQL",
            "Airflow",
            "dbt",
        ],
    },
    {
        name: "Portfolio Website",
        description:
            "A personal portfolio to showcase my skills, projects, and experience.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://youssefmo7amed.github.io/portfolio",
    },
];

// Function to render projects
function renderProjects() {
    const projectsList = document.getElementById("projects-list");
    projectsList.innerHTML = ""; // Clear any previous projects

    projectsData.forEach((project) => {
        // Create a project item div
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-item");

        // Create the project title
        const projectTitle = document.createElement("h3");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.name ?? "";

        // Create the project description
        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = project.description ?? "";

        // Create the technology list
        const techUsed = document.createElement("p");
        techUsed.classList.add("tech-used");
        techUsed.textContent = project.technologies
            ? `Technologies: ${project.technologies.join(", ")}`
            : "";

        // Create the project link
        const projectLink = document.createElement("a");
        projectLink.classList.add("project-link");
        projectLink.href = project.link ?? "";
        projectLink.target = "_blank";
        projectLink.textContent = "View Project";

        // Append all elements to the project div
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(techUsed);
        projectDiv.appendChild(projectLink);

        // Append the project div to the list
        projectsList.appendChild(projectDiv);
    });
}

// Call the function to render projects initially
renderProjects();

// Example functions to add, remove, and modify projects
function addProject(newProject) {
    projectsData.push(newProject);
    renderProjects(); // Re-render the updated project list
}

function removeProject(projectName) {
    projectsData = projectsData.filter(
        (project) => project.name !== projectName
    );
    renderProjects(); // Re-render the updated project list
}

function updateProject(oldName, updatedProject) {
    const projectIndex = projectsData.findIndex(
        (project) => project.name === oldName
    );
    if (projectIndex !== -1) {
        projectsData[projectIndex] = updatedProject;
        renderProjects(); // Re-render the updated project list
    }
}
