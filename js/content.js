/* ==========================================================================
   CONTENT.JS · EVERYTHING YOU MIGHT WANT TO EDIT LIVES IN THIS FILE
   ==========================================================================
   How to use this file:
   - Each section of the site reads from one of the blocks below.
   - To add a project, experience entry, or skill, copy an existing object
     in the matching list, paste it next to the others, and edit the text.
   - Keep the commas between objects. If the page goes blank after an edit,
     you most likely removed a comma, quote, or bracket.
   - Plain text only. If you need an ampersand or quotes inside a string,
     they are fine as-is.
   ========================================================================== */

window.CONTENT = {

  /* ------------------------------------------------------------------
     ABOUT · the paragraphs on the left side of the About section.
     Each string in the list becomes one paragraph, in order.
     ------------------------------------------------------------------ */
  aboutParagraphs: [
    "I started in Hyderabad, India, with a B.Tech in Computer Science and Engineering at Jawaharlal Nehru Technological University Hyderabad. Before graduating, I co-authored a machine learning research paper on medical prediction systems, which was my first taste of taking an idea from a whiteboard sketch to something reviewers could poke at.",
    "In 2023 I moved to Germany for a joint Master's in Artificial Intelligence and Data Science between Technische Hochschule Deggendorf and the University of South Bohemia. That path led me to Volkswagen, where I interned as a data scientist and then wrote my thesis as a generative AI developer, building hybrid RAG systems over real enterprise data and learning what retrieval quality actually means when people depend on the answers.",
    "Today I work at Lindner Group as an AI Engineer and AI Strategist focused on technical enablement: prototyping new AI capabilities, from voice agents to MCP tooling, and helping the company adopt the ones that earn their place. I get genuinely excited by new AI technology, I prototype fast but like to understand things deeply, and I care most about turning research into things people actually use."
  ],

  /* ------------------------------------------------------------------
     ABOUT · the small "quick facts" panel on the right.
     Each entry has a label and a value.
     ------------------------------------------------------------------ */
  quickFacts: [
    { label: "Based in", value: "Munich, Germany" },
    { label: "Languages", value: "English (professional) · German (B2) · Telugu (native) · Hindi (fluent)" },
    { label: "Current focus", value: "GenAI · MCP · RAG · voice agents · LLM evaluation" }
  ],

  /* ------------------------------------------------------------------
     NOW · the "live lab notebook" section.
     - intro appears under the section heading.
     - outro appears after the cards.
     - The FIRST card in the list is the flagship: it renders larger and
       shows the "steps" row if you provide one.
     - status can be anything short: "Prototype", "Pilot", "Production",
       "Integrated", "Research"...
     - statusTone controls the badge color: "teal" (active/shipped-ish)
       or "neutral" (early/exploratory).
     ------------------------------------------------------------------ */
  now: {
    intro: "A running log of what I'm currently prototyping at Lindner Group as an AI Engineer and AI Strategist: technical enablement, applied GenAI, and turning research into working systems.",
    outro: "I like starting from a rough prototype and being the person who pushes it toward production, figuring out what breaks at scale and fixing it.",
    cards: [
      {
        title: "Voice AI ordering agent",
        problem: "Ordering a Bauschutt (construction waste) container normally requires a customer support person on the phone.",
        built: "A real-time, speech-to-speech voice AI agent that handles the entire order over a live voice call. It sounds like a natural conversation, not a rigid phone menu: the model talks with the caller while custom MCP tools execute each step of the order behind the scenes.",
        steps: ["Caller speaks", "Speech-to-speech model", "MCP tool executes the order step", "Order confirmed"],
        tags: ["WebRTC", "real-time speech-to-speech", "OpenAI realtime voice model", "Python · custom MCP tools per order step", "Node.js", "React", "Keycloak auth"],
        status: "Pilot",
        statusTone: "teal"
      },
      {
        title: "Baurecht MCP integration",
        problem: "Our internal GenAI chat assistant needed reliable access to German building law (Baurecht) knowledge.",
        built: "Integrated a Baurecht MCP server into our internal OpenWebUI-based GenAI chat platform, extending what the assistant can reliably answer for colleagues.",
        tags: ["MCP", "OpenWebUI", "internal LLM tooling"],
        status: "Integrated",
        statusTone: "teal"
      },
      {
        title: "Scouting the newest AI capabilities",
        problem: "The field moves weekly. Someone has to separate what is genuinely useful from what is just a demo.",
        built: "I research and evaluate the latest AI technologies, then test how they could be incorporated into day-to-day work across the company, from tool use patterns to retrieval approaches.",
        tags: ["internal LLM", "tool use", "retrieval"],
        status: "Research / evaluation",
        statusTone: "neutral"
      },
      {
        title: "LLM video summarizer with speaker diarization",
        problem: "Long meeting and video recordings are hard to search or skim.",
        built: "A pipeline that takes a YouTube link or any video or audio file and produces a full summary, a timestamped transcript, and speaker-attributed highlights: who said what, and when. Migrated it from external models to an internally hosted LLM and Whisper running on our own GPU infrastructure.",
        tags: ["Pyannote · speaker diarization", "Whisper", "self-hosted LLM on internal GPUs"],
        status: "Prototype · fully self-hosted",
        statusTone: "neutral"
      }
    ]
  },

  /* ------------------------------------------------------------------
     EXPERIENCE · vertical timeline, most recent first.
     "current: true" highlights the entry as the present role.
     ------------------------------------------------------------------ */
  experience: [
    {
      role: "Data Scientist & AI Strategist, App Development",
      company: "Lindner Group",
      location: "Passau, Germany",
      period: "Nov 2025 – Present",
      current: true,
      summary: "Contributing to AI-powered internal application systems, scalable architecture design, ML model integration, and data workflow optimization to improve automation, efficiency, and decision support across the business."
    },
    {
      role: "Generative AI Developer · Master's thesis",
      company: "Volkswagen AG",
      location: "Wolfsburg, Germany",
      period: "Feb 2025 – Nov 2025",
      summary: "Built a hybrid RAG chatbot assistant for Volkswagen Confluence data using BM25+DPR, BM25+SBERT, and BM25+GTR retriever combinations. Integrated PostgreSQL with pgvector for dense retrieval, built an async in-memory data extraction and deduplication pipeline, and used Hugging Face Transformers alongside OpenAI's text embedding model. Evaluated with RAGAS and standard IR metrics, and designed a modular Gradio UI with retriever selection, alpha weighting, and ranking visualizations."
    },
    {
      role: "Data Scientist Intern",
      company: "Volkswagen AG",
      location: "Wolfsburg, Germany",
      period: "Aug 2024 – Feb 2025",
      summary: "Analyzed business requirements, contributed to system architecture, built dynamic Power BI dashboards, and trained teams on the AI tools available to them."
    },
    {
      role: "Research Assistant",
      company: "JNTU Hyderabad",
      location: "Hyderabad, India",
      period: "Oct 2021 – Apr 2022",
      summary: "Co-authored 'A decision support tool for medical prediction systems using multiplex machine learning techniques', presented at the International Conference on Computational Intelligence and Sustainable Development, 2022. The system combined Naive Bayes, ID3 decision trees, and compact weighted associative classification behind a simple web interface."
    }
  ],

  /* ------------------------------------------------------------------
     PROJECTS · academic and personal projects (the smaller grid).
     ------------------------------------------------------------------ */
  projects: [
    {
      title: "US notifiable-disease surveillance analysis, 1888 to 2013",
      description: "Exploratory analysis and visualization of 125 years of weekly US disease surveillance records from the Project Tycho dataset, tracing outbreaks and the impact of vaccine introductions state by state.",
      tags: ["R", "Tidyverse", "ggplot2", "dplyr", "plotly", "usmap", "Project Tycho"]
    },
    {
      title: "Iris-based biometric recognition & authentication",
      description: "A computer vision system that recognizes and authenticates people by iris patterns, using DLIB for facial structure detection and ORB feature matching for authentication, wrapped in a simple GUI.",
      tags: ["Computer vision", "DLIB", "ORB", "Python GUI"]
    },
    {
      title: "Flight price prediction",
      description: "Compared machine learning algorithms for airline ticket price accuracy and deployed the best-performing model as a small web app with Flask.",
      tags: ["Machine learning", "scikit-learn", "Flask"]
    }
  ],

  /* ------------------------------------------------------------------
     SKILLS · grouped tag clusters.
     ------------------------------------------------------------------ */
  skills: [
    {
      group: "Languages",
      items: ["Python", "R", "C", "C++", "Java", "SQL", "HTML", "CSS", "Node.js", "React"]
    },
    {
      group: "AI/ML & data",
      items: ["RAG", "GenAI", "LLMs", "NLP", "Machine Learning", "Deep Learning", "Computer Vision", "Data Analysis", "Data Visualization", "PyTorch", "TensorFlow", "Vector databases", "PostgreSQL + pgvector", "FastAPI"]
    },
    {
      group: "Cloud & infra",
      items: ["AWS", "Microsoft Azure", "Red Hat OpenShift", "Kubernetes", "Docker", "DevOps", "MLOps"]
    },
    {
      group: "Tools & platforms",
      items: ["Power BI", "Power Apps", "Jira", "Confluence", "SAP S/4HANA integration", "OutSystems"]
    },
    {
      group: "Currently exploring",
      items: ["Real-time voice agents", "Agentic MCP tooling", "Production LLMOps"]
    }
  ],

  /* ------------------------------------------------------------------
     EDUCATION
     ------------------------------------------------------------------ */
  education: [
    {
      degree: "M.Sc. Artificial Intelligence and Data Science · joint degree",
      school: "Technische Hochschule Deggendorf & University of South Bohemia",
      period: "Mar 2023 – Present",
      note: "Thesis at Volkswagen AG on hybrid retrieval-augmented generation over enterprise data."
    },
    {
      degree: "B.Tech Computer Science and Engineering",
      school: "Jawaharlal Nehru Technological University Hyderabad",
      period: "Jul 2018 – Jul 2022",
      note: "Co-authored a machine learning research paper on medical prediction systems."
    }
  ],

  /* ------------------------------------------------------------------
     PUBLICATIONS
     ------------------------------------------------------------------ */
  publications: [
    {
      title: "A decision support tool for medical prediction systems using multiplex machine learning techniques",
      venue: "International Conference on Computational Intelligence and Sustainable Development, 2022",
      summary: "Combines Naive Bayes, ID3 decision trees, and compact weighted associative classification behind a simple web interface for medical prediction."
    }
  ]

};
