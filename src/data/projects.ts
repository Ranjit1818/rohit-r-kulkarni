export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  location: string;
  year: string;
  type: string;
  status: string;
  role: string;
  area: string;
  client: string;
  collaborators: string[];
  description: string;
  concept: string;
  heroImage: string;
  gallery: ProjectImage[];
  plans: ProjectImage[];
  sections: ProjectImage[];
  sketches: ProjectImage[];
  drawings: ProjectImage[];
  materials: ProjectImage[];
  color: string;
  category: 'academic' | 'hospitality' | 'competition' | 'technical' | 'residential';
}

export const projects: Project[] = [
  {
    id: 'school-of-architecture',
    number: '01',
    title: 'School of Architecture',
    location: 'Vijayapura, Karnataka',
    year: '2024',
    type: 'Academic / Institutional',
    status: 'Academic Project',
    role: 'Lead Designer',
    area: '15,000 sqm',
    client: "BLDEA's University",
    collaborators: [],
    description:
      "A comprehensive architectural campus designed as a living laboratory for architectural education. The scheme organizes academic, recreational, and residential programs around a series of stepped courts and exhibition spaces, creating a microcosm of architectural experience within the campus itself.",
    concept:
      "The design centers on the idea that an architecture school should itself be an architectural education. The building is organized around a Stepped Court, an Art Court, and an Open Exhibition Space — each functioning as an outdoor classroom where light, material, and spatial sequence become the curriculum. The masterplan integrates a Canteen, Auditorium, Sports Complex, Hostels, Open Air Theatre, Central Water Body, Staff Quarters, and Academic Block into a coherent landscape.",
    heroImage: '/images/projects/school  of  architecture/3D1.jpg.jpeg',
    gallery: [
      { src: '/images/projects/school  of  architecture/3D1.jpg.jpeg', alt: 'School of Architecture — 3D perspective view', caption: '3D Aerial Perspective' },
      { src: '/images/projects/school  of  architecture/r2.jpg.jpeg', alt: 'School of Architecture — exterior render', caption: 'Exterior Render — Main Block' },
      { src: '/images/projects/school  of  architecture/r5.jpg.jpeg', alt: 'School of Architecture — campus view', caption: 'Campus Landscape View' },
      { src: '/images/projects/school  of  architecture/r6.jpg.jpeg', alt: 'School of Architecture — courtyard', caption: 'Courtyard & Stepped Court' },
      { src: '/images/projects/school  of  architecture/r7.jpg.jpeg', alt: 'School of Architecture — detail view', caption: 'Architectural Detail' },
    ],
    plans: [],
    sections: [],
    sketches: [],
    drawings: [],
    materials: [],
    color: '#8A7B6B',
    category: 'academic',
  },
  {
    id: 'hill-resort',
    number: '02',
    title: 'Hill Resort',
    location: 'Gaganachukki Falls, Mandya, Karnataka',
    year: '2024',
    type: 'Hospitality',
    status: 'Academic Project',
    role: 'Lead Designer',
    area: '8,500 sqm',
    client: 'Architectural Design-V',
    collaborators: [],
    description:
      'A terrain-responsive hill resort nestled along the Kaveri River near Gaganachukki Falls. The design integrates sustainable architecture with the surrounding topography, harnessing elevated terrain, scenic waterfall views, and natural eco-tourism potential while addressing environmental impact, slope stability, and accessibility.',
    concept:
      "The resort is conceived as a sequence of discoveries along the hillside — each structure responding to the unique contour it sits upon. The program includes Suite Rooms, Cottages, Executive Rooms, Tree Houses, a Villa, a Health & Wellness Block with Spa, Gym, Yoga, and a Banquet Hall. The Back Office draws inspiration from weaver bird nest forms, while the Tree Houses are biomimetic designs wrapped around existing tree trunks.",
    heroImage: '/images/projects/hill  resort/resro.png',
    gallery: [
      { src: '/images/projects/hill  resort/resro.png', alt: 'Hill Resort — restaurant panoramic view deck', caption: 'Restaurant — Panoramic Kaveri Valley View Deck' },
      { src: '/images/projects/hill  resort/resto7.png', alt: 'Hill Resort — restaurant interior', caption: 'Restaurant Interior — Biophilic Dining Experience' },
      { src: '/images/projects/hill  resort/timber_screen_pool.png', alt: 'Hill Resort — water feature & timber screens', caption: 'Reflecting Pool & Timber Screen Pavilion' },
      { src: '/images/projects/hill  resort/landscape_approach.png', alt: 'Hill Resort — landscape integration', caption: 'Hillside Approach & Contour Terracing' },
      { src: '/images/projects/hill  resort/admin 5.png', alt: 'Hill Resort — administration block', caption: "Administration Block — Weaver Bird's Nest Biomimetic Form" },
      { src: '/images/projects/hill  resort/exicative 66.png', alt: 'Hill Resort — executive suites', caption: 'Executive Suites — Stepped Terrain Integration' },
    ],
    plans: [],
    sections: [],
    sketches: [],
    drawings: [],
    materials: [],
    color: '#6B8A5E',
    category: 'hospitality',
  },
  {
    id: 'archaeological-museum',
    number: '03',
    title: 'Archaeological Museum',
    location: 'Vijayapura (Bijapur), Karnataka',
    year: '2025',
    type: 'Cultural / Institutional',
    status: 'Academic Project',
    role: 'Lead Designer',
    area: '6,200 sqm',
    client: 'Karnataka Tourism',
    collaborators: [],
    description:
      "A meta-architectural museum that reinterprets the traditional regional heritage of Vijayapura through contemporary spatial strategies. The design draws from the city's rich Deccan architectural legacy — using the Stepwell as a spatial concept for descent and collective memory, Wind Catcher towers for passive cooling, and locally sourced Natural Red Sandstone to connect with historical identity.",
    concept:
      "The museum is organized around a central Open Air Theatre conceived as a contemporary stepwell — a descending communal space that connects visitors to the archaeology below ground. Wind Catcher towers rise from the mass, providing passive ventilation while creating a striking silhouette that echoes Vijayapura's historic skyline. The Sky Walk offers elevated views connecting exhibition zones. Materials are drawn from the earth of the Deccan plateau itself.",
    heroImage: '/images/projects/archeological  museuem/hero_exterior.jpg',
    gallery: [
      { src: '/images/projects/archeological  museuem/hero_exterior.jpg', alt: 'Archaeological Museum — stepwell amphitheatre and wind towers', caption: 'Exterior Perspective — Stepwell Open-Air Theatre & Passive Wind Catchers' },
      { src: '/images/projects/archeological  museuem/gallery_interior.jpg', alt: 'Archaeological Museum — exhibition hall with jaali screens', caption: 'Main Exhibition Hall — Vaulted Ceilings & Red Sandstone Jaali Screens' },
    ],
    plans: [],
    sections: [],
    sketches: [],
    drawings: [],
    materials: [],
    color: '#C4764E',
    category: 'academic',
  },
  {
    id: 'znc-award-winning',
    number: '04',
    title: 'ZNC Award Winning Design',
    location: 'Coimbatore, Tamil Nadu',
    year: '2024',
    type: 'Competition / Conceptual',
    status: 'NASA India — Special Mention Award',
    role: 'Team Leader & Designer',
    area: '10,000 sqm',
    client: 'NASA India Design Trophy',
    collaborators: ['NASA Unit, BLDEA'],
    description:
      "An award-winning competition entry for the NASA India Zonal Convention Design Trophy. The design reimagines a sustaining public building in downtown Coimbatore — a 10,000 sqm site transformed into a bamboo-and-AAC block structure centered around a circular masterplan with integrated green spaces, terrace gardens, and passive environmental strategies.",
    concept:
      "The concept integrates traditional bamboo construction with contemporary AAC block masonry, creating a building that breathes. A circular masterplan organizes the program — Reception, Multipurpose Hall, Gallery, and Library — around a central green spine. The section reveals a fluid, organic form that emerges from the landscape. Sun-path analysis drives orientation. Bamboo joinery details, bamboo columns, and terrace garden systems demonstrate a commitment to sustainable, craft-driven architecture.",
    heroImage: '/images/projects/ZNC  AWARD WINNING  SHEET/9e74991c-3129-4155-a7e4-58ea89d01729.png',
    gallery: [
      { src: '/images/projects/ZNC  AWARD WINNING  SHEET/9e74991c-3129-4155-a7e4-58ea89d01729.png', alt: 'ZNC Award Winning Sheet — masterplan, section, elevation', caption: 'Complete Design Sheet — Masterplan, Section & Elevation' },
    ],
    plans: [],
    sections: [],
    sketches: [],
    drawings: [
      { src: '/images/projects/ZNC  AWARD WINNING  SHEET/9e74991c-3129-4155-a7e4-58ea89d01729.png', alt: 'NASA India Competition Sheet — High Resolution Details', caption: 'Full Competition Sheet — Bamboo Structural Details & Masterplan' },
    ],
    materials: [],
    color: '#6B7B8A',
    category: 'competition',
  },
  {
    id: 'working-drawing',
    number: '05',
    title: 'Working Drawing',
    location: 'Vijayapura, Karnataka',
    year: '2025',
    type: 'Technical / Construction',
    status: 'Academic Project',
    role: 'Lead Drafter',
    area: 'Various',
    client: "BLDEA's University",
    collaborators: [],
    description:
      "A comprehensive set of construction working drawings demonstrating mastery of technical architectural documentation. The sheets cover structural layout, center-line plans, footing plans, column orientation, reinforcement schedules, and construction sections — all drawn to professional standards with proper scale notation, key plans, and schedule tables.",
    concept:
      "The working drawings represent the translation of architectural design into buildable reality. Each sheet is meticulously detailed with center-line unit plans, column-along-footing layouts, schedule of columns, schedule of footings, reinforcement details, and section cuts — demonstrating a thorough understanding of structural systems, construction documentation standards, and the architect's role in ensuring design intent is communicated precisely to the construction team.",
    heroImage: '/images/projects/working  drawing/content 5 page 1.png',
    gallery: [
      { src: '/images/projects/working  drawing/content 5 page 1.png', alt: 'Working Drawing — page 1 overview', caption: 'Sheet 1 — Center Line Plan & Structural Layout' },
      { src: '/images/projects/working  drawing/content -5 page2.png', alt: 'Working Drawing — page 2 details', caption: 'Sheet 2 — Column & Footing Details' },
      { src: '/images/projects/working  drawing/content 5 page 3.png', alt: 'Working Drawing — page 3 sections', caption: 'Sheet 3 — Sections & Reinforcement Schedule' },
      { src: '/images/projects/working  drawing/content  5-page 5.png', alt: 'Working Drawing — page 5 details', caption: 'Sheet 4 — Construction Details & Key Plan' },
    ],
    plans: [
      { src: '/images/projects/working  drawing/content 5 page 1.png', alt: 'Center Line Plan', caption: 'Center Line Plan & Structural Layout Grid' },
      { src: '/images/projects/working  drawing/content -5 page2.png', alt: 'Footing & Column Layout', caption: 'Footing Layout & Column Orientation Schedule' },
    ],
    sections: [
      { src: '/images/projects/working  drawing/content 5 page 3.png', alt: 'Construction Sections', caption: 'Building Cross Sections & Structural Levels' },
    ],
    sketches: [],
    drawings: [
      { src: '/images/projects/working  drawing/content 5 page 1.png', alt: 'Working Drawing Sheet 1', caption: 'Sheet 1 — Center Line Plan & Structural Grid' },
      { src: '/images/projects/working  drawing/content -5 page2.png', alt: 'Working Drawing Sheet 2', caption: 'Sheet 2 — Footing Details & Reinforcement Table' },
      { src: '/images/projects/working  drawing/content 5 page 3.png', alt: 'Working Drawing Sheet 3', caption: 'Sheet 3 — Longitudinal Section & Elevation' },
      { src: '/images/projects/working  drawing/content  5-page 5.png', alt: 'Working Drawing Sheet 4', caption: 'Sheet 4 — Staircase, Lintel & Canopy Details' },
    ],
    materials: [],
    color: '#9A7B6B',
    category: 'technical',
  },
  {
    id: 'freelance-projects',
    number: '06',
    title: 'Freelance Projects',
    location: 'Karnataka, India',
    year: '2024 — 2026',
    type: 'Residential / Freelance',
    status: 'Built & In Progress',
    role: 'Architect & Visualizer',
    area: 'Various',
    client: 'Private Clients',
    collaborators: [],
    description:
      "A curated collection of freelance residential design and visualization projects undertaken for private clients across Karnataka. Each project balances contemporary aesthetics with practical spatial planning — from the Natikar Residence featuring lush terrace gardens and exposed brick accents, to the Surpur Residence with its bold massing and wooden louver screens.",
    concept:
      "Each freelance project begins with an intimate understanding of the client's lifestyle, site constraints, and aspirations. The designs combine modern volumetric composition with contextual material choices — exposed brick, timber screens, planted terraces, and carefully articulated facades. 3D visualization using Enscape and SketchUp brings the client into the design process, enabling informed decision-making before construction begins.",
    heroImage: '/images/projects/Miscellaneous freelance projects/NATIKAR  R5.jpg.jpeg',
    gallery: [
      { src: '/images/projects/Miscellaneous freelance projects/NATIKAR  R5.jpg.jpeg', alt: 'Natikar Residence — front elevation with terrace garden', caption: 'Natikar Residence — Front Elevation' },
      { src: '/images/projects/Miscellaneous freelance projects/NATIKAR  R2.jpg.jpeg', alt: 'Natikar Residence — alternate view', caption: 'Natikar Residence — Side Perspective' },
      { src: '/images/projects/Miscellaneous freelance projects/surpur r1.jpg.jpeg', alt: 'Surpur Residence — street view', caption: 'Surpur Residence — Street Elevation' },
      { src: '/images/projects/Miscellaneous freelance projects/Enscape_2026-07-02-10-19-08.jpg.jpeg', alt: 'Freelance project — Enscape render', caption: 'Residential Visualization — Enscape Render' },
    ],
    plans: [],
    sections: [],
    sketches: [],
    drawings: [],
    materials: [],
    color: '#7B8A6B',
    category: 'residential',
  },
];

