const projects = [
    {
        number: "01",
        title: "Coffee Corner",
        description:
            "A design-focused café website built to create a strong visual brand presence, with an emphasis on typography, composition, layout, and smooth interactions.",

        image: "./assets/projects/coffee-corner/01.webp",

        technologies: [
            {
                name: "Figma",
                icon: "devicon-figma-plain",
            },
            {
                name: "Framer",
                icon: "devicon-framer-original",
            },
        ],

        live: "https://coffeeeecorner.framer.website/",
        github: null,
    },

    {
        number: "02",
        title: "Interior Designer Sample",
        description:
            "A sample portfolio website for an interior design studio, designed to showcase spaces and design work through a responsive and visually focused layout.",

        image: "./assets/projects/interior/01.webp",

        technologies: [
            {
                name: "HTML",
                icon: "devicon-html5-plain colored",
            },
            {
                name: "CSS",
                icon: "devicon-css3-plain colored",
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored",
            },
        ],

        live: "https://interior-designer-sample-website.imrahitpal.workers.dev/",
        github: null,
    },

    {
        number: "03",
        title: "Salon",
        description:
            "A modern salon website designed to showcase services and brand identity through interactive animations, smooth transitions, and a responsive layout.",

        image: "./assets/projects/salon/01.webp",

        technologies: [
            {
                name: "Framer",
                icon: "devicon-framer-original",
            },
        ],

        live: "https://glamorous-experiences-089297.framer.app/",
        github: null,
    },

    {
        number: "04",
        title: "E-commerce Visual Catalogue",
        description:
            "A responsive product catalogue built for browsing products across categories, with dynamic product interactions and seamless navigation between listings and individual product pages.",

        image: "./assets/projects/ecommerce/01.webp",

        technologies: [
            {
                name: "React",
                icon: "devicon-react-original colored",
            },
            {
                name: "React Router",
                icon: "devicon-reactrouter-plain",
            },
        ],

        live: null,
        github: null,
    },
];


const projectsContainer = document.getElementById("projects-container");


projects.forEach((project) => {

    const projectCard = document.createElement("article");

    projectCard.className =
        "overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]";


    const technologiesHTML = project.technologies
        .map(
            (tech) => `
        <span
          class="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-200"
        >
          <i class="${tech.icon} text-sm"></i>
          ${tech.name}
        </span>
      `
        )
        .join("");


    const liveButton = project.live
        ? `
      <a
        href="${project.live}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:bg-neutral-200"
      >
        View Live
        <span>↗</span>
      </a>
    `
        : "";


    const githubButton = project.github
        ? `
      <a
        href="${project.github}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
      >
        GitHub
        <span>↗</span>
      </a>
    `
        : "";


    projectCard.innerHTML = `
    <!-- Project Image -->
    <div class="aspect-[16/8] overflow-hidden border-b border-white/10 bg-neutral-900">
      <img
        src="${project.image}"
        alt="${project.title} project screenshot"
        loading="lazy"
        class="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
      />
    </div>


    <!-- Project Content -->
    <div class="p-6 md:p-8">

      <!-- Number -->
      <p class="mb-4 text-xs font-medium tracking-[0.2em] text-neutral-500">
        ${project.number}
      </p>


      <!-- Title + Buttons -->
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >

        <h3
          class="text-2xl font-bold tracking-[-0.02em] text-white"
        >
          ${project.title}
        </h3>

        <div class="flex flex-wrap gap-2">
          ${liveButton}
          ${githubButton}
        </div>

      </div>


      <!-- Description -->
      <p
        class="mt-5 max-w-3xl text-base leading-7 text-neutral-300"
      >
        ${project.description}
      </p>


      <!-- Technologies -->
      <div class="mt-6 flex flex-wrap gap-2">
        ${technologiesHTML}
      </div>

    </div>
  `;


    projectsContainer.appendChild(projectCard);
});