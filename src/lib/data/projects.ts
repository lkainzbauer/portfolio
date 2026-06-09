import type { Project } from "$lib/types/project";

export const projects: Project[] = [
  {
    slug: "bevry",
    name: "Bevry",
    img: "bevry_detail.png",
    img2: "bevry_screens.png",
    url: "https://www.bevry.app/",
    duration: "Oct 23 – Jun 24",
    technologies: [
      { icon: "ri:vuejs-fill", name: "Vue" },
      { icon: "simple-icons:pinia", name: "Pinia" },
      { icon: "file-icons:nestjs", name: "NestJS" },
      { icon: "simple-icons:typeorm", name: "TypeORM" },
      { icon: "lineicons:mysql", name: "MySQL" },
      { icon: "ri:gitlab-fill", name: "GitLab" },
      { icon: "mdi:jira", name: "Jira" },
      { icon: "cbi:confluence", name: "Confluence" },
      { icon: "solar:figma-linear", name: "Figma" },
      { icon: "streamline-logos:adobe-illustrator-logo-block", name: "Adobe Illustrator" },
      { icon: "streamline-logos:adobe-indesign-logo-block", name: "Adobe InDesign" }
    ],
    shortDescription: "Bevry is a web application designed for cocktail enthusiasts who love to experiment, get inspired, and share their creations. It combines the joy of socializing with the creativity of mixology, encouraging users to explore, connect, and have fun while crafting unique drinks.",
    description: "<div>Bevry was created as a collaborative student project that aimed to merge community-building with creativity in mixology. Developed in a team of five, we set out to design a platform where cocktail lovers could find inspiration, experiment with new combinations, and share their experiences with others. The concept revolved around building an energetic, playful, and modern brand identity that would appeal to both newcomers and experienced mixologists.</div><div>The app allows users to discover recipes, connect with others, and participate in small interactive mini-games. Our focus was not only on functionality but also on creating an environment that felt lively, inclusive, and genuinely fun to use.</div>",
    features: [
      "Create, edit, and delete recipes",
      "Explore, like, comment on and rate other users’ recipes",
      "Search and filter recipes by ingredients and categories",
      "Manage a personal bar inventory and generate shopping lists",
      "Receive personalized cocktail recommendations",
      "Customize profiles, privacy settings and verify accounts via email",
      "Follow step-by-step instructions",
      "Play single- and multiplayer mini-games to enhance community engagement"
    ],
    implementation: "<div>The project followed an agile development approach, coordinated through Jira and GitLab. The frontend was built with Vue and Vuetify to ensure a responsive, mobile-first experience. Pinia was used for state management, providing a clean and reactive data flow between components. On the backend, we implemented NestJS with TypeORM for ORM-based database communication and Swagger for documentation and testing. Authentication and authorization were realized with JWT and bcrypt, ensuring a secure user environment.</div><div>I contributed to both backend and frontend development. My backend responsibilities included user management, recipe and interaction handling, and image processing. On the frontend, I focused on implementing the mini-game logic and ensuring smooth integration with the backend services.</div>",
    learnings: "Bevry strengthened my understanding of full-stack application development, particularly the integration of secure APIs with interactive, user-centered frontends. I improved my skills in authentication design, error handling, and collaborative coding practices. Beyond technical aspects, I learned to balance usability, visual appeal, and feature scope in a team setting. The process of integrating gamification and multimedia into a social app also gave me valuable insight into user engagement and community-driven design.",
    additionalImg: ["bevry_games.png", "bevry_moodboard.png", "bevry_group2.png", "bevry_logo.png", "bevry_flyer.png", "bevry_screens2.png", "bevry_group1.png", "bevry_colors.png"]
  },
  {
    slug: "amity",
    name: "Amity",
    img: "amity_calendar.png",
    img2: "amity_screens.png",
    url: "https://amity-app.netlify.app/",
    duration: "Oct 24 – Jan 25",
    technologies: [
      { icon: "akar-icons:angular-fill", name: "Angular" },
      { icon: "devicon-plain:angularmaterial", name: "Angular Material" },
      { icon: "mdi:bootstrap", name: "Bootstrap" },
      { icon: "file-icons:nestjs", name: "NestJS" },
      { icon: "simple-icons:typeorm", name: "TypeORM" },
      { icon: "lineicons:mysql", name: "MySQL" },
      { icon: "ri:gitlab-fill", name: "GitLab" },
      { icon: "mdi:jira", name: "Jira" },
      { icon: "solar:figma-linear", name: "Figma" }
    ],
    shortDescription: "Amity is a progressive web app that makes it easier to stay in touch with friends, plan events, and think of one another. It helps users maintain meaningful connections by combining modern design with simple, intuitive social planning tools.",
    description: "<div>Amity is meant to support users in maintaining friendships in an increasingly fast-paced world. Together with two other students, I developed this progressive web app to simplify social coordination, event planning, and thoughtful communication. The goal was to design a friendly and modern platform that doesn’t just organize people’s time but encourages empathy and connection.</div><div>Through a clean and minimal interface, users can plan shared activities, receive birthday reminders, and check in with each other through notifications. The app is designed to be simple yet thoughtful, turning everyday interactions into intentional moments of connection.</div>",
    features: [
      "Create, edit, and delete events",
      "Share events and confirm attendance",
      "View and manage availability via a shared calendar",
      "Receive birthday reminders and event notifications",
      "Check in with friends through push notifications",
      "Make shared predictions about future events",
      "Install as a progressive web app for a native-like experience"
    ],
    implementation: "<div>The frontend was built with Angular, supported by Angular Material and Bootstrap for a consistent design system. As a PWA, Amity integrates installation prompts and real-time push notifications. The backend relied on NestJS with TypeORM and Swagger for structured development and maintainability. JWT and bcrypt provided authentication and security.</div><div>My key responsibilities included backend architecture design and implementation for user management, event creation, and prediction logic. On the frontend, I developed the calendar and event management views, ensuring seamless interaction between user actions and the backend services. We used Figma for interface design, while GitLab and Jira supported our agile workflow and version control.</div>",
    learnings: "Amity allowed me to refine my approach to building cohesive full-stack systems where design and functionality go hand in hand. I learned to anticipate user needs, build reliable authentication flows, and design for accessibility. The project also emphasized communication and teaching. Our small team frequently exchanged knowledge and supported each other in mastering new tools. The experience strengthened both my technical expertise and my collaborative mindset.",
    additionalImg: ["amity_screens2.png", "amity_logo.png", "amity_flyer.png", "amity_screens3.png", "amity_sticker.png", "amity_team.png"]
  },
  /*{
    slug: "mobile-viz-onboarding",
    name: "Mobile Viz Onboarding",
    img: "",
    img2: "",
    url: "https://sankey-onboarding.netlify.app/",
    duration: "Jan 2025 – Sept 2025",
    technologies: [
      { icon: "akar-icons:angular-fill", name: "Angular" },
      { icon: "devicon-plain:angularmaterial", name: "Angular Material" },
      { icon: "file-icons:d3", name: "D3.js" },
      { icon: "solar:figma-linear", name: "Figma" }
    ],
    shortDescription: "In my master thesis I dealt with the topic of data visualization onboarding on mobile devices. Combining principles of mobile UI/UX with data visualization and onboarding/learning with the goal of finding suitable methods to support and encourage users in engaging with mobile visualizations.",
    description: "<div></div>",
    features: [
      "Mobile Sankey diagram",
      "Interactive data exploration",
      "Onboarding in a mobile specific context",
      "Enhancing visualization literacy",
      "Immersive microlearning"
    ],
    implementation: "",
    learnings: "",
    additionalImg: []
  },*/
  {
    slug: "time-parabox",
    name: "Time Parabox",
    img: "time-parabox_compass.png",
    img2: "time-parabox_screens.png",
    url: "",
    duration: "Oct 24 – Jan 25",
    technologies: [
      { icon: "mdi:react", name: "React Native" },
      { icon: "simple-icons:expo", name: "Expo" },
      { icon: "tabler:bluetooth", name: "Bluetooth Low Energy" },
      { icon: "simple-icons:blender", name: "Blender" },
      { icon: "solar:figma-linear", name: "Figma" },
      { icon: "mdi:github", name: "GitHub" },
      { icon: "mdi:jira", name: "Jira" },
      { icon: "cbi:confluence", name: "Confluence" }
    ],
    shortDescription: "Time Parabox is a hybrid puzzle and escape game that combines a physical box equipped with sensors and a mobile app. Players are guided through an adventure across different time periods, solving challenges that blend physical and digital interaction.",
    description: "<div>Time Parabox was an ambitious, challenging project that merged physical computing with mobile interaction. Developed in a group of ten students, the project aimed to create a hybrid escape-room experience where storytelling, hardware, and software connect. Players interact with a physical puzzle box connected via Bluetooth to a React Native mobile app, guiding them through multiple historical time periods.</div><<div>The narrative drives players through challenges that combine real-world physical engagement with digital logic and feedback. Each puzzle requires teamwork, observation and deduction, mirroring the sense of adventure found in classic escape games while leveraging modern technology for immersion.</div>",
    features: [
      "Hybrid puzzles combining physical and digital interaction",
      "Bluetooth Low Energy communication between box and mobile app",
      "Real-time sensor data input and feedback",
      "Contextual hints and progressive guidance",
      "Story-driven gameplay with multiple historical epochs",
      "Integrated process tracking and narrative progression"
    ],
    implementation: "<div>Development involved close coordination between hardware, software, and storytelling teams. We used Confluence and Figma to plan narrative arcs, interaction design, and puzzle structure. The frontend was developed using React Native and Expo, which enabled fast prototyping and deployment across mobile platforms. Bluetooth Low Energy was implemented for communication between the app and the microcontroller-based hardware, transmitting data such as button presses and sensor states.</div><div>My contribution focused on game design and storytelling: writing narrative sequences, designing puzzles, and ensuring consistency between the physical and digital elements. I also implemented frontend logic for game elements, built 3D models in Blender, and handled 3D printing and assembly. The combination of creative and technical tasks made this project particularly exciting.</div>",
    learnings: "Time Parabox taught me how to bridge hardware and software to create cohesive interactive experiences. I learned to manage communication across subteams, integrate sensor data in real time, and maintain narrative coherence in a complex hybrid system. The project deepened my understanding of game logic, prototyping under pressure, and large-scale collaboration. It reinforced the importance of design thinking, planning, and iterative testing when bringing creative ideas to life.",
    additionalImg: ["time-parabox_screens2.png", "time-parabox_flyer.png", "time-parabox_planning.png", "time-parabox_building.png", "time-parabox_storyline.png", "time-parabox_results.png"]
  },
  {
    slug: "smart-communities",
    name: "Smart Communities – IoT4LAC",
    img: "smart-communities.png",
    img2: "smart-communities_prototype1.png",
    url: "https://research.ustp.at/projekte/iot4lac-iot-anwendungen-fuer-noe-gemeinden",
    duration: "Febr 23 – Jun 24",
    technologies: [
      { icon: "devicon-plain:grafana", name: "Grafana" },
      { icon: "mdi:react", name: "React" },
      { icon: "file-icons:d3", name: "D3.js" },
      { icon: "mdi:github", name: "GitHub" }
    ],
    shortDescription: "Smart Communities – IoT4LAC is a research project focused on visualizing sensor data for local municipalities. It delivers Grafana plugins that turns complex IoT data into clear, meaningful insights through an interactive dashboard.",
    description: "<div>I was part of this research project throughout the completion of my bachelor thesis and had the oppportunity to stay on for the remainder of the project. It focused on developing data visualization plugins for Grafana. The goal was to provide local municipalities in Lower Austria with an intuitive dashboard to analyze historical IoT sensor data. By combining multiple visualizations and data attributes, the dashboard helped uncover relationships between environmental or infrastructural variables.</div><div>The project bridged data visualization, usability testing, and civic technology. It aimed to empower non-experts (city employees) to interpret complex datasets through clear, interactive visuals. The results were displayed in the ''Haus der Digitalisierung'' in Tulln.</div>",
    features: [
      "Customizable data visualizations",
      "Attribute selection and filtering",
      "Comparative historical views",
      "Explanations and legends for clarity",
      "Structured usability test with defined tasks"
    ],
    implementation: "Initial sketches with pen and paper were created, followed by low-fidelity and high-fidelity prototypes designed in Adobe XD to explore different layout and interaction strategies. The plugin was designed to blend seamlessly into the research project's existing plugins, maintaining stylistic and functional consistency.</div><div>I was responsible for the dashboard design, visualization logic, data binding, and interaction design, ensuring smooth user workflows. Multiple usability studies were conducted throughout the course of the project using task-based scenarios to evaluate the clarity and effectiveness of the design. Results were analyzed and presented in a structured evaluation report.</div>",
    learnings: "The project expanded my understanding of visualization, usability and user-centered research. I learned to design for clarity and accessibility while working within an existing framework. Conducting real user tests offered valuable insight into how people engage with data tools, and how small changes can significantly improve interpretability and user experience.",
    additionalImg: ["smart-communities_prototype2.png", "smart-communities_dashboard1.png", "smart-communities_dashboard2.png", "smart-communities_dashboard3.png"]
  },
  {
    slug: "print-to-mobile",
    name: "Bean to Cup",
    img: "print-to-mobile_cappucino.png",
    img2: "print-to-mobile_home.png",
    url: "https://it231505-21822.php.fhstp.cc/",
    duration: "Sep 23",
    technologies: [
      { icon: "akar-icons:angular-fill", name: "Angular" },
      { icon: "", name: "Hammer.js" }
    ],
    shortDescription: "Bean to Cup is a mobile-only web app that connects coffee lovers with personalized brewing inspiration. By scanning a QR code on their purchased beans, users unlock tailored recipes that make every cup unique.",
    description: "Bean to Cup was my first Master’s project and a explored how physical and digital media can complement each other. The goal was to create a mobile web app that provides personalized coffee recipes by scanning QR codes printed on coffee bean packages. Each scan leads to a curated page with brewing instructions tailored to the beans’ characteristics such as roast and aroma.\nThe concept emphasizes simplicity, design clarity, and usability. It targets a hip, quality-oriented audience that appreciates convenience without sacrificing individuality or craftsmanship.",
    features: [
      "Scan QR codes to access recipe pages",
      "Display recipe suggestions for specific coffee beans",
      "Browse through a categorized recipe list",
      "Follow step-by-step brewing guidance",
      "Use swipe gestures for smooth navigation"
    ],
    implementation: "The frontend was built in Angular with modular components for reusability and scalability. Hammer.js was used to implement intuitive swipe gestures, providing an app-like experience within the browser. The design was optimized for mobile screens with a focus on legibility and minimalism. This short but focused project was completed within a few days and served as an ideal introduction to full-cycle web development from ideation to delivery.",
    learnings: "Bean to Cup taught me the fundamentals of component-based architecture and how to combine design and technology efficiently in short development cycles. I learned to use QR codes in combination with mobile apps and to design clean, mobile-first navigation. The project also sharpened my sense for minimal UI design and usability under real-world constraints.",
    additionalImg: ["print-to-mobile_qrcode.png", "print-to-mobile_aeropress.png", "print-to-mobile_instructions.png"]
  },
  {
    slug: "echo-chamber",
    name: "Echo Chamber",
    img: "echo-chamber.png",
    img2: "echo-chamber_drawings.png",
    url: "https://www.youtube.com/watch?v=plosh-p8mGA",
    duration: "Jun 24",
    technologies: [
      { icon: "mdi:unity", name: "Unity" },
      { icon: "streamline-logos:adobe-photoshop-logo-block", name: "Adobe Photoshop" },
      { icon: "streamline:adobe-solid", name: "Adobe Firefly" },
      { icon: "solar:figma-linear", name: "Figma" }
    ],
    shortDescription: "Echo Chamber is an immersive storytelling experience built in Unity. It tells the haunting story of a missing girl entirely through the objects, light, and atmosphere of a single room - without dialogue or narration.",
    description: "<div>Echo Chamber was developed as part of a summer school workshop on environmental storytelling. The challenge was to design a single room that tells a complete story without dialogue or text, relying entirely on environmental cues, layout, and lighting. My team chose to create a child’s bedroom that gradually reveals the tragic story of a missing girl. Through subtle details such as toys, drawings, news articles, and a small altar, the room tells a layered narrative about loss and memory.</div><div>The project explored atmosphere, emotion, and psychological storytelling through space. Every visual choice contributed to building tension and empathy without explicit explanation.</div>",
    features: [
      "Environmental storytelling through spatial design",
      "Explorative narrative and worldbuilding",
      "Use of mood modifiers and visual traces",
      "Physical objects as narrative clues"
    ],
    implementation: "The story and visual design were planned in Figma before building the 3D environment in Unity. Posters and wall art were created using a combination of AI-generated imagery (Adobe Firefly) and hand-drawn illustrations in Paint and Photoshop. The scene used low-poly models and carefully designed lighting to evoke both innocence and unease. Object placement and color palette were chosen to guide the player’s emotional progression through the space.",
    learnings: "Echo Chamber was an interesting exercise in non-verbal storytelling and narrative design. I learned how to construct emotional resonance using composition, lighting, and environmental clues. Beyond technical skills in Unity and asset design, I developed a deeper understanding of how visual storytelling can convey different messages.",
    additionalImg: ["echo-chamber_drawings-closeup.png", "echo-chamber_hints.png", "echo-chamber_altar.png"]
  }
]