export const architectInfo = {
  name: 'Rohit',
  fullName: 'Rohit R Kulkarni',
  title: 'Architecture Student & Designer',
  studio: 'ROHIT R KULKARNI',
  monogram: 'RK',
  statement: 'Designing spaces that feel meaningful, functional, and deeply connected to people and place.',
  shortBio:
    "Rohit R Kulkarni is an architecture student and spatial designer based in Vijayapura, Karnataka. Currently pursuing his Bachelor of Architecture at BLDEA's V.P. Dr. P.G. Halakatti College of Engineering & Technology (2022–2027), his work navigates the intersection of modern design, traditional heritage, and sustainable principles — driven by the belief that architecture should create meaningful connections between people and their environment.",
  philosophy:
    "Architecture, at its most essential, is about creating spaces that not only look great but also feel meaningful and functional. Each project represents a unique exploration of creativity, problem-solving, and attention to detail — reflecting a blend of modern, traditional, and sustainable design principles. The work aspires to build meaningful connections between people and their environment.",
  approach: [
    'Site-specific design rooted in terrain and context',
    'Heritage-responsive architecture drawing from regional identity',
    'Sustainable strategies — passive cooling, local materials, terrain integration',
    'Rigorous spatial planning with attention to light and ventilation',
    'Research-driven design combining hand-craft and digital tools',
  ],
  expertise: [
    'Institutional Design',
    'Hospitality Architecture',
    'Residential High-Rise',
    'Museum & Cultural',
    'Competition Design',
    'Interior Design & Visualization',
  ],
  education: [
    {
      year: '2022 — 2027',
      institution: "BLDEA's V.P. Dr. P.G. Halakatti College of Engineering & Technology, Vijayapura",
      degree: 'Bachelor of Architecture (B.Arch)',
    },
    {
      year: '2020 — 2022',
      institution: 'F.K. Doshi Science PU College, Indi',
      degree: 'Pre-University Course (PUC)',
    },
    {
      year: '— 2020',
      institution: 'Lions Public School, Indi',
      degree: 'Secondary Education',
    },
  ],
  experience: [
    {
      year: '2025 — 2026',
      role: 'Team Leader',
      firm: "Space Zero Design, BLDEA's School of Architecture",
      location: 'Vijayapura',
    },
    {
      year: '2023 — 2024',
      role: 'Treasurer & Design Trophy Coordinator',
      firm: "NASA Unit, BLDEA's School of Architecture",
      location: 'Vijayapura',
    },
    {
      year: '2024',
      role: 'Student Coordinator',
      firm: 'Sambhrama Cultural Fest',
      location: 'Vijayapura',
    },
  ],
  awards: [
    { year: '2026', title: '1st Place — Urban Context Poster Presentation, Karnataka Tourism Dept' },
    { year: '2025–26', title: '2nd Place — Space Zero Design Competition' },
    { year: '2024–25', title: '2nd Place — Space Zero Design Competition' },
    { year: '2024', title: 'Special Mention Award — NASA India Design Trophy, Zonal Convention (SJBIT, Bengaluru)' },
    { year: '2024', title: '1st Rank for Academic Excellence (2023–24)' },
    { year: '2024', title: '2nd Photography Award — World Architecture Day Competition' },
    { year: '2024', title: '1st Place — Green Building Poster Presentation Competition' },
    { year: '2023', title: '2nd Rank for Academic Excellence (2022–23)' },
  ],
  skills: [
    'SketchUp', 'AutoCAD', 'Revit', 'Photoshop', 'Enscape',
    'InDesign', 'D5 Render', 'Rhino', 'Grasshopper', 'Lightroom',
    'Canva', 'Excel', 'Sketching', 'Visualization', 'Communication',
  ],
  workshops: [
    'Bamboo Construction',
    'Basic Revit',
    'Photogrammetry',
    'Clay Modelling',
    'Rhino & Grasshopper',
    'Urban Context',
    'Content Creation in Architecture',
  ],
  contact: {
    email: 'rohitkulkarni1718@gmail.com',
    phone: '+91 8310718546',
    location: 'Vijayapura, Karnataka, India',
    linkedin: 'https://linkedin.com/in/rohitrkulkarni',
    instagram: 'https://instagram.com/rohit.arch',
    behance: 'https://behance.net/rohitrkulkarni',
  },
};
