export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  services: string[];
  intro: string;
  challengeTitle: string;
  challenge: string[];
  deliveryTitle?: string;
  delivery?: string[];
  outcome: string[];
  schools?: string[];
  featuredLabel: string;
  stages?: Array<{
    title: string;
    image: string;
    imageAlt: string;
    description: string;
  }>;
};

export const projects: Project[] = [
  {
    slug: "197-stoddard-road",
    title: "197 Stoddard Road",
    location: "Wesley, Auckland",
    category: "Full-Service / All-in-One Project",
    featuredLabel: "Featured Full-Service Project",
    services: [
      "Asbestos Removal",
      "Demolition",
      "Earthworks",
      "Public Drainage",
      "Private Drainage & Plumbing",
      "All-in-One Site Works",
    ],
    intro:
      "197 Stoddard Road is a strong example of SLINE's wider delivery capability. SLINE was responsible for multiple connected stages of the redevelopment, including asbestos removal, demolition, earthworks, public drainage, private drainage and plumbing, and All-in-One site works. Bringing these scopes together allowed the project to move from early site clearance through to underground services and site preparation with greater continuity between stages.",
    challengeTitle: "Public drainage within the road corridor",
    challenge: [
      "A major challenge was the public stormwater and wastewater drainage connection, which required work within the public road corridor.",
      "The drainage scope required a Traffic Management Plan (TMP) and careful coordination around public access and traffic requirements.",
      "Critical road works were completed during a restricted night-time working window from 8:00 PM to 4:00 AM, requiring detailed planning between the drainage crew, traffic management and the wider site programme.",
    ],
    deliveryTitle: "Multiple specialist stages delivered by SLINE",
    delivery: [
      "The project progressed through asbestos removal, demolition and site clearance into earthworks, public drainage, private drainage and plumbing, and wider All-in-One site-service works.",
      "Because these scopes were delivered through SLINE's own wider team, the handover from one stage to the next could be planned around the same site conditions, access requirements and overall programme.",
      "The result was a coordinated full-service project rather than a series of disconnected single-trade packages.",
    ],
    outcome: [
      "SLINE completed the connected scope from early hazardous-material and demolition work through to earthworks, drainage, plumbing and All-in-One site servicing.",
      "197 Stoddard Road demonstrates the company's ability to deliver a complex project involving several specialist crews, public infrastructure, traffic management and restricted working hours while keeping the different stages connected.",
    ],
    stages: [
      {
        title: "Asbestos Removal",
        image: "/images/projects/197-stoddard-road/asbestos-containment.jpg",
        imageAlt: "SLINE asbestos containment work",
        description:
          "Hazardous-material work was completed before later demolition and civil stages could progress.",
      },
      {
        title: "Demolition",
        image: "/images/projects/197-stoddard-road/demolition-site-clearance.jpg",
        imageAlt: "SLINE demolition and site clearance",
        description:
          "Demolition and clearance prepared the property for the ground and infrastructure work that followed.",
      },
      {
        title: "Earthworks",
        image: "/images/projects/197-stoddard-road/underground-utilities-trench.jpg",
        imageAlt: "SLINE earthworks and underground trenching",
        description:
          "Excavation and trenching formed the transition from site clearance into drainage and service installation.",
      },
      {
        title: "Public Drainage",
        image: "/images/projects/197-stoddard-road/public-drainage-excavation.jpg",
        imageAlt: "SLINE public drainage excavation",
        description:
          "Public stormwater and wastewater connections formed a major civil component of the redevelopment.",
      },
      {
        title: "Traffic Management & Night Works",
        image: "/images/projects/197-stoddard-road/traffic-management-nightworks.jpg",
        imageAlt: "SLINE traffic management and drainage night works",
        description:
          "Road-corridor drainage activity was coordinated under a TMP and completed within restricted night-time working hours.",
      },
    ],
  },
  {
    slug: "59-galway-street",
    title: "59 Galway Street",
    location: "Auckland",
    category: "Commercial Asbestos Remediation",
    featuredLabel: "High-Risk Asbestos Project",
    services: [
      "Commercial Asbestos Removal",
      "Fire-Damaged Building",
      "Contaminated Site Management",
    ],
    intro:
      "SLINE Demolition Ltd was engaged to undertake commercial asbestos removal works at 59 Galway Street following a significant fire at the industrial premises. The fire caused extensive damage to the building and resulted in asbestos-containing materials being disturbed, with asbestos dust and debris potentially spread across affected areas of the site. This created a complex and high-risk working environment requiring careful planning, strict asbestos controls and close coordination throughout the removal process.",
    challengeTitle: "Managing contamination in a fire-damaged building",
    challenge: [
      "The key challenge was managing asbestos contamination within a fire-damaged commercial building.",
      "Due to the condition of the site and the potential spread of asbestos dust following the fire, the works required a high level of containment, environmental control and health and safety management.",
    ],
    deliveryTitle: "Regulatory and stakeholder coordination",
    delivery: [
      "SLINE worked closely with Auckland Council, WorkSafe New Zealand and other relevant authorities and project stakeholders to coordinate the required asbestos removal works.",
      "The removal process was planned and carried out around the applicable safety and regulatory requirements, with controlled removal procedures and environmental controls maintained throughout the works.",
    ],
    outcome: [
      "Through careful planning, controlled removal procedures and close coordination with the relevant authorities, SLINE successfully completed the asbestos removal works while maintaining a strong focus on the safety of workers, the surrounding environment and the wider community.",
      "The successful completion of 59 Galway Street demonstrates SLINE's capability to undertake complex commercial asbestos projects, including fire-damaged and contaminated sites requiring coordination with multiple regulatory authorities.",
    ],
  },
  {
    slug: "education-sector",
    title: "Education Sector",
    location: "New Zealand",
    category: "Specialist Asbestos Removal",
    featuredLabel: "Education Facilities",
    services: [
      "Professional Asbestos Removal",
      "School & Education Facilities",
      "Compliance & Safety",
    ],
    intro:
      "SLINE Demolition Ltd is a specialist asbestos removal contractor with experience delivering asbestos removal works across New Zealand's education sector. These projects require a high level of planning, coordination and site management because of the sensitive nature of school environments.",
    challengeTitle: "Working safely in sensitive education environments",
    challenge: [
      "Asbestos removal within schools requires a higher level of planning, coordination and site management due to the sensitive nature of the environment.",
      "Each project is carefully planned around the specific requirements of the school, with particular attention to site isolation, asbestos containment, air management, waste handling, worker and public safety, and independent clearance requirements.",
    ],
    deliveryTitle: "Planning, coordination and clearance",
    delivery: [
      "Where required, SLINE coordinates with the Ministry of Education, school representatives, consultants, independent asbestos assessors and other relevant authorities throughout the project.",
      "Projects have included the controlled removal of asbestos-containing materials from a variety of school buildings and facilities, from initial planning and site establishment through to asbestos removal, decontamination and final clearance.",
      "The focus throughout is on completing each project safely, professionally and with minimal disruption to the school environment.",
    ],
    outcome: [
      "SLINE's experience working within active and sensitive education environments demonstrates the company's capability to manage asbestos projects where safety, compliance, communication and careful coordination are critical to successful delivery.",
    ],
    schools: [
      "Penhill Primary School",
      "Mt Eden Normal Primary School",
      "Macleans Primary School",
      "Mt Roskill Grammar School",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
