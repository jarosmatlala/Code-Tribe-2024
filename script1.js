


// Personal Information
const firstName = "Jaros";
const lastName = "Matlala";
const bio = " Motivated IT Systems Developer, Africa Code Week And AB4IR Kid Coder Facilitator +";
const education = "National Certificate : Systems Development NQF 5 : Tshwane South TVET (AB4IR)";
const contact = {
    email: "erica@example.com",
    phone: "123-456-7890",
    address: "1234 Elm Street, Hometown, Country"
};


// Projects
const projects = [
    {
        title: "Agri-Culture Website",
        description: "Batlhako Temo Services is a family co-operative based in South Africa ,North West Provience specializing on soft citrus and lemons.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://batlhakotemoservices.co.za/"
    },
    {
        title: "E-commerce Store",
        description: "An online store with a fully functional shopping cart and user authentication",
        technologies: ["Woo-Commerce . Word Press"],
        link: "https://venusbeauty.co.za/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Populate personal information
    document.getElementById('name').textContent = `${firstName} ${lastName}`;
    document.getElementById('bio').textContent = bio;
    document.getElementById('education').textContent = `Education: ${education}`;
    
    // Populate projects
    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
            <p><a href="${project.link}" target="_blank">View Project</a></p>
        `;
        projectsList.appendChild(listItem);
    });
});