/**
 * Amir Faysal Portfolio - Full Interactive Engine
 */

// Data definitions matching src/App.tsx
const SKILL_DATA = {
  "Product Strategy": {
    desc: "Defining long-term product vision, value propositions, and aligning them with business goals.",
    pillars: ["Vision Alignment", "Product Positioning", "Growth Mapping"]
  },
  "Digital Scaling": {
    desc: "Architecting growth engines to scale products from early adopters to mass market.",
    pillars: ["Infrastructure Scaling", "Market Expansion", "Growth Hacking"]
  },
  "Roadmapping": {
    desc: "Crafting agile, outcome-driven product roadmaps based on strategic themes and timelines.",
    pillars: ["Theme-based Planning", "Prioritization Matrices", "Milestone Management"]
  },
  "Market Analysis": {
    desc: "Continuous intelligence gathering, competitive benchmarking, and identifying blue ocean opportunities.",
    pillars: ["Competitive Research", "Trend Forecasting", "TAM/SAM Calculation"]
  },
  "Agile & SCRUM": {
    desc: "Leading cross-functional delivery teams, optimizing velocity, and maintaining robust product backlogs.",
    pillars: ["Sprint Planning", "Velocity Optimization", "Backlog Grooming"]
  },
  "Data-Driven Decisions": {
    desc: "Leveraging product analytics, SQL metrics, and event tracking to direct product lifecycle phases.",
    pillars: ["Funnel Analysis", "Cohort Analysis", "Event Instrumentation"]
  },
  "A/B Testing": {
    desc: "Formulating hypotheses, designing randomized controlled trials, and interpreting statistical relevance.",
    pillars: ["Hypothesis Testing", "Sample Size Planning", "Statistical Significance"]
  },
  "KPI Monitoring": {
    desc: "Establishing operational dashboards to keep core business and system performance metrics healthy.",
    pillars: ["North Star Metric", "LTV:CAC Ratios", "Retention Dashboards"]
  },
  "User Research": {
    desc: "Uncovering behavioral patterns and core pain points through qualitative and quantitative methods.",
    pillars: ["User Interviews", "Usability Testing", "Survey Design"]
  },
  "CX Design": {
    desc: "Designing frictionless customer journeys that turn complex user flows into intuitive experiences.",
    pillars: ["Journey Mapping", "Friction Point Removal", "Service Blueprints"]
  },
  "Product-Led Growth": {
    desc: "Engineering viral loops, self-serve onboarding, and self-reinforcing product networks.",
    pillars: ["Self-Serve Onboarding", "Viral Engines", "Value Realization Time"]
  },
  "Retention Optimization": {
    desc: "Analyzing drop-off funnels and building personalized engagement loops to lock in customer lifetime value.",
    pillars: ["Churn Reduction", "Habit Loops", "Re-engagement Triggers"]
  },
  "AI Agent Design": {
    desc: "Designing autonomous agent loops, sensory interfaces, and goal-directed systems using modern LLM APIs.",
    pillars: ["ReAct Framework", "Tool Integration", "Agent Orchestration"]
  },
  "Prompt Engineering": {
    desc: "Crafting and fine-tuning programmatic instructions for LLMs using few-shot, chain-of-thought, and self-consistency structures.",
    pillars: ["Few-Shot Prompting", "Chain-of-Thought", "System Prompt Design"]
  },
  "Workflow Automation": {
    desc: "Mapping organizational bottlenecks and writing automated, event-driven pipelines that eliminate human overhead.",
    pillars: ["API Integrations", "State Machine Automations", "Trigger-Action Pipelines"]
  },
  "LLM Integration": {
    desc: "Architecting zero-latency server integrations with advanced models like Gemini Flash via robust server-side proxies.",
    pillars: ["Token Optimization", "Streaming Responses", "Structured JSON Outputs"]
  }
};

