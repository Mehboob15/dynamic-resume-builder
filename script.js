function generateResume() {
    // Get form values
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Resume output
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <p><strong>${title}</strong></p>
        <p>Email: ${email} | Phone: ${phone}</p>

        <h3>Professional Summary</h3>
        <p>${summary}</p>

        <h3>Skills</h3>
        <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Education</h3>
        <p>${education}</p>
    `;
}
