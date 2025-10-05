import type { Project } from "$lib/types/project";

export const projects: Project[] = [
  {
    slug: "bevry",
    name: "Bevry",
    img: "bevry_detail.png",
    img2: "bevry_detail.png",
    url: "https://www.bevry.app/",
    duration: "Oct 23 – Jun 24",
    technologies: [
      { icon: "ri:vuejs-fill", name: "Vue" },
      { icon: "", name: "Pinia" },
      { icon: "", name: "TypeScript" },
      { icon: "file-icons:nestjs", name: "NestJS" },
      { icon: "", name: "TypeORM" },
      { icon: "lineicons:mysql", name: "MySQL" },
      { icon: "", name: "GitLab" },
      { icon: "mdi:jira", name: "Jira" },
      { icon: "", name: "Confluence" },
      { icon: "solar:figma-linear", name: "Figma" },
      { icon: "", name: "Adobe Illustrator" },
      { icon: "", name: "Adobe InDesign" }
    ],
    shortDescription: "Bevry is a web application designed for cocktail enthusiasts who love to experiment, get inspired, and share their creations. It combines the joy of socializing with the creativity of mixology, encouraging users to explore, connect, and have fun while crafting unique drinks.",
    description: "Bevry was created as a collaborative student project that aimed to merge community-building with creativity in mixology. Developed in a team of five, we set out to design a platform where cocktail lovers could find inspiration, experiment with new combinations, and share their experiences with others. The concept revolved around building an energetic, playful, and modern brand identity that would appeal to both newcomers and experienced mixologists.\nThe app allowed users to discover recipes, connect with others, and participate in small interactive experiences such as mini-games that translated social enjoyment into both digital and real-life activities. Our focus was not only on functionality but also on creating an environment that felt lively, inclusive, and genuinely fun to use.",
    features: [
      "Create, edit, and delete recipes",
      "Explore, like, comment on, and rate other users’ recipes",
      "Search and filter recipes by ingredients and categories",
      "Manage a personal bar inventory and generate shopping lists",
      "Receive personalized cocktail recommendations",
      "Customize profiles, privacy settings, and verify accounts via email",
      "Follow step-by-step instructions with animated guidance",
      "Play single- and multiplayer mini-games to enhance community engagement"
    ],
    implementation: "The project followed an agile development approach, coordinated through Jira and GitLab. The frontend was built with Vue and Vuetify to ensure a responsive, mobile-first experience. Pinia was used for state management, providing a clean and reactive data flow between components. On the backend, we implemented NestJS with TypeORM for ORM-based database communication and Swagger for documentation and testing. Authentication and authorization were realized with JWT and bcrypt, ensuring a secure user environment.\nI contributed to both backend and frontend development. My backend responsibilities included user management, recipe and interaction handling, and image processing. On the frontend, I focused on implementing the mini-game logic and ensuring smooth integration with the backend services. Visual consistency was achieved through close collaboration with our design team in Figma, Illustrator, and InDesign.",
    learnings: "Bevry strengthened my understanding of full-stack application development, particularly the integration of secure APIs with interactive, user-centered frontends. I improved my skills in authentication design, error handling, and collaborative coding practices. Beyond technical aspects, I learned to balance usability, visual appeal, and feature scope in a team setting. The process of integrating gamification and multimedia into a social app also gave me valuable insight into user engagement and community-driven design.",
    additionalImg: ["bevry_detail.png", "bevry_detail.png"]
  },
  {
    slug: "amity",
    name: "Amity",
    img: "amity_calendar.png",
    img2: "amity_calendar.png",
    url: "https://www.amity-friends.app/",
    duration: "Oct 24 – Jan 25",
    technologies: [
      { icon: "akar-icons:angular-fill", name: "Angular" },
      { icon: "", name: "Angular Material" },
      { icon: "", name: "Bootstrap" },
      { icon: "", name: "TypeScript" },
      { icon: "file-icons:nestjs", name: "NestJS" },
      { icon: "", name: "TypeORM" },
      { icon: "lineicons:mysql", name: "MySQL" },
      { icon: "", name: "GitLab" },
      { icon: "mdi:jira", name: "Jira" },
      { icon: "solar:figma-linear", name: "Figma" }
    ],
    shortDescription: "Amity is a progressive web app that makes it easier to stay in touch with friends, plan events, and think of one another. It helps users maintain meaningful connections by combining modern design with simple, intuitive social planning tools.",
    description: "Amity was conceived as a digital companion for maintaining friendships in an increasingly fast-paced world. Together with two other students, I developed this progressive web app to simplify social coordination, event planning, and thoughtful communication. The goal was to design a friendly and modern platform that doesn’t just organize people’s time but encourages empathy and connection.\nThrough a clean and minimal interface, users can plan shared activities, receive birthday reminders, and check in with each other through gentle notifications. The app is designed to feel warm and human-centered, turning everyday interactions into intentional moments of connection.",
    features: [
      "Create, edit, and delete events",
      "Share events and confirm attendance",
      "View and manage availability via a shared calendar",
      "Receive birthday reminders and event notifications",
      "Check in with friends through push notifications",
      "Make shared predictions about future events",
      "Install as a progressive web app for a native-like experience"
    ],
    implementation: "The frontend was built with Angular, supported by Angular Material and Bootstrap for a consistent design system. As a PWA, Amity integrates installation prompts, offline capabilities, and real-time push notifications. The backend relied on NestJS with TypeORM and Swagger for structured development and maintainability. JWT and bcrypt provided authentication and security.\nMy key responsibilities included backend architecture design and implementation for user management, event creation, and prediction logic. On the frontend, I developed the calendar and event management views, ensuring seamless interaction between user actions and the backend services. The team used Figma for interface design, while GitLab and Jira supported our agile workflow and version control.",
    learnings: "Amity allowed me to refine my approach to building cohesive full-stack systems where design and functionality go hand in hand. I learned to anticipate user needs, build reliable authentication flows, and design for accessibility. The project also emphasized communication and teaching. Our small team frequently exchanged knowledge and supported each other in mastering new tools. The experience strengthened both my technical expertise and my collaborative mindset.",
    additionalImg: ["amity_calendar.png", "amity_calendar.png"]
  },
  {
    slug: "time-parabox",
    name: "Time Parabox",
    img: "time-parabox_compass.png",
    img2: "time-parabox_compass.png",
    url: "",
    duration: "Oct 24 – Jan 25",
    technologies: [
      { icon: "", name: "React Native" },
      { icon: "", name: "Expo" },
      { icon: "", name: "Bluetooth Low Energy" },
      { icon: "", name: "Blender" },
      { icon: "solar:figma-linear", name: "Figma" },
      { icon: "", name: "GitHub" },
      { icon: "mdi:jira", name: "Jira" },
      { icon: "", name: "Confluence" }
    ],
    shortDescription: "Time Parabox is a hybrid puzzle and escape game that combines a physical box equipped with sensors and a mobile app. Players are guided through an adventure across different time periods, solving challenges that blend tactile and digital interaction.",
    description: "Time Parabox was an ambitious interdisciplinary project that merged physical computing with mobile interaction. Developed by a group of ten students, the project aimed to create a hybrid escape-room experience where storytelling, hardware, and software converge. Players interact with a physical puzzle box connected via Bluetooth to a React Native mobile app, guiding them through multiple historical time periods.\nThe narrative drives players through challenges that combine real-world tactile engagement with digital logic and feedback. Each puzzle requires teamwork, observation, and curiosity, mirroring the sense of adventure found in classic escape games while leveraging modern technology for immersion.",
    features: [
      "Hybrid puzzles combining physical and digital interaction",
      "Bluetooth Low Energy communication between box and mobile app",
      "Real-time sensor data input and feedback",
      "Contextual hints and progressive guidance",
      "Story-driven gameplay with multiple historical epochs",
      "Integrated process tracking and narrative progression"
    ],
    implementation: "Development involved close coordination between hardware, software, and storytelling teams. We used Confluence and Figma to plan narrative arcs, interaction design, and puzzle structure. The frontend was developed using React Native and Expo, which enabled fast prototyping and deployment across mobile platforms. Bluetooth Low Energy was implemented for communication between the app and the microcontroller-based hardware, transmitting data such as button presses and sensor states.\nMy contribution focused on game design and storytelling: writing narrative sequences, designing puzzles, and ensuring consistency between the physical and digital elements. I also implemented core frontend logic for game progression, built 3D models in Blender, and handled 3D printing and assembly. The combination of creative and technical tasks made this project particularly enriching.",
    learnings: "Time Parabox taught me how to bridge hardware and software to create cohesive interactive experiences. I learned to manage communication across disciplines, integrate sensor data in real time, and maintain narrative coherence in a complex hybrid system. The project deepened my understanding of game logic, prototyping under pressure, and large-scale collaboration. It reinforced the importance of design thinking, planning, and iterative testing when bringing creative ideas to life.",
    additionalImg: ["time-parabox_compass.png", "time-parabox_compass.png"]
  },
  {
    slug: "print-to-mobile",
    name: "Print to Mobile",
    img: "print-to-mobile_cappucino.png",
    img2: "print-to-mobile_cappucino.png",
    url: "https://it231505-21822.php.fhstp.cc/",
    duration: "Sep 23",
    technologies: [
      { icon: "akar-icons:angular-fill", name: "Angular" },
      { icon: "", name: "Hammer.js" }
    ],
    shortDescription: "Print to Mobile is a mobile-first web app that connects coffee lovers with personalized brewing inspiration. By scanning a QR code on their purchased beans, users unlock tailored recipes that make every cup unique.",
    description: "Print to Mobile was my first Master’s project and a concise exploration of how physical and digital media can complement each other. The goal was to create a mobile-first web app that provides personalized coffee recipes by scanning QR codes printed on coffee bean packages. Each scan leads to a curated page with brewing instructions tailored to the beans’ characteristics such as roast and aroma.\nThe concept emphasizes simplicity, design clarity, and usability. It targets a hip, quality-oriented audience that appreciates convenience without sacrificing individuality or craftsmanship.",
    features: [
      "Scan QR codes to access recipe pages",
      "Display recipe suggestions for specific coffee beans",
      "Browse and extend the recipe list",
      "Follow step-by-step brewing guidance",
      "Use swipe gestures for smooth navigation"
    ],
    implementation: "The frontend was built in Angular with modular components for reusability and scalability. Hammer.js was used to implement intuitive swipe gestures, providing an app-like experience within the browser. The design was optimized for mobile screens with a focus on legibility and minimalism. This short but focused project was completed within a few weeks and served as an ideal introduction to full-cycle web development from ideation to delivery.",
    learnings: "Print to Mobile taught me the fundamentals of component-based architecture and how to combine design and technology efficiently in short development cycles. I learned to use QR code technology for user-specific access and to design clean, mobile-first navigation. The project also sharpened my sense for minimal UI design and usability under real-world constraints.",
    additionalImg: ["print-to-mobile_cappucino.png", "print-to-mobile_cappucino.png"]
  },
  {
    slug: "smart-communities",
    name: "Smart Communities – IoT4LAC",
    img: "smart-communities.png",
    img2: "smart-communities.png",
    url: "",
    duration: "Apr 24 – Jun 24",
    technologies: [
      { icon: "", name: "Grafana" },
      { icon: "mdi:react", name: "React" },
      { icon: "file-icons:d3", name: "D3.js" },
      { icon: "", name: "GitHub" }
    ],
    shortDescription: "Smart Communities – IoT4LAC is a research project focused on visualizing sensor data for local municipalities. It delivers Grafana plugins that turns complex IoT data into clear, meaningful insights through an interactive dashboard.",
    description: "This research-driven project was part of the course “Tun, Forschen, Gründen” (“Do, Research, Found”) and focused on developing a data visualization plugin for Grafana. The goal was to provide local municipalities in Lower Austria with an intuitive dashboard to analyze historical IoT sensor data. By combining multiple data attributes in one visualization, the plugin helped uncover relationships between environmental or infrastructural variables.\nThe project bridged data visualization, usability testing, and civic technology. It aimed to empower non-experts (city employees and planners) to interpret complex datasets through clear, interactive visuals.",
    features: [
      "Customizable data visualizations",
      "Attribute selection and filtering",
      "Comparative historical views",
      "Explanations and legends for clarity",
      "Structured usability test with defined tasks"
    ],
    implementation: "Initial low-fidelity prototypes were designed in Figma to explore different layout and interaction strategies. The final implementation used React and D3.js to ensure flexibility and visual expressiveness within Grafana. The plugin was designed to blend seamlessly into existing dashboards, maintaining stylistic and functional consistency.\nI was responsible for the visualization logic, data binding, and interaction design, ensuring smooth user workflows. A usability study was conducted using six task-based scenarios to evaluate the clarity and effectiveness of the design. Results were analyzed and presented in a structured evaluation report, providing actionable insights for future iterations.",
    learnings: "The project expanded my understanding of visualization usability and user-centered research. I learned to design for clarity and accessibility while working within an existing framework. Conducting real user tests offered valuable insight into how people engage with data tools, and how small changes can significantly improve interpretability and trust.",
    additionalImg: ["smart-communities.png", "smart-communities.png"]
  },
  {
    slug: "echo-chamber",
    name: "Echo Chamber",
    img: "echo-chamber.png",
    img2: "echo-chamber.png",
    url: "https://www.youtube.com/watch?v=plosh-p8mGA",
    duration: "Jun 24",
    technologies: [
      { icon: "", name: "Unity" },
      { icon: "", name: "Adobe Photoshop" },
      { icon: "", name: "Adobe Firefly" },
      { icon: "solar:figma-linear", name: "Figma" }
    ],
    shortDescription: "Echo Chamber is an immersive storytelling experience built in Unity. It tells the haunting story of a missing girl entirely through the objects, light, and atmosphere of a single room - without dialogue or narration.",
    description: "Echo Chamber was developed as part of a summer school workshop on environmental storytelling. The challenge was to design a single room that tells a complete story without dialogue or text, relying entirely on environmental cues, layout, and lighting. I chose to create a child’s bedroom that gradually reveals the tragic story of a missing girl. Through subtle details such as toys, drawings, news articles, and a small altar, the room tells a layered narrative about loss and memory.\nThe project was a deep exploration of atmosphere, emotion, and psychological storytelling through space. Every visual choice contributed to building tension and empathy without explicit exposition.",
    features: [
      "Environmental storytelling through spatial design",
      "Explorative narrative and worldbuilding",
      "Use of mood modifiers and visual traces",
      "Physical objects as narrative clues"
    ],
    implementation: "The story and visual design were planned in Figma before building the 3D environment in Unity. Posters and wall art were created using a combination of AI-generated imagery (Adobe Firefly) and hand-drawn illustrations in Photoshop. The scene used low-poly models and carefully designed lighting to evoke both innocence and unease. Object placement and color palette were meticulously tuned to guide the player’s emotional progression through the space.",
    learnings: "Echo Chamber was a powerful exercise in non-verbal storytelling and narrative design. I learned how to construct emotional resonance using composition, lighting, and environmental clues. Beyond technical skills in Unity and asset design, I developed a deeper understanding of how visual storytelling can convey complex psychological narratives in minimalistic settings.",
    additionalImg: ["echo-chamber.png", "echo-chamber.png"]
  }
]