const TIMELINE_DATA = [
  {
    role: "Product Executive",
    company: "Shareviral",
    period: "May 2026 — Present",
    location: "📍 San Jose, CA · Remote",
    bullets: [
      "Own product roadmap end-to-end: user research → prioritization → launch → iteration",
      "Drive data-informed decisions with metrics, experiments, and analytics to improve growth & retention",
      "Lead cross-functional collaboration between engineering, design, and growth teams"
    ]
  },
  {
    role: "Product Executive",
    company: "Programming Hero",
    period: "Aug 2025 — May 2026",
    location: "📍 Dhaka, Bangladesh · Hybrid",
    bullets: [
      "Drove product strategy and execution for next-gen learning platforms",
      "Collaborated with cross-functional teams to deliver high-quality, impactful features",
      "Analyzed user feedback and market trends to continuously improve product offerings"
    ]
  },
  {
    role: "Technical Product Lead",
    company: "Genzam IT",
    period: "Aug 2024 — July 2025",
    location: "📍 Palma Campania, Italy · Remote",
    bullets: [
      "Led product requirements for European client SaaS platforms",
      "Managed stakeholder expectations across timezone differences",
      "Defined technical scope and delivery timelines for multi-tenant B2B apps"
    ]
  },
  {
    role: "Product Developer",
    company: "Studio Alterity",
    period: "May 2024 — Aug 2024",
    location: "📍 Khulna, Bangladesh · Onsite",
    bullets: [
      "Translated client requirements into actionable sprint deliverables",
      "Conducted user acceptance testing and feedback loops",
      "Managed product backlog and sprint planning for rapid iteration"
    ]
  },
  {
    role: "Product Consultant",
    company: "EU Support",
    period: "Sep 2023 — Apr 2024",
    location: "📍 Poland · Remote",
    bullets: [
      "Consulted on product workflows for European business clients",
      "Identified automation opportunities to streamline business processes",
      "Delivered product specs aligned with EU compliance requirements"
    ]
  },
  {
    role: "Junior Product Lead",
    company: "Renix Lab Ltd",
    period: "Nov 2021 — July 2023",
    location: "📍 Dhaka, Bangladesh · Remote",
    bullets: [
      "Scoped e-commerce platform features from concept to deployment",
      "Coordinated between designers and developers for pixel-perfect delivery",
      "Tracked product metrics and user behavior to inform iteration cycles"
    ]
  },
  {
    role: "Associate Product",
    company: "LSKIT",
    period: "Jan 2021 — Aug 2021",
    location: "📍 Khulna, Bangladesh · Onsite",
    bullets: [
      "Assisted in product feature scoping and QA documentation",
      "Gathered user feedback to inform early product decisions",
      "Supported sprint execution and backlog grooming"
    ]
  }
];

