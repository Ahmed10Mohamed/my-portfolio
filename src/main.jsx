import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Ahmed M Bakri',
  role: 'Senior PHP Backend Developer',
  location: 'Bani Sweif, Egypt',
  email: 'ahmed.bakrigis@gmail.com',
  phones: ['+20 101 589 1836', '+20 114 967 1770'],
  summary:
    'I build the backend foundation behind mobile apps, dashboards, marketplaces, ERP tools, education platforms, clinics, taxi systems, and corporate websites.',
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/ahmedmbakri' },
    { label: 'GitHub', url: 'https://github.com/Ahmed10Mohamed' },
    { label: 'X', url: 'https://x.com/AhmedBa09504743?t=_2WkOoj7YxBII9aEcZh7HA&s=09' },
    { label: 'Email', url: 'mailto:ahmed.bakrigis@gmail.com' },
  ],
};

const navItems = [
  ['Home', '#home'],
  ['Profile', '#profile'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Work', '#portfolio'],
  ['Contact', '#contact'],
];

const heroSlides = [
  { image: '/assets/profile/profile.jpg', label: 'Senior Backend Developer' },
  { image: '/assets/screens/7.png', label: 'Ziydia Product System' },
  { image: '/assets/screens/16.png', label: 'Dashboard Experiences' },
  { image: '/assets/screens/8.png', label: 'E-commerce Platforms' },
  { image: '/assets/profile/hero-bg.jpg', label: 'Production Architecture' },
];

const stats = [
  [8, '+', 'Years Experience'],
  [100, '+', 'Published Projects'],
  [150, '+', 'Apps & Websites'],
  [98, '%', 'API Focus'],
];

const services = [
  ['API Architecture', 'REST APIs, Laravel modules, authentication, roles, and clean backend contracts.'],
  ['Admin Systems', 'Dashboards, reporting, order management, CMS workflows, and ERP control panels.'],
  ['Integrations', 'Payments, maps, delivery, mobile apps, notifications, and external service APIs.'],
  ['Optimization', 'Database tuning, security hardening, CI/CD, testing, and production support.'],
];

const contactMethods = [
  {
    label: 'Email',
    value: profile.email,
    url: `mailto:${profile.email}`,
  },
  {
    label: 'WhatsApp',
    value: '+20 101 589 1836',
    url: 'https://wa.me/201015891836',
  },
  {
    label: 'WhatsApp',
    value: '+20 114 967 1770',
    url: 'https://wa.me/201149671770',
  },
  {
    label: 'LinkedIn',
    value: 'ahmedmbakri',
    url: 'https://linkedin.com/in/ahmedmbakri',
  },
  {
    label: 'GitHub',
    value: 'Ahmed10Mohamed',
    url: 'https://github.com/Ahmed10Mohamed',
  },
  {
    label: 'Wuzzuf',
    value: 'Ahmed Bakri Profile',
    url: 'https://wuzzuf.net/me/Ahmed-Bakri-22cdc7fc83?utm_medium=other&utm_source=referral',
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Responsive UI/UX'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Node.js', 'RESTful APIs', 'Authentication & Authorization'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Query Optimization', 'Indexing'],
  },
  {
    title: 'DevOps',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS EC2', 'AWS S3', 'AWS RDS', 'Nginx'],
  },
  {
    title: 'Architecture',
    items: ['Microservices', 'Clean Architecture', 'SOLID Principles'],
  },
  {
    title: 'Testing',
    items: ['PHPUnit', 'Jest', 'Integration Testing', 'Laravel Dusk', 'API Testing'],
  },
  {
    title: 'Performance',
    items: ['Caching', 'Queues', 'Load Optimization', 'Scalability'],
  },
  {
    title: 'Team Skills',
    items: ['Agile', 'Code Reviews', 'Mentoring', 'Technical Leadership'],
  },
];

const experiences = [
  {
    role: 'TeamLead Backend Developer',
    company: 'handOne Company',
    location: 'Remote',
    period: '11/2023 - 05/2026',
    highlights: [
      'Led a backend engineering team delivering scalable, secure, high-availability Laravel platforms for thousands of concurrent users.',
      'Designed and optimized advanced MySQL structures, reducing query latency by 25% and improving data consistency.',
      'Oversaw API architecture, development, documentation, and integration across REST-based services.',
      'Directed payment gateway integrations with 99%+ successful transactions and improved checkout flow.',
      'Enforced Clean Code, SOLID, and architectural best practices, reducing production bugs by 30%.',
      'Mentored developers through structured sessions, contributing to two developer promotions.',
    ],
  },
  {
    role: 'Senior Backend Developer',
    company: 'Astro Company',
    location: 'Remote',
    period: '11/2023 - 04/2024',
    meta: 'Part-Time',
    highlights: [
      'Spearheaded backend development for high-traffic PHP and Laravel applications.',
      'Optimized MySQL schemas and queries, improving response times by 25%.',
      'Ensured seamless API integration with frontend teams across web and mobile platforms.',
      'Led payment gateway integration improvements, reaching a 99% transaction success rate.',
    ],
  },
  {
    role: 'Senior Backend Developer',
    company: 'ALWessam Company',
    location: 'Remote',
    period: '08/2022 - 10/2023',
    meta: 'Full-Time',
    highlights: [
      'Directed backend development for scalable Laravel web applications.',
      'Reduced database query times by 30% through refactoring and optimization.',
      'Mentored a team of 5 developers and promoted code quality best practices.',
      'Implemented testing protocols with PHPUnit and Laravel Dusk, reducing production bugs by 40%.',
    ],
  },
  {
    role: 'Senior Backend Developer',
    company: 'Matrix Cloud',
    location: 'Cairo, Egypt',
    period: '07/2019 - 08/2022',
    highlights: [
      'Architected scalable RESTful APIs and backend services using Laravel for high-traffic applications.',
      'Applied SOLID principles, clean architecture, and design patterns for maintainable codebases.',
      'Improved performance using MySQL indexing, query optimization, Redis caching, queues, events, and workers.',
      'Implemented authentication and authorization using JWT, OAuth2, Passport, and Sanctum.',
      'Automated deployment pipelines with Docker, GitHub Actions, and AWS services.',
      'Built monitoring, logging, and alerting with Sentry, CloudWatch, and custom pipelines.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Progmine Company',
    location: 'Cairo, Egypt',
    period: '01/2019 - 06/2019',
    highlights: [
      'Contributed to backend feature development aligned with project requirements.',
      'Supported API development and database tasks using Laravel backend workflows.',
    ],
  },
  {
    role: 'Junior PHP Developer',
    company: 'BSS Group / We Oryx Company',
    location: 'Bani Sweif, Egypt',
    period: '02/2018 - 01/2019',
    highlights: [
      'Assisted senior developers in delivering backend features using PHP and Laravel.',
      'Built practical experience with APIs, databases, and server operations.',
    ],
  },
];

const projects = [
  {
    title: '3Minute | Taxi',
    type: 'Applications',
    image: 'https://play-lh.googleusercontent.com/jRiNcoBAJNW145nsCtTRpMDbk6pHEXN7Q4zp35UTmCffAmPtohfPYlEJu52Rcr__lQ',
    description: 'Taxi platform with customer and driver applications.',
    tags: ['Taxi', 'Mobile', 'Realtime'],
    links: [
      ['User App', 'https://play.google.com/store/apps/details?id=com.fullscreen.taxi'],
      ['Driver App', 'https://play.google.com/store/apps/details?id=com.fullscreen.driver'],
    ],
  },
  {
    title: 'FitoverfaT',
    type: 'Applications',
    image: 'https://play-lh.googleusercontent.com/RzuYDRfOnKGu0QVcJxJfLyfiYwUt9ybP6RsMvY2R7FQYPwtnisMjQjW7zzA164TXW9s',
    description: 'Healthcare mobile experience for clinics and patients.',
    tags: ['Clinic', 'Healthcare', 'Mobile'],
    links: [['Application', 'https://play.google.com/store/apps/details?id=com.fofclinic']],
  },
  {
    title: 'PME Real Estate',
    type: 'Applications',
    image: 'https://play-lh.googleusercontent.com/oAyCRc5w0cxdfV7YZdxOZx2EVFCDjyAvtGb9_emRQ9ieuwPtUgBcAqO0TAriR7BCBCO_',
    description: 'Real estate app for property discovery and client inquiries.',
    tags: ['Real Estate', 'Listings', 'Mobile'],
    links: [['Application', 'https://play.google.com/store/apps/details?id=com.pmerealestate.app']],
  },
  {
    title: 'Herfy for Slaughtered Animals',
    type: 'Applications',
    image: 'https://play-lh.googleusercontent.com/AIllcAtFQ_RYw3aokMGkhJkk4umllTWPJLbxnU8LzzzGvv_lkLP1Bjx-63OPXTIQ_JFz',
    description: 'Mobile commerce product for meat and animal ordering.',
    tags: ['Commerce', 'Orders', 'Mobile'],
    links: [['Application', 'https://play.google.com/store/apps/details?id=com.matrixclouds.herfy']],
  },
  {
    title: 'Ziydia',
    type: 'Website & Applications',
    image: 'https://play-lh.googleusercontent.com/2XbXqfd1NApWXxQzDYV5Bsc1Gw1g5lJeBYB1-DJxq6SLOSCUi0SUArep4xSZQKLfKMc',
    description: 'Connected website and mobile app with backend integrations.',
    tags: ['Website', 'Application', 'API'],
    links: [
      ['Website', 'https://ziydia.com/'],
      ['Application', 'https://play.google.com/store/apps/details?id=com.ziydia.app'],
    ],
  },
  {
    title: 'Nyroz Flowers',
    type: 'Website & Applications',
    image: 'https://play-lh.googleusercontent.com/BEoHT4R31mGYstCao6hPR00W3lY5Cpteu_aofHNeV6rBLvhLTtyeELrEQu9CEFtQ3N4',
    description: 'Flowers e-commerce platform with app and web ordering.',
    tags: ['E-commerce', 'Catalog', 'Orders'],
    links: [
      ['Website', 'https://nyrozflowers.com/'],
      ['Application', 'https://play.google.com/store/apps/details?id=com.matrixclouds.nyroz'],
    ],
  },
  {
    title: 'Al Khalaf Sheep',
    type: 'Website & Applications',
    image: 'https://play-lh.googleusercontent.com/BSlnjB9tBt9CBmhFTdfo7C53SNih_2jdQ7Fzvjq2UwB_iF6oy9cBLYq58WOa0GB6YYY',
    description: 'Livestock e-commerce website and mobile application.',
    tags: ['E-commerce', 'Delivery', 'Payments'],
    links: [
      ['Website', 'https://alkhalfsheep.com/'],
      ['Application', 'https://play.google.com/store/apps/details?id=com.matrixclouds.alkhalafsheep&hl=en'],
    ],
  },
  {
    title: 'City Scanner',
    type: 'Website & Applications',
    image: 'https://play-lh.googleusercontent.com/o2ER68EBLhHbfw6aVGKZYsMYDukQ9sqNwGjw2e0jNVhNxtzf2h3Un2meHbx0r9CUBD1dcofJTorfu9JC1l4nSQ',
    description: 'City scanning platform with public web, core dashboard, and mobile app.',
    tags: ['Dashboard', 'Mobile', 'Web'],
    links: [
      ['Website', 'https://cityscanner.io/index'],
      ['Core', 'https://core.cityscanner.io/'],
      ['Application', 'https://play.google.com/store/apps/details?id=com.madar.citys'],
    ],
  },
  ...[
    ['Baran PT Center', 'https://erp.baranptcenter.com/', 'erp.baranptcenter.com', 'ERP and operational management platform.'],
    ['Egy Finance Jobs', 'https://egyfinancejobs.com/', 'egyfinancejobs.com/', 'Egy Finance Jobs'],
    ['Tersana SC', 'https://www.tersana-sc.com/', 'tersana-sc.com', 'Sports club website with content management.'],
    ['School of Business', 'https://schoolofbusiness.net/', 'schoolofbusiness.net', 'Business education website.'],
    ['5 Quarters Edu', 'https://5quartersedu.com/', '5quartersedu.com', 'Education website and institution presence.'],
    ['Egyptians Abroad', 'https://www.egyptiansabroad.news/', 'egyptiansabroad.news', 'News and publishing website.'],
    ['Sadany Khalifa', 'https://sadanykhalifa.com/en', 'sadanykhalifa.com', 'Corporate multilingual website.'],
    ['Steel Tech EG', 'https://steeltecheg.com/', 'steeltecheg.com', 'Industrial company website.'],
    ['Visa in Kuwait', 'https://visainkuwait.com/', 'visainkuwait.com', 'Visa services website.'],
    ['Linker Pub', 'https://linker-pub.com/', 'linker-pub.com', 'Publishing platform and API-backed web experience.'],
    ['Haiatna', 'https://haiatna.com/', 'haiatna.com', 'Public website with service pages.'],
  ].map(([title, url, domain, description]) => ({
    title,
    type: 'Website',
    image: `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
    description,
    tags: ['Website', 'CMS', 'Business'],
    links: [['Website', url]],
  })),
];

const portfolioTypes = ['All', 'Applications', 'Website & Applications', 'Website'];

function useReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = navItems.map(([, href]) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function useThemeMode() {
  const [mode, setMode] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.dataset.themeMode = mode;
    localStorage.setItem('portfolio-theme', mode);
  }, [mode]);

  return [mode, setMode];
}

function AnimatedNumber({ value, suffix }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let frameId;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const startedAt = performance.now();
      const tick = (time) => {
        const progress = Math.min((time - startedAt) / 1200, 1);
        setCurrent(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frameId = requestAnimationFrame(tick);
      };
      frameId = requestAnimationFrame(tick);
      observer.disconnect();
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <strong ref={ref}>
      {current}
      {suffix}
    </strong>
  );
}

function AppLoader() {
  return (
    <div className="appLoader" role="status" aria-live="polite">
      <div className="loaderShell">
        <div className="loaderMark">
          <span>AMB</span>
          <i />
          <i />
          <i />
        </div>
        <div className="loaderContent">
          <small>Portfolio System</small>
          <strong>Preparing a premium experience</strong>
          <p>Loading projects, skills, and backend case studies...</p>
          <div className="loaderProgress">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const active = useActiveSection();
  const [themeMode, setThemeMode] = useThemeMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`siteHeader ${mobileMenuOpen ? 'menuOpen' : ''}`}>
      <a className="brandMark" href="#home" aria-label="Ahmed M Bakri home">
        AMB
      </a>
      <nav aria-label="Main navigation" id="main-navigation">
        {navItems.map(([label, href]) => (
          <a className={active === href.slice(1) ? 'active' : ''} href={href} key={href} onClick={() => setMobileMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="headerCta" href="https://my-cv.ahmed-bakrigis.workers.dev" target="_blank" rel="noreferrer">
        CV
      </a>
      <div className="themeSwitcher" aria-label="Theme mode">
        <button
          aria-label="Light mode"
          className={themeMode === 'light' ? 'active' : ''}
          onClick={() => setThemeMode('light')}
          type="button"
        >
          <span aria-hidden="true">☀</span>
        </button>
        <button
          aria-label="Dark mode"
          className={themeMode === 'dark' ? 'active' : ''}
          onClick={() => setThemeMode('dark')}
          type="button"
        >
          <span aria-hidden="true">☾</span>
        </button>
      </div>
      <button
        aria-controls="main-navigation"
        aria-expanded={mobileMenuOpen}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        className="mobileMenuButton"
        onClick={() => setMobileMenuOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="heroMedia" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img className={index === activeSlide ? 'active' : ''} key={slide.image} src={slide.image} alt="" />
        ))}
      </div>
      <div className="mesh" aria-hidden="true" />

      <div className="heroInner">
        <div className="heroCopy" data-reveal>
          <span className="kicker">Senior Backend Developer</span>
          <h1>Backend systems that make products feel fast, stable, and ready to scale.</h1>
          <p>{profile.summary}</p>
          <div className="heroActions">
            <a className="btn primary" href="#portfolio">
              Explore Work
            </a>
            <a className="btn ghost" href={`mailto:${profile.email}`}>
              Start a Project
            </a>
          </div>
        </div>

        <aside className="heroCommand" data-reveal>
          <div className="commandTop">
            <span />
            <span />
            <span />
          </div>
          <div className="commandBody">
            <small>Current slide</small>
            <strong>{heroSlides[activeSlide].label}</strong>
            <div className="slideControls">
              {heroSlides.map((slide, index) => (
                <button
                  aria-label={`Show ${slide.label}`}
                  className={index === activeSlide ? 'active' : ''}
                  key={slide.label}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                >
                  <span />
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="statsDock" data-reveal>
        {stats.map(([value, suffix, label]) => (
          <div key={label}>
            <AnimatedNumber value={value} suffix={suffix} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="section profileSection" id="profile" data-reveal>
      <div className="sectionHead">
        <span className="kicker">Profile</span>
        <h2>Backend engineer for products that need to stay reliable after launch.</h2>
        <p>
          I turn business workflows into secure APIs, optimized databases, clean admin controls, and integrations
          that web and mobile teams can depend on.
        </p>
      </div>

      <div className="profileGrid">
        <figure className="portraitCard">
          <img src="/assets/profile/avatar.jpg" alt={profile.name} />
          <figcaption>
            <span>Available</span>
            <strong>Full-time & freelance backend work</strong>
          </figcaption>
        </figure>

        <div className="valueGrid">
          {services.map(([title, text], index) => (
            <article key={title} style={{ '--delay': `${index * 70}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section skillsSection" id="skills" data-reveal>
      <div className="sectionHead">
        <span className="kicker">Skill Highlights</span>
        <h2>Full-stack backend-focused skill set for modern production platforms.</h2>
        <p>
          Skills grouped by frontend, backend, databases, DevOps, architecture, testing, performance, and team
          leadership.
        </p>
      </div>

      <div className="skillBoard">
        {skillGroups.map((group, index) => (
          <article key={group.title} style={{ '--delay': `${index * 90}ms` }}>
            <div className="skillBoardHead">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skillTags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section experienceSection" id="experience" data-reveal>
      <div className="sectionHead">
        <span className="kicker">Experience</span>
        <h2>Professional experience across leadership, architecture, and production delivery.</h2>
        <p>
          A timeline of backend roles focused on Laravel platforms, API systems, payment integrations, performance,
          testing, mentoring, and scalable production infrastructure.
        </p>
      </div>

      <div className="experienceTimeline">
        {experiences.map((job, index) => (
          <article className="experienceItem" key={`${job.company}-${job.period}`} style={{ '--delay': `${index * 70}ms` }}>
            <div className="experienceMarker">
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="experienceCard">
              <div className="experienceHead">
                <div>
                  <h3>{job.role}</h3>
                  <p>
                    {job.company} | {job.location}
                    {job.meta ? ` | ${job.meta}` : ''}
                  </p>
                </div>
                <strong>{job.period}</strong>
              </div>
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const shownProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.type === filter)),
    [filter],
  );

  function changeFilter(type) {
    setFilter(type);
    setLoading(true);
    window.setTimeout(() => setLoading(false), 360);
  }

  return (
    <section className="section portfolioSection" id="portfolio" data-reveal>
      <div className="sectionHead">
        <span className="kicker">Selected Work</span>
        <h2>Live products grouped for fast client review.</h2>
        <p>Use the filters to scan applications, web and app platforms, or business websites with direct links.</p>
      </div>

      <div className="portfolioTabs" role="tablist" aria-label="Portfolio filters">
        {portfolioTypes.map((type) => {
          const count = type === 'All' ? projects.length : projects.filter((project) => project.type === type).length;
          return (
            <button className={filter === type ? 'active' : ''} key={type} onClick={() => changeFilter(type)} type="button">
              <span>{type}</span>
              <strong>{count}</strong>
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="projectGrid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="projectSkeleton" key={index} />
          ))}
        </div>
      ) : (
        <div className="projectGrid">
          {shownProjects.map((project, index) => (
            <article className="projectCard" key={project.title} style={{ '--delay': `${index * 45}ms` }}>
              <div className="projectVisual">
                <img src={project.image} alt={`${project.title} logo`} />
                <span>{project.type}</span>
              </div>
              <div className="projectContent">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tagRow">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="linkRow">
                  {project.links.map(([label, url]) => (
                    <a href={url} key={url} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section contactSection" id="contact" data-reveal>
      <div className="contactIntro">
        <span className="kicker">Contact</span>
        <h2>Let us talk about your next backend, API, dashboard, or platform.</h2>
        <p>
          Send a quick message through email, WhatsApp, LinkedIn, or GitHub. I am available for full-time roles,
          freelance projects, and technical collaboration.
        </p>
      </div>

      <div className="contactGrid">
        {contactMethods.map((method) => (
          <a href={method.url} key={`${method.label}-${method.value}`} target="_blank" rel="noreferrer">
            <span>{method.label}</span>
            <strong>{method.value}</strong>
          </a>
        ))}
      </div>

      <div className="contactActions">
        <a href="/assets/docs/my_cv.pdf" target="_blank" rel="noreferrer">
           Download CV
        </a>
        <a href="/assets/docs/Latest Links Portfolio.pdf" target="_blank" rel="noreferrer">
          Portfolio PDF
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} Ahmed M Bakri. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

function App() {
  const [booting, setBooting] = useState(true);
  useReveal();

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {booting && <AppLoader />}
      <Header />
      <main>
        <Hero />
        <ProfileSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
