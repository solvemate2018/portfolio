import { Injectable } from '@angular/core';
import { Project } from './interfaces/Project';
import { Route } from './interfaces/Route';
import { TechCard } from './interfaces/TechCard';
import { Testimonial } from './interfaces/Testimonial';
import { Social } from './interfaces/Social';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getRoutes(): Route[] {
    return [
      {
        id: 'about',
        name: 'About',
      },
      {
        id: 'projects',
        name: 'Projects',
      },
      {
        id: 'testimonials',
        name: 'Testimonials',
      },
      {
        id: 'footer',
        name: 'Contact',
      },
    ];
  }

  getTechCards(): TechCard[] {
    return [
      {
        category: 'Frontend',
        name: 'HTML',
        description: 'I have accumulated more than eight years of experience in practicing HTML intermittently, and I possess a comprehensive understanding of its fundamental principles.',
        imageUrl: 'cibHtml5',
      },
      {
        category: 'Frontend',
        name: 'CSS',
        description: `I've been dabbling in CSS for more than eight years now, and I've got a solid grasp of all the basics.`,
        imageUrl: 'cibCss3Shiled',
      },
      {
        category: 'Frontend',
        name: 'JavaScript',
        description: `I acquired proficiency in pure JavaScript three years ago, and since then, I've been actively engaging with various JavaScript frameworks on a daily basis.`,
        imageUrl: 'cibJavascript',
      },
      {
        category: 'Frontend',
        name: 'React',
        description: `I gained expertise in React during one of my internship experiences two years ago, and I have since become proficient in utilizing this framework.`,
        imageUrl: 'cibReact',
      },
      {
        category: 'Frontend',
        name: 'Angular',
        description: `This is my first go at a project with Angular. I've got the basics down, but I'm still working on getting into the details.`,
        imageUrl: 'cibAngular',
      },
      {
        category: 'Frontend',
        name: 'Svelte',
        description: `I had the opportunity to develop two applications using Svelte. While I thoroughly enjoyed the experience, it's worth noting that I may have forgotten certain aspects of it over time.`,
        imageUrl: 'cibSvelte',
      },
      {
        category: 'Frontend',
        name: 'TypeScript',
        description: `
        I acquired knowledge of TypeScript alongside React, and ever since, I have been actively incorporating it into my projects whenever the opportunity arises.`,
        imageUrl: 'cibTypescript',
      },
      {
        category: 'Frontend',
        name: 'React Native',
        description: `I familiarized myself with React Native two years ago, and I put it to practical use during the course of my graduation project in 2022.`,
        imageUrl: 'cibReact',
      },
      {
        category: 'Frontend',
        name: 'Tailwind',
        description: '',
        imageUrl: '',
      },
      {
        category: 'Backend',
        name: 'Java',
        description: '',
        imageUrl: 'cibJava',
      },
      {
        category: 'Backend',
        name: 'C#',
        description: '',
        imageUrl: '',
      },
      {
        category: 'Backend',
        name: 'Node JS',
        description: '',
        imageUrl: 'cibNodeJs',
      },
      {
        category: 'Backend',
        name: 'Spring Boot',
        description: '',
        imageUrl: 'cibSpring',
      },
      {
        category: 'Backend',
        name: 'ASP .Net Core',
        description: '',
        imageUrl: '',
      },
      {
        category: 'Backend',
        name: 'MySQL',
        description: '',
        imageUrl: 'cibMysql',
      },
      {
        category: 'Backend',
        name: 'SQL Server',
        description: '',
        imageUrl: '',
      },
      {
        category: 'Backend',
        name: 'MongoDB',
        description: '',
        imageUrl: '',
      },
      {
        category: 'Backend',
        name: 'PostgreSQL',
        description: '',
        imageUrl: 'cibPostgresql',
      },
      {
        category: 'Backend',
        name: 'Machine Learning',
        description: '',
        imageUrl: '',
      },
      {
        category: 'DevOps and others',
        name: 'FireBase',
        description: '',
        imageUrl: 'cibFirebase',
      },
      {
        category: 'DevOps and others',
        name: 'AWS (VM hosting)',
        description: '',
        imageUrl: '',
      },
      {
        category: 'DevOps and others',
        name: 'Jenkins',
        description: '',
        imageUrl: 'cibJenkins',
      },
      {
        category: 'DevOps and others',
        name: 'Docker',
        description: '',
        imageUrl: 'cibDocker',
      },
      {
        category: 'DevOps and others',
        name: 'Git',
        description: '',
        imageUrl: 'cibGit',
      },
      {
        category: 'DevOps and others',
        name: 'Google cloud',
        description: '',
        imageUrl: 'cibGoogleCloud',
      },
      {
        category: 'DevOps and others',
        name: 'Azure pipelines',
        description: '',
        imageUrl: 'cibAzurePipelines',
      },
      {
        category: 'DevOps and others',
        name: 'Postman',
        description: '',
        imageUrl: 'cibPostman',
      },
    ];
  }

  getProject(): Project[] {
    return [
      {
        name: 'Flight Manager',
        description: '',
        link: '',
      },
      {
        name: 'Cinema XX',
        description: '',
        link: '',
      },
      {
        name: 'Corona Portal',
        description: '',
        link: '',
      },
      {
        name: 'The Quests',
        description: '',
        link: '',
      },
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        author: 'Facundo Nadaf',
        company: 'Make Impact',
        content:
          "Georgi demonstrated exceptional skills in styling the app and problem solving with React during our time together. Georgi impressed me when we first met, and his understanding of Frontend grew over the course of our collaboration. \n \n I'm impressed by more than just his technical abilities. It was also a pleasure to work with Georgi because of his positive attitude and willingness to assist. As a coworker, I enjoyed working with Georgi because he is always willing to help.",
        role: 'Web Developer',
        imgUrl: '',
      },
      {
        author: 'Facundo Nadaf',
        company: 'Make Impact',
        content:
          "Georgi demonstrated exceptional skills in styling the app and problem solving with React during our time together. Georgi impressed me when we first met, and his understanding of Frontend grew over the course of our collaboration. \n \n I'm impressed by more than just his technical abilities. It was also a pleasure to work with Georgi because of his positive attitude and willingness to assist. As a coworker, I enjoyed working with Georgi because he is always willing to help.",
        role: 'Web Developer',
        imgUrl: '',
      },
      {
        author: 'Facundo Nadaf',
        company: 'Make Impact',
        content:
          "Georgi demonstrated exceptional skills in styling the app and problem solving with React during our time together. Georgi impressed me when we first met, and his understanding of Frontend grew over the course of our collaboration. \n \n   I'm impressed by more than just his technical abilities. It was also a pleasure to work with Georgi because of his positive attitude and willingness to assist. As a coworker, I enjoyed working with Georgi because he is always willing to help.",
        role: 'Web Developer',
        imgUrl: '',
      },
    ];
  }

  getSocials(): Social[] {
    return [
      {
        link: "mailto: georgi.dimitrov.1112@gmail.com",
        icon: "cilEnvelopeClosed",
      },
      {
        link: "https://www.facebook.com/profile.php?id=100005329482768",
        icon: "cibFacebook",
      },
      {
        link: "https://www.instagram.com/georgii_dim/",
        icon: "cibInstagram",
      },
      {
        link: "https://www.linkedin.com/in/georgi-dim/",
        icon: "cibLinkedin",
      },
      {
        link: "https://github.com/solvemate2018",
        icon: "cibGithub",
      }
    ];
  }
}