const CERT_DATA = [
  {
    title: "Complete Web Development Bootcamp",
    issuedBy: "Programming Hero",
    type: "DEV",
    credentialId: "PH-CWD-2024-819",
    date: "Dec 2024",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Next Level Web Development",
    issuedBy: "Programming Hero",
    type: "DEV",
    credentialId: "PH-NLWD-2025-442",
    date: "May 2025",
    skills: ["TypeScript", "Next.js", "Redux", "PostgreSQL", "Prisma", "Docker", "Mongoose"]
  },
  {
    title: "Reactive Accelerator",
    issuedBy: "Learn with Sumit",
    type: "DEV",
    credentialId: "LWS-RA-2024-118",
    date: "Aug 2024",
    skills: ["React.js", "State Management", "Performance Optimization", "Clean Code"]
  },
  {
    title: "Data Structure & Algorithm in C++",
    issuedBy: "Phitron",
    type: "DEV",
    credentialId: "PH-DSA-2023-902",
    date: "Nov 2023",
    skills: ["C++", "Data Structures", "Algorithms", "Problem Solving", "Memory Management"]
  },
  {
    title: "Product Management Fundamentals",
    issuedBy: "Bohubrihi",
    type: "PROD",
    credentialId: "BH-PMF-2023-104",
    date: "Mar 2023",
    skills: ["Product Strategy", "User Stories", "Wireframing", "Roadmapping", "Scrum"]
  },
  {
    title: "Advanced Product Strategy",
    issuedBy: "Keeron",
    type: "PROD",
    credentialId: "KR-APS-2023-559",
    date: "Jun 2023",
    skills: ["Product Metrics", "Growth Hacking", "Go-To-Market", "Retention Loops"]
  }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function openLightbox(src, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');

  if (modal && img && cap) {
    img.src = src;
    cap.textContent = caption;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Hero Stat Counters
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 1800;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      counter.textContent = Math.floor(easeOut * target) + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    };

    setTimeout(() => { requestAnimationFrame(updateCounter); }, 700);
  });

  // 2. Custom Animated Mouse Cursor (Dot + Trailing Ring)
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const cursorGlow = document.getElementById('cursorGlow');

  if (cursorDot && cursorRing) {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let ringX = mouseX, ringY = mouseY;
    let glowX = mouseX, glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      if (cursorGlow) {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;
      }

      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Expand cursor ring when hovering interactive elements
    const interactiveEls = document.querySelectorAll('a, button, .cert-item, .gallery-card, .award-card, .victory-card, .comp-skill-item, .t-pill, .side-nav-btn, .timeline-item');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
    });
  }

  // 3. Interactive Competencies Inspector
  const skillItems = document.querySelectorAll('.comp-skill-item');
  const inspectorTitle = document.getElementById('inspectorTitle');
  const inspectorDesc = document.getElementById('inspectorDesc');
  const inspectorPillars = document.getElementById('inspectorPillars');

  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const skillName = item.getAttribute('data-skill');
      const data = SKILL_DATA[skillName];
      if (!data) return;

      skillItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      inspectorTitle.textContent = skillName;
      inspectorDesc.textContent = data.desc;

      inspectorPillars.innerHTML = data.pillars.map((p, idx) => `
        <div class="pillar-row">
          <span class="p-num">0${idx + 1}</span>
          <span>${p}</span>
        </div>
      `).join('');
    });
  });

  // 4. Interactive Career Timeline Switcher
  const timelineItems = document.querySelectorAll('.timeline-item');
  const rolePeriod = document.getElementById('rolePeriod');
  const roleTitle = document.getElementById('roleTitle');
  const roleCompany = document.getElementById('roleCompany');
  const roleBullets = document.getElementById('roleBullets');

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      const data = TIMELINE_DATA[idx];
      if (!data) return;

      timelineItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      rolePeriod.textContent = `${data.period} • ${data.location}`;
      roleTitle.textContent = data.role;
      roleCompany.textContent = data.company;

      roleBullets.innerHTML = data.bullets.map((b, bIdx) => `
        <div class="bullet-row">
          <span class="b-idx">[0${bIdx + 1}]</span>
          <p>${b}</p>
        </div>
      `).join('');
    });
  });

  // 5. Synchronized Certificate Bar & Auto-Loop Animation
  const certItems = document.querySelectorAll('.cert-item');
  const certViewer = document.getElementById('certViewer');
  const certTypeBadge = document.getElementById('certTypeBadge');
  const certDate = document.getElementById('certDate');
  const certIssuer = document.getElementById('certIssuer');
  const certTitle = document.getElementById('certTitle');
  const certId = document.getElementById('certId');
  const certSkills = document.getElementById('certSkills');

  let activeCertIdx = 0;
  let certTimerId = null;
  let progressStartTime = null;
  let isCertHovered = false;
  const LOOP_DURATION = 4000; // 4 seconds per certificate

  // Add progress bar to each cert-item
  certItems.forEach(item => {
    let pBar = item.querySelector('.cert-progress');
    if (!pBar) {
      pBar = document.createElement('div');
      pBar.className = 'cert-progress';
      item.appendChild(pBar);
    }
  });

  const animateCertProgress = (timestamp) => {
    if (isCertHovered) {
      // Pause progress while hovered
      progressStartTime = timestamp - progressElapsed;
      certTimerId = requestAnimationFrame(animateCertProgress);
      return;
    }

    if (!progressStartTime) progressStartTime = timestamp;
    var progressElapsed = timestamp - progressStartTime;
    const percentage = Math.min((progressElapsed / LOOP_DURATION) * 100, 100);

    const activeItem = certItems[activeCertIdx];
    if (activeItem) {
      const pBar = activeItem.querySelector('.cert-progress');
      if (pBar) pBar.style.width = `${percentage}%`;
    }

    if (progressElapsed < LOOP_DURATION) {
      certTimerId = requestAnimationFrame(animateCertProgress);
    } else {
      // EXACT 100% reached -> Trigger Next Certificate!
      const nextIdx = (activeCertIdx + 1) % CERT_DATA.length;
      updateCertViewer(nextIdx);
    }
  };

  const updateCertViewer = (idx) => {
    if (certTimerId) cancelAnimationFrame(certTimerId);

    // Reset all progress bars
    certItems.forEach(i => {
      const pb = i.querySelector('.cert-progress');
      if (pb) pb.style.width = '0%';
      i.classList.remove('active');
    });

    const data = CERT_DATA[idx];
    if (!data) return;

    activeCertIdx = idx;
    if (certItems[idx]) certItems[idx].classList.add('active');

    if (certViewer) {
      certViewer.style.opacity = '0.3';
      certViewer.style.transform = 'translateY(8px)';
      certViewer.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

      setTimeout(() => {
        certTypeBadge.textContent = data.type;
        certTypeBadge.className = `c-type-badge ${data.type.toLowerCase()}`;
        certDate.textContent = data.date;
        certIssuer.textContent = data.issuedBy;
        certTitle.textContent = data.title;
        certId.textContent = data.credentialId;
        certSkills.innerHTML = data.skills.map(s => `<span class="c-skill-tag">${s}</span>`).join('');

        certViewer.style.opacity = '1';
        certViewer.style.transform = 'translateY(0)';
      }, 120);
    }

    // Start progress fill animation for active card
    progressStartTime = null;
    certTimerId = requestAnimationFrame(animateCertProgress);
  };

  certItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-cert'), 10);
      updateCertViewer(idx);
    });
  });

  const certSection = document.getElementById('certificates-section');
  if (certSection) {
    certSection.addEventListener('mouseenter', () => { isCertHovered = true; });
    certSection.addEventListener('mouseleave', () => { isCertHovered = false; });
  }

  // Initial call to start looping cert 0
  updateCertViewer(0);

  // 6. Navigation Link & Side Dot Active Tracker on Scroll
  const sectionIds = ['hero', 'competencies-section', 'timeline-section', 'techstack-section', 'certificates-section', 'startup-section', 'awards-section'];
  const sideDots = {
    'hero': document.getElementById('dot-hero'),
    'competencies-section': document.getElementById('dot-competencies'),
    'timeline-section': document.getElementById('dot-timeline'),
    'techstack-section': document.getElementById('dot-techstack'),
    'certificates-section': document.getElementById('dot-certificates'),
    'startup-section': document.getElementById('dot-startup'),
    'awards-section': document.getElementById('dot-awards')
  };

  window.addEventListener('scroll', () => {
    let current = 'hero';
    const scrollY = window.pageYOffset;

    sectionIds.forEach(id => {
      const sec = document.getElementById(id);
      if (sec) {
        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          current = id;
        }
      }
    });

    Object.keys(sideDots).forEach(id => {
      if (sideDots[id]) {
        if (id === current) sideDots[id].classList.add('active');
        else sideDots[id].classList.remove('active');
      }
    });
  });

  // 7. Site-wide Scroll Reveal Stagger Animations
  const animTargets = document.querySelectorAll('.comp-category, .timeline-item, .tech-card, .cert-item, .startup-card, .award-card, .victory-card, .gallery-card, .contact-box');
  animTargets.forEach(el => el.classList.add('scroll-reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animTargets.forEach(el => observer.observe(el));

  // 8. Email Copy Toast
  const emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'amir.faysal@example.com';
      navigator.clipboard.writeText(email).then(() => {
        let toast = document.querySelector('.toast');
        if (!toast) {
          toast = document.createElement('div');
          toast.className = 'toast show';
          toast.textContent = 'Email address copied to clipboard!';
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 3500);
        }
      });
    });
  }

  // Keyboard support for Lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
