// Data: List of certificates
let certificatesData = [
	{
		name: "AWS Academy Graduate - AWS Academy Cloud Architecting",
		issuer: "Amazon Web Services Training and Certification",
		dates: "September 2024",
		description:
			"A comprehensive overview of cloud computing, security, architecture, pricing, and support, with hands-on experience using AWS services.",
		link: "https://www.credly.com/badges/06d2d8fc-06a1-4a73-8aad-c39f2d2659f1",
	},
	{
		name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
		issuer: "Amazon Web Services Training and Certification",
		dates: "August 2024",
		description:
			"An introduction to cloud computing, security, architecture, pricing, and support, with hands-on experience using AWS services.",
		link: "https://www.credly.com/badges/9eb0a106-d672-4dba-b64e-06fbf17f03d4",
	},
	{
		name: "Data Engineering with AWS",
		issuer: "Udacity",
		dates: "April 2023",
		description:
			"This Nanodegree program by Udacity covers the concepts and skills needed to be successful as a data engineer, including designing and implementing data pipelines, architecting data warehouses, and working with data processing frameworks like Apache Spark.",
		link: "https://www.udacity.com/certificate/3SWGNAF7",
	},
	{
		name: "Google Cloud Big Data and Machine Learning Fundamentals",
		issuer: "Coursera by Google Cloud Training",
		dates: "April 2022",
		description:
			"This certificate is awarded by Google Cloud Training for completing the Google Cloud Big Data and Machine Learning Fundamentals course on Coursera. The course covers the fundamentals of big data and machine learning on Google Cloud Platform, including data processing, storage, and querying, as well as the use of machine learning APIs and AutoML.",
		link: "https://coursera.org/share/7823fac35479966f10bc25e592ffa259",
	},
];

// Function to render certificates
function renderCertifications() {
    const certificatesList = document.getElementById("certificates-list");
    certificatesList.innerHTML = ""; // Clear any previous entries

    certificatesData.forEach((certificate) => {
        const certificateDiv = document.createElement("div");
        certificateDiv.classList.add("certificate-item");

        const name = document.createElement("h3");
        name.textContent = certificate.name;

        const issuer = document.createElement("p");
        issuer.classList.add("issuer");
        issuer.textContent = certificate.issuer;

        const dates = document.createElement("p");
        dates.classList.add("dates");
        dates.textContent = certificate.dates;

        const description = document.createElement("p");
        description.textContent = certificate.description;

        const link = document.createElement("a");
        link.classList.add("certificate-link");
        link.href = certificate.link;
        link.target = "_blank";
        link.textContent = "View Certificate";

        certificateDiv.appendChild(name);
        certificateDiv.appendChild(issuer);
        certificateDiv.appendChild(dates);
        certificateDiv.appendChild(description);
        certificateDiv.appendChild(link);

        certificatesList.appendChild(certificateDiv);
    });
}

// Call the function to render certificates initially
renderCertifications();
