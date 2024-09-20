// Data: Categorized list of skills
let skillsData = [
    {
        category: "Programming Languages",
        skills: ["Python", "JavaScript", "SQL", "Java", "C++", "HTML & CSS"],
    },
    {
        category: "Backend Frameworks",
        skills: ["Node.js", "Express.js", "Nest.js", "FastAPI"],
    },
    {
        category: "Databases",
        skills: ["PostgreSQL", "MongoDB", "Cassandra", "Redis"],
    },
    {
        category: "Cloud Services in AWS",
        skills: [
            "EC2",
            "S3",
            "VPC",
            "RDS",
            "DynamoDB",
            "Amazon Aurora",
            "Lambda",
            "API Gateway",
        ],
    },
    {
        category: "Data Frameworks",
        skills: ["NumPy", "Pandas", "PySpark"],
    },
    {
        category: "Other Tools",
        skills: [
            "Linux",
            "Git",
            "GitHub",
            "Docker",
            "Apache Airflow",
            "Nginx",
            "VS Code",
            "AWS CLI",
            "Beautiful soup",
        ],
    },
    {
        category: "Topics",
        skills: [
            "Data structures",
            "Algorithms",
            "OOD",
            "Data engineering",
            "Design Patterns",
            "Software design",
            "Statistics",
            "Classic Machine learning",
        ],
    },
];

// Function to render categorized skills
function renderSkills() {
    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = ""; // Clear previous skills

    skillsData.forEach((categoryObj) => {
        // Create a category header
        const categoryHeader = document.createElement("h3");
        categoryHeader.classList.add("category-header");
        categoryHeader.textContent = categoryObj.category;

        // Append the category header
        skillsList.appendChild(categoryHeader);

        // Create a div to hold the skills for this category
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category-skills");

        // Create a div for each skill in the category
        categoryObj.skills.forEach((skill) => {
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill-item");
            skillDiv.textContent = skill;

            categoryDiv.appendChild(skillDiv); // Append each skill to its category
        });

        // Append the skills container to the main skills list
        skillsList.appendChild(categoryDiv);
    });
}

// Call the function to render skills initially
renderSkills();
