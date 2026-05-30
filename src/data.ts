import { Profile } from './types';

export const PROFILE_DATA: Profile = {
  name: "Vivek",
  role: "Full-Stack Developer",
  skills: [
    // Backend
    { name: "Java", icon: "☕", level: "Expert", category: "Backend" },
    { name: "Spring Boot", icon: "🍃", level: "Expert", category: "Backend" },
    { name: "Spring MVC", icon: "🌐", level: "Expert", category: "Backend" },
    { name: "Spring Data JPA / JPA", icon: "💾", level: "Expert", category: "Backend" },
    { name: "Hibernate", icon: "❄️", level: "Expert", category: "Backend" },
    { name: "REST APIs", icon: "🔌", level: "Expert", category: "Backend" },
    { name: "Microservices", icon: "🧩", level: "Advanced", category: "Backend" },

    // Security
    { name: "Spring Security", icon: "🛡️", level: "Advanced", category: "Security" },
    { name: "JWT", icon: "🔑", level: "Advanced", category: "Security" },
    { name: "OAuth2", icon: "🔐", level: "Familiar", category: "Security" },

    // Messaging & Event Streaming
    { name: "Apache Kafka", icon: "🏎️", level: "Advanced", category: "Messaging & Event Streaming" },

    // Databases
    { name: "MongoDB", icon: "🍃", level: "Expert", category: "Databases" },
    { name: "MySQL", icon: "🐬", level: "Expert", category: "Databases" },
    { name: "SQL", icon: "📁", level: "Expert", category: "Databases" },

    // Cloud & DevOps
    { name: "AWS (EC2, S3, IAM, VPC)", icon: "☁️", level: "Advanced", category: "Cloud & DevOps" },
    { name: "AWS CloudFormation, Terraform, Ansible", icon: "🛠️", level: "Familiar", category: "Cloud & DevOps" },
    { name: "Docker", icon: "🐋", level: "Advanced", category: "Cloud & DevOps" },
    { name: "Kubernetes", icon: "☸️", level: "Familiar", category: "Cloud & DevOps" },
    { name: "Jenkins", icon: "👷", level: "Familiar", category: "Cloud & DevOps" },
    { name: "CI/CD", icon: "🔄", level: "Advanced", category: "Cloud & DevOps" },

    // Tools
    { name: "Git", icon: "🌿", level: "Expert", category: "Tools" },
    { name: "GitHub", icon: "🐙", level: "Expert", category: "Tools" },
    { name: "Maven", icon: "📦", level: "Expert", category: "Tools" },
    { name: "Postman", icon: "🚀", level: "Expert", category: "Tools" },
    { name: "Swagger", icon: "📖", level: "Expert", category: "Tools" },
    { name: "Linux", icon: "🐧", level: "Expert", category: "Tools" },

    // Frontend
    { name: "JavaScript", icon: "💛", level: "Advanced", category: "Frontend" },
    { name: "React", icon: "⚛️", level: "Familiar", category: "Frontend" },
    { name: "Tailwind CSS", icon: "🎨", level: "Familiar", category: "Frontend" },
    { name: "HTML5 / CSS3", icon: "📄", level: "Familiar", category: "Frontend" },

    // Architecture
    { name: "Microservices Architecture", icon: "🏢", level: "Advanced", category: "Architecture" },
    { name: "Event-Driven Architecture", icon: "⚡", level: "Advanced", category: "Architecture" },
    { name: "API Design", icon: "✏️", level: "Expert", category: "Architecture" },
    { name: "Distributed Systems", icon: "🕸️", level: "Advanced", category: "Architecture" },
    { name: "System Integration", icon: "🔗", level: "Advanced", category: "Architecture" }
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      type: "MICROSERVICES ARCHITECTURE",
      desc: "Scalable e-commerce backend built with Spring Boot and cloud-native deployment.",
      detailedDesc: "Scalable e-commerce backend built using Spring Boot microservices with secure APIs, service discovery, centralized configuration, and containerized deployment.",
      highlights: [
        "Product Service",
        "Order Service",
        "User Service",
        "API Gateway",
        "Service Registry",
        "JWT Authentication"
      ],
      tags: ["Java", "Spring Boot", "Microservices", "Kafka", "MySQL", "Docker", "AWS"],
      metrics: ["3 Services", "5 REST APIs", "JWT Security", "Dockerized"],
      githubUrl: "https://github.com/vivekanandadash/ShopCore",
      problemStatement: "Traditional monolithic commerce applications suffer from tight coupling, making independent scaling and updates high-risk, slow, and prone to single point of failures as traffic spikes.",
      architectureDiagram: `                  ┌─────────────────────────┐
                  │         Client          │
                  └────────────┬────────────┘
                               │
                               ▼
                  ┌─────────────────────────┐
                  │       API Gateway       │
                  │  Auth·Rate limit·Route  │
                  └────────────┬────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  User Service   │   │ Product Service │   │  Order Service  │
│  Auth·Profiles  │   │Catalog·Inventory│   │Cart·Check·Paym. │
└────────┬────────┘   └────────┬────────┘   └────────┬────────┘
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               ▼
                  ┌─────────────────────────┐
                  │          Kafka          │
                  │  Event Stream·Msg Queue │
                  └────────────┬────────────┘
                               │
                               ▼
                          [Data Stores]
                               │
         ┌─────────────────────┴─────────────────────┐
         ▼                                           ▼
┌─────────────────┐                         ┌─────────────────┐
│      MySQL      │                         │      Redis      │
│  Users·Prod·Ord │                         │Cache·Sess·Queues│
└─────────────────┘                         └─────────────────┘`,
      challengesSolved: "Implemented eventual consistency across Order and Product inventories using Apache Kafka partition messaging, drastically reducing database lock contention and ensuring high-throughput ordering during flash sales.",
      devopsSetup: "Docker multi-stage builds compiled with Maven, orchestrated using Kubernetes manifests with load-balancers, configured with GitHub Actions CI/CD to build and push images directly to Amazon ECR/ECS."
    },
    {
      name: "Hotel Review System",
      type: "MICROSERVICES ARCHITECTURE",
      desc: "Distributed review management platform allowing users to rate hotels and share feedback through independently deployable microservices.",
      detailedDesc: "Distributed review management platform allowing users to rate hotels and share feedback through independently deployable microservices.",
      highlights: [
        "User Service",
        "Hotel Service",
        "Rating Service",
        "Inter-Service Communication",
        "Centralized Config",
        "Service Discovery"
      ],
      tags: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Docker", "AWS"],
      metrics: ["Microservices", "Cloud Ready", "CI/CD Enabled", "Containerized"],
      githubUrl: "https://github.com/vivekananda-dash/hotel-review-microservices",
      problemStatement: "High-volume transactional hotel bookings produce erratic review streams. Rigid database schemas struggle to ingestion-rate bursty review scores, leading to page latency for other critical services.",
      architectureDiagram: `Client\n   |\nAPI Gateway\n   |\n------------------\n|       |        |\nUser   Hotel   Rating\nService Service Service`,
      challengesSolved: "Decoupled hotel details from raw user rating calculations. Built asynchronous review aggregation routines to update public hotel scorecaches, avoiding nested active joins on reading feeds.",
      devopsSetup: "Consolidated application logs using AWS CloudWatch, managed inter-service discovery via Eureka/Spring Cloud Gateway, and automated horizontal auto-scaling based on CPU utilization."
    },
    {
      name: "Blog Application",
      type: "MONOLITHIC APPLICATION",
      desc: "Backend-driven blogging platform supporting content publishing, authentication, and database-persisted authorization APIs with role-based checks.",
      detailedDesc: "Backend-driven blogging platform supporting content publishing, authentication, role-based authorization, and RESTful APIs.",
      highlights: [
        "User Management",
        "Authentication",
        "Role-Based Access",
        "CRUD Operations",
        "REST APIs"
      ],
      tags: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      metrics: ["REST APIs", "JWT Security", "Monolith", "Role-Based Auth"],
      githubUrl: "https://github.com/vivekananda-dash/blog-monolith",
      problemStatement: "Content creators needed a lightweight, secure posting board api that enforces rigid access control rules so contributors can only touch draft states while managers review and publish.",
      architectureDiagram: `       Client\n         |\n     Spring Boot (Monolithic Web Layer)\n         |\n    --------------------------\n    |        |               |\n  Auth  Post Controller  User Controller\n    \\        |               /\n     \\       |              /\n     Spring Security Core (JWT Filters)\n         | \n       MySQL Database`,
      challengesSolved: "Configured custom Spring Security filters with key validation chains, enabling stateless user role checking on post updates and avoiding database calls on authorized requests via stateful sessions.",
      devopsSetup: "Built on AWS EC2, automated deployment scripts with GitHub actions, used database migration tools to keep MySQL table states managed, and handled application monitoring via custom actuator endpoints."
    }
  ],
  contact: {
    github: "https://github.com/vivekanandadash",
    linkedin: "https://www.linkedin.com/in/vivekananda-dash/",
    email: "vivekanandadash245@gmail.com"
  }
};
