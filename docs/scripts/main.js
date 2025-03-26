"use strict";
const projects = [
    {
        title: "Snapper",
        description: "A full-stack web app for sharing scuba photos. Coming soon to app stores!",
        tech: ["React", "Node.js", "PostgreSQL", "AWS"],
        github: "https://github.com/johndoe/snapper",
        image: "https://images.unsplash.com/photo-1682686581498-5e85c7228119?w=500"
    },
    {
        title: "Project 2",
        description: "Another awesome project showcasing my skills.",
        tech: ["TypeScript", "Next.js", "Tailwind"],
        github: "https://github.com/johndoe/project2",
        image: "https://images.unsplash.com/photo-1682686580024-f1746c4e06c4?w=500"
    }
];
const experiences = [
    {
        company: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        role: "Senior Software Engineer",
        period: "2020 - Present",
        description: "Led development of cloud-native applications and microservices architecture. Improved system performance by 40% through innovative optimization techniques."
    },
    {
        company: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        role: "Software Engineer",
        period: "2018 - 2020",
        description: "Developed and maintained enterprise-level React applications. Collaborated with cross-functional teams to deliver high-impact features."
    },
    {
        company: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        role: "Software Developer",
        period: "2016 - 2018",
        description: "Built scalable e-commerce solutions using Node.js and AWS. Implemented CI/CD pipelines reducing deployment time by 60%."
    }
];
const socials = [
    {
        name: "GitHub",
        url: "https://github.com/johndoe",
        icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>`
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>`
    }
];
function createProjectCard(project, index) {
    return `
    <div class="project-card animate-fadeIn" style="animation-delay: ${index * 200}ms">
      <div class="relative overflow-hidden">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tech.map(tech => `
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">${tech}</span>
          `).join('')}
        </div>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors">
          View on GitHub
          <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
    </div>
  `;
}
function createExperienceCard(exp, index) {
    return `
    <div class="experience-card animate-fadeIn" style="animation-delay: ${index * 200}ms">
      <div class="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary rounded-l-xl"></div>
      <div class="ml-2">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg p-2 shadow-md transition-transform duration-300">
              <img src="${exp.logo}" alt="${exp.company} logo" class="w-full h-full object-contain">
            </div>
            <div>
              <h3 class="text-xl font-bold">${exp.company}</h3>
              <p class="text-primary font-medium">${exp.role}</p>
            </div>
          </div>
          <div class="text-right">
            <span class="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
              ${exp.period}
            </span>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300 ml-20">${exp.description}</p>
      </div>
    </div>
  `;
}
function createSocialLink(social, index) {
    return `
    <a href="${social.url}" 
       target="_blank" 
       rel="noopener noreferrer"
       class="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors transform hover:scale-110 transition-transform duration-300 animate-fadeIn"
       style="animation-delay: ${index * 200}ms"
       aria-label="Visit ${social.name}">
      ${social.icon}
    </a>
  `;
}
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');
    const experienceGrid = document.getElementById('experience-grid');
    const socialLinks = document.getElementById('social-links');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map((project, index) => createProjectCard(project, index)).join('');
    }
    if (experienceGrid) {
        experienceGrid.innerHTML = experiences.map((exp, index) => createExperienceCard(exp, index)).join('');
    }
    if (socialLinks) {
        socialLinks.innerHTML = socials.map((social, index) => createSocialLink(social, index)).join('');
    }
});
