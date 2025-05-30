const newFooter = document.createElement('footer');
newFooter.className = "Footer";
newFooter.innerHTML = " ";
document.body.append(newFooter);

var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');

var copyright = document.createElement("p");
copyright.innerHTML =
    `Olivia ${thisYear}`
footer.appendChild(copyright);

var skills = ["JavaScript", "HTML", "CSS", "Google Software", "Macs", "Video Editing", "Social Media management", "Independent Research"];
var skillsSection = document.querySelector('#Skills');
var skillsList = document.createElement('ul');

for (var i = 0; i < skills.length; i++){
    var skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
skillsSection.appendChild(skillsList);
