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
    heroImage: '/images/projects/horizon/hero.jpg',
    gallery: [
      { src: '/images/projects/horizon/gallery-1.jpg', alt: 'School of Architecture — main entrance and courtyard', caption: 'Main entrance with BLDEA signage' },
      { src: '/images/projects/horizon/hero.jpg', alt: 'Aerial masterplan perspective', caption: 'Aerial site perspective' },
    ],
    plans: [
      { src: '/images/projects/horizon/hero.jpg', alt: 'Site masterplan at 1:500', caption: 'Masterplan — 1:500' },
    ],
    sections: [
      { src: '/images/projects/horizon/gallery-1.jpg', alt: 'Section through stepped court', caption: "Section A–A' through Stepped Court — 1:200" },
    ],
    sketches: [
      { src: '/images/projects/horizon/gallery-1.jpg', alt: 'Concept development', caption: 'Spatial sequence study' },
    ],
    drawings: [
      { src: '/images/projects/horizon/hero.jpg', alt: 'Front elevation', caption: 'Front Elevation — 1:200' },
    ],
    materials: [],
    color: '#8A7B6B',
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
    heroImage: '/images/projects/terra/hero.jpg',
    gallery: [
      { src: '/images/projects/terra/hero.jpg', alt: 'Hill Resort view deck overlooking valley', caption: 'View deck with valley panorama' },
      { src: '/images/projects/terra/gallery-1.jpg', alt: 'Cottage exterior nestled in landscape', caption: 'Cottage integration with terrain' },
    ],
    plans: [
      { src: '/images/projects/terra/hero.jpg', alt: 'Topographical site masterplan', caption: 'Topographical Masterplan — 1:400' },
    ],
    sections: [
      { src: '/images/projects/terra/gallery-1.jpg', alt: 'Topographical section', caption: "Topographical Section A–A'" },
    ],
    sketches: [
      { src: '/images/projects/terra/hero.jpg', alt: 'Terrain response study', caption: 'Terrain-responsive massing' },
    ],
    drawings: [
      { src: '/images/projects/terra/gallery-1.jpg', alt: 'South-west elevation', caption: 'South-West Elevation' },
    ],
    materials: [
      { src: '/images/projects/terra/hero.jpg', alt: 'Wooden louver detail', caption: 'Wooden louver screens — Back Office' },
    ],
    color: '#6B8A5E',
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
      "A meta-architectural museum that reinterprets the traditional regional heritage of Vijayapura through contemporary spatial strategies. The design draws from the city's rich Deccan architectural legacy — using the Stepwell as a spatial concept for descent and collective memory, Wind Catcher towers for passive cooling, and locally sourced Natural Red Sandstone to connect with the historical identity.",
    concept:
      "The museum is organized around a central Open Air Theatre conceived as a contemporary stepwell — a descending communal space that connects visitors to the archaeology below ground. Wind Catcher towers rise from the mass, providing passive ventilation while creating a striking silhouette that echoes Vijayapura's historic skyline. The Sky Walk offers elevated views connecting exhibition zones. Materials are drawn from the earth of the Deccan plateau itself.",
    heroImage: '/images/projects/monolith/hero.jpg',
    gallery: [
      { src: '/images/projects/monolith/hero.jpg', alt: 'Museum entry with red sandstone wind towers', caption: 'Entry sequence — sandstone wind towers' },
      { src: '/images/projects/monolith/gallery-1.jpg', alt: 'Interior exhibition space', caption: 'Interior gallery and sky walk' },
    ],
    plans: [
      { src: '/images/projects/monolith/hero.jpg', alt: 'Ground floor plan around central OAT', caption: 'Ground Floor Plan — 1:200' },
    ],
    sections: [
      { src: '/images/projects/monolith/gallery-1.jpg', alt: 'Section showing wind catchers', caption: "Section A–A' with wind catchers — 1:200" },
    ],
    sketches: [
      { src: '/images/projects/monolith/hero.jpg', alt: 'Stepwell spatial concept', caption: 'Stepwell spatial concept diagram' },
    ],
    drawings: [
      { src: '/images/projects/monolith/gallery-1.jpg', alt: 'Wind catcher detail elevation', caption: 'Wind Catcher elevation detail' },
    ],
    materials: [
      { src: '/images/projects/monolith/hero.jpg', alt: 'Natural red sandstone', caption: 'Natural Red Sandstone — Vijayapura' },
    ],
    color: '#C4764E',
  },
  {
    id: 'highrise-apartment',
    number: '04',
    title: 'High-Rise Apartment',
    location: 'Whitefield, Bengaluru',
    year: '2025',
    type: 'Residential / Mixed-Use',
    status: 'Academic Project',
    role: 'Lead Designer',
    area: '48,000 sqm',
    client: 'Private Developer',
    collaborators: [],
    description:
      "A high-density vertical residential complex designed for Bengaluru's rapidly growing Whitefield IT corridor. The scheme offers optimized unit planning across 4.5 BHK, 3.5 BHK, and Duplex Villa configurations — prioritizing natural light, cross-ventilation, common amenities, structural efficiency, and green spaces.",
    concept:
      "The tower is organized around a structural core that allows for flexible unit configurations. The podium level integrates multi-level parking with landscaped terraces, while Duplex Villa penthouses at the crown offer private terrace gardens and double-height living spaces. The design balances density with livability, ensuring every unit has access to natural light, ventilation, and views.",
    heroImage: '/images/projects/lumina/hero.jpg',
    gallery: [
      { src: '/images/projects/lumina/hero.jpg', alt: 'Tower view from street level', caption: 'Tower perspective from Whitefield Road' },
      { src: '/images/projects/lumina/gallery-1.jpg', alt: 'Podium and landscaping', caption: 'Podium landscape and amenities' },
    ],
    plans: [
      { src: '/images/projects/lumina/hero.jpg', alt: '4.5 BHK cluster plan', caption: '4.5 BHK Typical Cluster Plan' },
      { src: '/images/projects/lumina/gallery-1.jpg', alt: 'Duplex villa floor plan', caption: 'Duplex Villa — Lower & Upper Floor' },
    ],
    sections: [
      { src: '/images/projects/lumina/hero.jpg', alt: 'Building section showing podium parking', caption: "Section A–A' — Podium Parking Levels" },
    ],
    sketches: [],
    drawings: [
      { src: '/images/projects/lumina/gallery-1.jpg', alt: 'Key plan and future expansion', caption: 'Key Plan — Future Expansion Zone' },
    ],
    materials: [],
    color: '#7B8A9A',
  },
  {
    id: 'design-competitions',
    number: '05',
    title: 'Design Competitions',
    location: 'Various, India',
    year: '2023 — 2026',
    type: 'Competition / Conceptual',
    status: 'Awards & Mentions',
    role: 'Team Leader / Designer',
    area: 'Various',
    client: 'NASA India / Space Zero Design',
    collaborators: ['NASA Unit, BLDEA'],
    description:
      "A curated collection of competition entries and conceptual explorations spanning NASA India Design Trophy submissions, Space Zero Design challenges, and independent design investigations. These projects push the boundaries of architectural thinking — exploring untangled spatial narratives, sustainable strategies, and bold formal experimentation.",
    concept:
      "Each competition entry represents a unique exploration of creativity, problem-solving, and attention to detail. From NASA Zonal Convention entries earning Special Mention Awards to consecutive Space Zero Design victories, these projects demonstrate rigorous design thinking applied under constraint — limited time, bold briefs, and the pressure of peer evaluation.",
    heroImage: '/images/projects/void/hero.jpg',
    gallery: [
      { src: '/images/projects/void/hero.jpg', alt: 'Competition design — spatial exploration', caption: 'NASA Design Trophy — Concept' },
      { src: '/images/projects/void/gallery-1.jpg', alt: 'Competition model and presentation', caption: 'Space Zero Design entry' },
    ],
    plans: [],
    sections: [],
    sketches: [
      { src: '/images/projects/void/hero.jpg', alt: 'Competition concept sketch', caption: 'Untangled — concept exploration' },
    ],
    drawings: [],
    materials: [],
    color: '#6B7B8A',
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
    email: 'rohitkulkarni.arch@gmail.com',
    phone: '+91 98765 43210',
    location: 'Vijayapura, Karnataka, India',
    linkedin: 'https://linkedin.com/in/rohitrkulkarni',
    instagram: 'https://instagram.com/rohit.arch',
    behance: 'https://behance.net/rohitrkulkarni',
  },
};
