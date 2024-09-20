let educationData = [
    {
        degree: "Diploma in AWS Cloud ",
        institution:
            "AWS Academy sponsored by Digital Egypt Pioneers Initiative (DEPI)",
        dates: "April 2024 - October 2024",
        description:
            "Studied AWS Cloud Architecture courses through AWS Academy website, including:",
        courses: [
            "Cloud Foundations",
            "Cloud Architecting",
            "Cloud Security Foundations",
            "Lab Project - Cloud Security Builder",
            "Lab Project - Cloud Web Application Builder",
        ],
    },

    {
        degree: "Nanodegree in Data Engineering with AWS",
        institution: "Udacity",
        dates: "Oct 2022 - Apr 2023",
        description:
            "Learned to design, build, and operate data pipelines and architectures on AWS, including:",
        courses: [
            "SQL for data analysis",
            "Data Modeling",
            "Cloud Data Warehouses",
            "Spark and Data Lakes",
            "Automate Data Pipelines",
            "Capstone project",
        ],
    },

    {
        degree: "Bachelor of Science in Computer Science & Statistics",
        institution: "Faculty of Science - Alexandria University",
        dates: "2017 - 2022",
        description:
            "Overview: Studied computer science and statistics with a focus on software engineering and data structures, algorithms, and database management. Also, studied statistical inference, probability, linear algebra, and data analysis, and how to apply them to real-world problems.",
        courses: [
            "Software Engineering",
            "Data Structures",
            "Algorithms",
            "Database Management",
            "Artificial Intelligence",
            "Operating Systems",
            "Probability",
            "Linear Algebra",
            "Data Mining",
            "Data Analysis",
        ],
    },
];

// Function to render education entries
function renderEducation() {
    const educationList = document.getElementById("education-list");
    educationList.innerHTML = ""; // Clear any previous entries

    educationData.forEach((education) => {
        const educationDiv = document.createElement("div");
        educationDiv.classList.add("education-item");

        if (education.degree) {
            const degree = document.createElement("h3");
            degree.textContent = education.degree;
            educationDiv.appendChild(degree);
        }

        if (education.institution) {
            const institution = document.createElement("p");
            institution.classList.add("institution");
            institution.textContent = education.institution;
            educationDiv.appendChild(institution);
        }

        if (education.dates) {
            const dates = document.createElement("p");
            dates.classList.add("dates");
            dates.textContent = education.dates;
            educationDiv.appendChild(dates);
        }

        if (education.description) {
            const description = document.createElement("p");
            description.textContent = education.description;
            educationDiv.appendChild(description);
        }

        if (education.courses) {
            const coursesList = document.createElement("details");
            coursesList.classList.add("courses-list");
            const summary = document.createElement("summary");
            summary.textContent = "Relevant Coursework";
            coursesList.appendChild(summary);
            education.courses.forEach((course) => {
                const courseListItem = document.createElement("li");
                courseListItem.textContent = course;
                coursesList.appendChild(courseListItem);
            });
            educationDiv.appendChild(coursesList);
        }
        educationList.appendChild(educationDiv);
    });
}

// Call the function to render education initially
renderEducation();
