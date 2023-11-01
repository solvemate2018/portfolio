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
        imageUrl: 'assets/techIcons/html.svg',
      },
      {
        category: 'Frontend',
        name: 'CSS',
        description: `I've been dabbling in CSS for more than eight years now, and I've got a solid grasp of all the basics.`,
        imageUrl: 'assets/techIcons/css.svg',
      },
      {
        category: 'Frontend',
        name: 'JavaScript',
        description: `I acquired proficiency in pure JavaScript three years ago, and since then, I've been actively engaging with various JavaScript frameworks on a daily basis.`,
        imageUrl: 'assets/techIcons/javascript.svg',
      },
      {
        category: 'Frontend',
        name: 'React',
        description: `I gained expertise in React during one of my internship experiences two years ago, and I have since become proficient in utilizing this framework.`,
        imageUrl: 'assets/techIcons/react.svg',
      },
      {
        category: 'Frontend',
        name: 'Angular',
        description: `This is my first go at a project with Angular. I've got the basics down, but I'm still working on getting into the details.`,
        imageUrl: 'assets/techIcons/angular.svg',
      },
      {
        category: 'Frontend',
        name: 'Svelte',
        description: `I had the opportunity to develop two applications using Svelte. While I thoroughly enjoyed the experience, it's worth noting that I may have forgotten certain aspects of it over time.`,
        imageUrl: 'assets/techIcons/svelte.svg',
      },
      {
        category: 'Frontend',
        name: 'TypeScript',
        description: `
        I acquired knowledge of TypeScript alongside React, and ever since, I have been actively incorporating it into my projects whenever the opportunity arises.`,
        imageUrl: 'assets/techIcons/typescript.svg',
      },
      {
        category: 'Frontend',
        name: 'React Native',
        description: `I familiarized myself with React Native two years ago, and I put it to practical use during the course of my graduation project in 2022.`,
        imageUrl: 'assets/techIcons/react-native.svg',
      },
      {
        category: 'Frontend',
        name: 'Tailwind',
        description: '',
        imageUrl: 'assets/techIcons/tailwind.svg',
      },
      {
        category: 'Backend',
        name: 'Java',
        description: '',
        imageUrl: 'assets/techIcons/java.svg',
      },
      {
        category: 'Backend',
        name: 'C#',
        description: '',
        imageUrl: 'assets/techIcons/c--.svg',
      },
      {
        category: 'Backend',
        name: 'Node JS',
        description: '',
        imageUrl: 'assets/techIcons/nodejs.svg',
      },
      {
        category: 'Backend',
        name: 'Spring Boot',
        description: '',
        imageUrl: 'assets/techIcons/spring.svg',
      },
      {
        category: 'Backend',
        name: 'ASP .Net Core',
        description: '',
        imageUrl: 'assets/techIcons/dot-net-core.svg',
      },
      {
        category: 'Backend',
        name: 'MySQL',
        description: '',
        imageUrl: 'assets/techIcons/mysql.svg',
      },
      {
        category: 'Backend',
        name: 'SQL Server',
        description: '',
        imageUrl: 'assets/techIcons/microsoft-sql-server.svg',
      },
      {
        category: 'Backend',
        name: 'MongoDB',
        description: '',
        imageUrl: 'assets/techIcons/mongo-db.svg',
      },
      {
        category: 'Backend',
        name: 'PostgreSQL',
        description: '',
        imageUrl: 'assets/techIcons/postgresql.svg',
      },
      // {
      //   category: 'Backend',
      //   name: 'Machine Learning',
      //   description: '',
      //   imageUrl: 'assets/techIcons/',
      // },
      {
        category: 'DevOps and others',
        name: 'FireBase',
        description: '',
        imageUrl: 'assets/techIcons/firebase.svg',
      },
      {
        category: 'DevOps and others',
        name: 'AWS (VM hosting)',
        description: '',
        imageUrl: 'assets/techIcons/aws.svg',
      },
      {
        category: 'DevOps and others',
        name: 'Jenkins',
        description: '',
        imageUrl: 'assets/techIcons/jenkins.svg',
      },
      {
        category: 'DevOps and others',
        name: 'Docker',
        description: '',
        imageUrl: 'assets/techIcons/docker.svg',
      },
      {
        category: 'DevOps and others',
        name: 'Git',
        description: '',
        imageUrl: 'assets/techIcons/git-icon.svg',
      },
      {
        category: 'DevOps and others',
        name: 'Google cloud',
        description: '',
        imageUrl: 'assets/techIcons/google-cloud.svg',
      },
      {
        category: 'DevOps and others',
        name: 'Azure pipelines',
        description: '',
        imageUrl: 'assets/techIcons/azure.svg',
      },
      {
        category: 'DevOps and others',
        name: 'Postman',
        description: '',
        imageUrl: 'assets/techIcons/postman.svg',
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
        icon: "assets/socialIcons/envelope.svg",
      },
      {
        link: "https://www.facebook.com/profile.php?id=100005329482768",
        icon: "assets/socialIcons/facebook.svg",
      },
      {
        link: "https://www.instagram.com/georgii_dim/",
        icon: "assets/socialIcons/instagram.svg",
      },
      {
        link: "https://www.linkedin.com/in/georgi-dim/",
        icon: "assets/socialIcons/linkedin.svg",
      },
      {
        link: "https://github.com/solvemate2018",
        icon: "assets/socialIcons/github.svg",
      }
    ];
  }
}
