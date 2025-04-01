
(async () => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSoftSkills(profileData)
  updateSkills(profileData)
  updateLanguages(profileData)
  updateProfessionalExperience(profileData)
  updateProjects(profileData)
})()

function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job
  job.href = profileData.linkedin

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const phone = document.getElementById('profile.phone')
  phone.href = `tel:+55${profileData.phone}`
  phone.innerText = profileData.phone

  const email = document.getElementById('profile.email')
  email.href = `mailto:${profileData.email}`
  email.innerText = profileData.email
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}

function updateSkills(profileData) {
  const skills = document.getElementById('profile.skills')
  skills.innerHTML = profileData.skills.hardSkills.map(hardSkills =>
    `<li>
        <img src="${hardSkills.logo}" alt="${hardSkills.name}" title="${hardSkills.name}">
     </li>
    `).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('languages')
  languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updateProfessionalExperience(profileData) {
  const nameExperience = document.getElementById('profile.professionalExperience')
  nameExperience.innerHTML = profileData.professionalExperience.map(experiences => { 
    return  `
      <li>
        <h3 class="title">${experiences.name}</h3>
        <p class="period">${experiences.period}</p>
        <p>${experiences.description}</p>
      </li>`}).join('')
}

function updateProjects(profileData) {
  const project = document.getElementById('profileProjects')
  project.innerHTML = profileData.portfolio.map(projects => {
    return `
          <li>
            <h3 ${projects.github ? 'class="github"' : ''}>${projects.name}</h3>
            <a href="${projects.repositorie}" target="_blank">Repositório GitHub</a>
            <a href="${projects.deploy}" target="_blank">Deploy</a>
          </li>`}).join('')
}