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
        description: 'Highly skilled, can optimize code for performance and solve challenging problems independently.',
        imageUrl: 'assets/techIcons/html.svg',
        stars: 4,
      },
      {
        category: 'Frontend',
        name: 'CSS',
        description: `Proficient in core language features.`,
        imageUrl: 'assets/techIcons/css.svg',
        stars: 3,
      },
      {
        category: 'Frontend',
        name: 'JavaScript',
        description: `Proficient in core language features.`,
        imageUrl: 'assets/techIcons/javascript.svg',
        stars: 4,
      },
      {
        category: 'Frontend',
        name: 'React',
        description: `Proficient in core language features.`,
        imageUrl: 'assets/techIcons/react.svg',
        stars: 3,
      },
      {
        category: 'Frontend',
        name: 'Angular',
        description: `This is my first go at a project with Angular. I've got the basics down, but I'm still working on getting into the details.`,
        imageUrl: 'assets/techIcons/angular.svg',
        stars: 2,
      },
      {
        category: 'Frontend',
        name: 'Svelte',
        description: `I had the opportunity to develop two applications using Svelte. While I thoroughly enjoyed the experience, it's worth noting that I may have forgotten certain aspects of it over time.`,
        imageUrl: 'assets/techIcons/svelte.svg',
        stars: 2,
      },
      {
        category: 'Frontend',
        name: 'TypeScript',
        description: `
        I acquired knowledge of TypeScript alongside React, and ever since, I have been actively incorporating it into my projects whenever the opportunity arises.`,
        imageUrl: 'assets/techIcons/typescript.svg',
        stars: 4,
      },
      {
        category: 'Frontend',
        name: 'React Native',
        description: `I familiarized myself with React Native two years ago, and I put it to practical use during the course of my graduation project in 2022.`,
        imageUrl: 'assets/techIcons/react-native.svg',
        stars: 2,
      },
      {
        category: 'Frontend',
        name: 'Tailwind',
        description: '',
        imageUrl: 'assets/techIcons/tailwind.svg',
        stars: 4,
      },
      {
        category: 'Backend',
        name: 'Java',
        description: '',
        imageUrl: 'assets/techIcons/java.svg',
        stars: 3,
      },
      {
        category: 'Backend',
        name: 'C#',
        description: '',
        imageUrl: 'assets/techIcons/c--.svg',
        stars: 3,
      },
      {
        category: 'Backend',
        name: 'Node JS',
        description: '',
        imageUrl: 'assets/techIcons/nodejs.svg',
        stars: 2,
      },
      {
        category: 'Backend',
        name: 'Spring Boot',
        description: '',
        imageUrl: 'assets/techIcons/spring.svg',
        stars: 3,
      },
      {
        category: 'Backend',
        name: 'ASP .Net Core',
        description: '',
        imageUrl: 'assets/techIcons/dot-net-core.svg',
        stars: 3,
      },
      {
        category: 'Backend',
        name: 'MySQL',
        description: '',
        imageUrl: 'assets/techIcons/mysql.svg',
        stars: 4,
      },
      {
        category: 'Backend',
        name: 'SQL Server',
        description: '',
        imageUrl: 'assets/techIcons/microsoft-sql-server.svg',
        stars: 4,
      },
      {
        category: 'Backend',
        name: 'MongoDB',
        description: '',
        imageUrl: 'assets/techIcons/mongo-db.svg',
        stars: 3,
      },
      {
        category: 'Backend',
        name: 'PostgreSQL',
        description: '',
        imageUrl: 'assets/techIcons/postgresql.svg',
        stars: 2,
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
        stars: 3,
      },
      {
        category: 'DevOps and others',
        name: 'AWS',
        description: '',
        imageUrl: 'assets/techIcons/aws.svg',
        stars: 1,
      },
      {
        category: 'DevOps and others',
        name: 'Jenkins',
        description: '',
        imageUrl: 'assets/techIcons/jenkins.svg',
        stars: 1,
      },
      {
        category: 'DevOps and others',
        name: 'Docker',
        description: '',
        imageUrl: 'assets/techIcons/docker.svg',
        stars: 1,
      },
      {
        category: 'DevOps and others',
        name: 'Git',
        description: '',
        imageUrl: 'assets/techIcons/git-icon.svg',
        stars: 3,
      },
      {
        category: 'DevOps and others',
        name: 'Google cloud',
        description: '',
        imageUrl: 'assets/techIcons/google-cloud.svg',
        stars: 2,
      },
      {
        category: 'DevOps and others',
        name: 'Azure pipelines',
        description: '',
        imageUrl: 'assets/techIcons/azure.svg',
        stars: 2,
      },
      {
        category: 'DevOps and others',
        name: 'Postman',
        description: '',
        imageUrl: 'assets/techIcons/postman.svg',
        stars: 3,
      },
    ];
  }

  getProject(): Project[] {
    return [
      {
        name: 'Flight Manager',
        description: 'My first major project for my "IT career" education exam involved using C# and ASP .NET Authentication to create a flight management system. Users could book flights and receive email confirmations, while admin users could cancel flights, triggering notifications to ticket holders about the cancellations.',
        link: 'https://github.com/solvemate2018/Flight-Manager',
        techUsed: ["assets/techIcons/html.svg", "assets/techIcons/c--.svg", "assets/techIcons/dot-net-core.svg", "assets/techIcons/microsoft-sql-server.svg"],
      },
      {
        name: 'Cinema XX',
        description: `This was my first substantial project during my university years. It was a collaborative effort and you can find individual contributions outlined in the project's readme file. The project's primary focus was on creating a Cinema Management System, where we harnessed the IMDB API to collect movie information.`,
        link: 'https://github.com/solvemate2018/CInema-XX',
        techUsed: ["assets/techIcons/html.svg", "assets/techIcons/javascript.svg", "assets/techIcons/java.svg", "assets/techIcons/spring.svg", "assets/techIcons/mysql.svg"],
      },
      {
        name: 'Corona Portal',
        description: `This was a straightforward project aimed at facilitating COVID vaccination and testing appointments. I collaborated with classmates on this project, and specific contributions weren't outlined. However, by exploring the commit history, you can see my involvement in coding the project's overall architecture.`,
        link: 'https://github.com/solvemate2018/coronaportal',
        techUsed: ["assets/techIcons/html.svg", "assets/techIcons/java.svg", "assets/techIcons/spring.svg", "assets/techIcons/mysql.svg"],
      },
      {
        name: 'PD Architecture',
        description: `The project involves creating a straightforward, single-page website for PD Design Concept company. The website will feature a basic showcase of the company's projects, introduce their team, and include a contact form for visitors to get in touch.`,
        link: 'https://solvemate2018.github.io/architecture/',
        techUsed: ["assets/techIcons/html.svg", "assets/techIcons/css.svg", "assets/techIcons/javascript.svg", "assets/techIcons/tailwind.svg", "assets/techIcons/react.svg"],
      },
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        author: 'Facundo Nadaf',
        company: 'Make Impact',
        content: "Georgi demonstrated exceptional skills in styling the app and problem solving with React during our time together. Georgi impressed me when we first met, and his understanding of Frontend grew over the course of our collaboration. I'm impressed by more than just his technical abilities. It was also a pleasure to work with Georgi because of his positive attitude and willingness to assist. As a coworker, I enjoyed working with Georgi because he is always willing to help.",
        role: 'Web Developer',
        imgUrl: 'assets/Facundo Nadaf.jpeg',
      },
      {
        author: 'Varan Pathmanathan',
        company: 'Make Impact',
        content: `Georgi, under my supervision for 6 months, excelled in Software Development. His quick learning, skill enhancement, and positive attitude impressed me. He showcased strong communication and leadership skills. Georgi is an asset to any software company, consistently adding value and evolving into a high-value resource.`,
        role: 'CEO',
        imgUrl: 'assets/Varan Pathmanathan.jpeg',
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
