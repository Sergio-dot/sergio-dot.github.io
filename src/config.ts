export const siteConfig = {
  name: "Sergio Siclari",
  title: "Backend Developer | DevOps",
  description: "Portfolio of Sergio Siclari — Backend Developer and DevOps Engineer based in Milan",
  accentColor: "#1d4ed8",

  social: {
    email: "",
    github: "https://github.com/Sergio-dot",
    linkedin: "https://www.linkedin.com/in/sergio-s-60225b15b/",
  },

  aboutMe:
    "Backend developer and open-source enthusiast. When I'm not writing Go at work, I'm usually tinkering with my homelab. I enjoy automating things that shouldn't be manual, building tools that make life easier, and learning how systems work under the hood.",

  interests: [
    "Software Development",
    "Infrastructure as Code",
    "Containerized Workloads",
    "Automation",
    "Self-hosted Platforms",
  ],

  skills: [
    "Go",
    "Docker",
    "Kubernetes",
    "ArgoCD",
    "GitOps",
    "Ansible",
    "Linux",
    "CI/CD",
  ],

  projects: [
    {
      name: "Ansible Infrastructure Automation",
      description:
        "Automation playbooks used to provision and maintain services in my homelab environment, including container orchestration and configuration management.",
      link: "https://github.com/Sergio-dot/homelab-infra",
      skills: ["Ansible", "Infrastructure as Code"],
    },
  ],

  experience: [
    {
      company: "Wopta",
      title: "Backend Developer",
      dateRange: "Jan 2026 - Present",
      bullets: [
        "Developing backend services and APIs in Go for an insurtech MGA platform",
        "Designing and implementing microservices handling insurance product workflows",
        "Working with containerized deployments and cloud-native infrastructure",
      ],
    },
    {
      company: "Sky Italia (via Alten Italia / SSI Group)",
      title: "DevOps Engineer — Consultant",
      dateRange: "Nov 2023 - Dec 2025",
      bullets: [
        "Part of the DevOps operations team ensuring distribution platform stability and uptime",
        "Provided 24/7 on-call support, triaging incidents and driving resolution across services",
        "Supported releases and migrations to ensure minimal downtime and smooth rollouts",
        "Managed containerized workloads with Docker and Kubernetes across staging and production environments",
        "Built internal CLI tools in Go to automate repetitive operational tasks and reduce incident risks",
      ],
    },
  ],

  education: [],
};