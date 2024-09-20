// Data: List of timeline events with photos
let timelineData = [
    {
        year: "2024",
        month: "February",
        title: "Started at FlexiHeart",
        description:
            "Joined as a Software Engineer and started working on backend development, and worked on creating REST APIs and managing cloud infrastructure.",
    },

    {
        year: "2023",
        month: "April",
        title: "Certified in Data Engineering with AWS by Udacity",
        description:
            "Against all odds, I've finished the Nanodegree program, while I was in military service! It was a challenging journey, but I'm proud of myself for pushing through and achieving my goal.",
        photos: ["./res/2023/udacity.jpg"],
    },
    {
        year: "2023",
        month: "December",
        title: "Completed The Military Service",
    },
    {
        year: "2022",
        month: "February",
        title: "Graduation Project Discussion",
        description:
            "Analyzed historical temperature trends, forecasting future increases using time series models. Based on research by Dr. Essam Heggy, titled 'Alarming coastal vulnerability of the deltaic and sandy beaches of North Africa'. Worked with datasets dating back to 1883 AD, revealing a steady rise in global temperatures and sea levels, which increases the vulnerability of coastal areas ..",
        photos: [
            "./res/2022/sea-level.jpg",
            "./res/2022/co2.jpg",
            "./res/2022/nile-delta.jpg",
        ],
    },
    {
        year: "2022",
        month: "April",
        title: "Google Cloud Big Data and Machine Learning Fundamentals",
        description: `
            Identify data-to-AI lifecycle on Google Cloud and major products of big data and machine learning.
            Design streaming pipelines with Dataflow and Pub/Sub.
            Identify different options to build machine learning solutions on Google Cloud.
            Describe a machine learning workflow and build a pipeline using AutoML.`,
        photos: ["./res/2022/coursera.jpg"],
    },
    {
        year: "2022",
        month: "October",
        title: "Military Service Enrollment",
    },
    {
        year: "2021",
        month: "March",
        title: "Participation in ACPC 2021 (Africa and Arab Collegiate Programming Championship)",
        description:
            "Our Team was invited to participate in ACPC 2021, and it was the 2nd team to participate in this championship from our faculty in 10 years",
        photos: ["./res/2021/acpc2020.jpg", "./res/2021/acpc2020-youssef.jpg"],
    },
    {
        year: "2021",
        month: "April",
        title: "Founder of AlexSciCPC (Faculty of Science - Alexandria University ICPC community) ",
        description:
            "After participating in ACPC 2020, I co-founded AlexSciCPC, a student organization focused on competitive programming. We also announced the closing of HackerRank AUFS season 4.",
        photos: [
            "./res/2021/alexsci-youssef.png",
            "./res/2021/alexsci-logo.png",
        ],
    },
    {
        year: "2021",
        month: "August",
        title: "Beginning Competitive Programming Coaching",
        description:
            "Coached ECPC Teams one of them qualified to ACPC 2021 in Luxor, Egypt.",
        photos: ["./res/2021/acpc2021.jpg"],
    },
    {
        year: "2020",
        month: "November",
        title: "Participation in ECPC 2020 (Egyptian Collegiate Programming Contest)",
        description:
            "In the qualifications phase, our team was the 1st of our faculty, and got 3 certificates of achievement (Extreme Programmers, First to solve problem G and Third Place of the whole qualification day).",
        photos: [
            "./res/2020/ecpc2020.jpg",
            "./res/2020/certificate-0.jpg",
            "./res/2020/certificate-1.jpg",
            "./res/2020/certificate-2.jpg",
        ],
    },
    {
        year: "2019",
        month: "October",
        title: "First participation in ECPC (Egyptian Collegiate Programming Contest) Qualification",
        description:
            "First Participation in ECPC, Ranked 11th out of 38 participants.",
        photos: [
            "./res/2019/ecpc-2019.jpg",
            "./res/2019/ecpc-2019-11th-place.jpg",
        ],
    },
    {
        year: "2019",
        month: "November",
        title: "HackerRank AUFS Instructor",
        description:
            "Instructed over 100 students in C++ and competitive programming as a HackerRank AUFS instructor at the Faculty of Science, Alexandria University.",
        photos: ["./res/2019/hackerrank-2019.jpg"],
    },
];

// Function to group events by year
function groupByYear(events) {
    return events.reduce((acc, event) => {
        if (!acc[event.year]) {
            acc[event.year] = [];
        }
        acc[event.year].push(event);
        return acc;
    }, {});
}

function handleImageSize(image) {
    const img = new Image();
    img.src = image.src;

    img.onload = function () {
        if (img.width > 200) {
            image.classList.add("large-image");
        } else {
            image.classList.add("small-image");
        }
    };
}

// Call this function when rendering images
function renderTimeline() {
    const timelineList = document.getElementById("timeline-list");
    timelineList.innerHTML = ""; // Clear any previous entries

    const groupedData = groupByYear(timelineData);

    Object.keys(groupedData).forEach((year) => {
        const yearDiv = document.createElement("div");
        yearDiv.classList.add("year-group");

        const yearTitle = document.createElement("h2");
        yearTitle.classList.add("year-title");
        yearTitle.textContent = year;

        yearDiv.appendChild(yearTitle);

        groupedData[year].forEach((event) => {
            const timelineDiv = document.createElement("div");
            timelineDiv.classList.add("timeline-item");

            const yearMonth = document.createElement("div");
            yearMonth.classList.add("year-month");
            yearMonth.textContent = `${event.month} ${event.year}`;

            const title = document.createElement("h3");
            title.classList.add("title");
            title.textContent = event.title;

            const description = document.createElement("p");
            description.classList.add("description");
            description.textContent = event.description;

            const photoContainer = document.createElement("div");
            photoContainer.classList.add("photo-container");

            photoContainer.classList.add("photo");

            if (event.photos) {
                event.photos.forEach((photoURL) => {
                    const img = document.createElement("img");
                    img.src = photoURL;
                    img.alt = `${event.title} photo`;
                    photoContainer.appendChild(img);

                    // Handle image size dynamically
                    handleImageSize(img);
                });
            }

            const photo = photoContainer;

            timelineDiv.appendChild(yearMonth);
            timelineDiv.appendChild(title);
            timelineDiv.appendChild(description);
            timelineDiv.appendChild(photo);

            yearDiv.appendChild(timelineDiv);
        });

        timelineList.appendChild(yearDiv);
    });
}

// Call the function to render timeline initially
renderTimeline();
