const RESUME_URL = "/resume/Yasir_Hussain_Resume.pdf";
const EMAIL = "yasirhussain1996@gmail.com";
const PHONE = "+91 97173 10486";
const PHONE_HREF = "tel:+919717310486";

const projects = [
  {
    index: "01",
    image: "/projects/credaxis.png",
    title: "CredAxis",
    type: "Digital credit",
    description:
      "Backend for a digital credit and financial platform. Customer, application, and admin workflows, with authentication, validation, and secure API communication.",
    stack: ["PHP", "Laravel", "MySQL", "MongoDB", "REST APIs"],
    url: "https://www.mycredaxis.com/",
    label: "CredAxis digital credit platform",
  },
  {
    index: "02",
    image: "/projects/finaxis.png",
    title: "FinAxis",
    type: "Financial services",
    description:
      "Backend modules and REST APIs for a financial services platform, including customer and admin processes, validation, deployment, and production support.",
    stack: ["Laravel", "PHP", "MySQL", "MongoDB", "AWS"],
    url: "https://finaxis.co.in/",
    label: "FinAxis financial services platform",
  },
  {
    index: "03",
    image: "/projects/rathyatra.png",
    title: "Rathyatra",
    type: "Hotel booking",
    description:
      "Hotel booking platform for rooms, availability, customers, and reservations, with a centralized admin panel and deployment on AWS.",
    stack: ["PHP", "Laravel", "MySQL", "REST APIs", "AWS"],
    url: "https://www.rathyatra.net/",
    label: "Rathyatra hotel booking application",
  },
  {
    index: "04",
    image: "/projects/jetfly.png",
    title: "JetFly Airways",
    type: "Travel and tourism",
    description:
      "Travel website with an admin panel for pages, travel information, and enquiries, plus auth, CRUD APIs, and AWS deployment.",
    stack: ["PHP", "Laravel", "MySQL", "REST APIs", "AWS"],
    url: "https://jetflyairways.com/",
    label: "JetFly Airways travel website",
    imagePosition: "left center",
  },
  {
    index: "05",
    image: "/projects/commerce.png",
    title: "E-commerce, MLM & Billing CRM",
    type: "Commerce",
    description:
      "Backend for e-commerce, multi-level marketing, billing, and CRM: products, orders, commissions, payments, and admin workflows.",
    stack: ["Laravel", "MySQL", "REST APIs", "RBAC", "Payments"],
    label: "E-commerce, MLM, and billing CRM platform",
  },
  {
    index: "06",
    image: "/projects/woo.png",
    title: "WordPress & WooCommerce",
    type: "Online store",
    description:
      "Store sites with themes, plugins, product management, online payments, and backend workflows customized for the business.",
    stack: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
    label: "WordPress and WooCommerce solutions",
  },
];

const roles = [
  {
    dates: "Mar 2026 – Present",
    title: "Laravel Backend Developer",
    company: "Bisani Brothers Private Limited",
    place: "Lucknow",
    points: [
      "Design and maintain production Laravel applications with PHP, MySQL, and REST APIs, focused on scalability, security, and performance.",
      "Build backend modules for financial technology, digital credit, and financial service platforms: customer operations, application workflows, and admin tools.",
      "Implement Laravel MVC structure — controllers, models, services, middleware, validation, authentication, authorization, and RBAC.",
      "Design MySQL and MongoDB schemas, relationships, indexes, and queries, and ship secure APIs for web, mobile, and third-party systems.",
      "Deploy and support live environments on AWS, and debug production issues with frontend developers and the rest of the team.",
    ],
  },
  {
    dates: "Jul 2025 – Mar 2026",
    title: "Backend Developer",
    company: "Kanakdrishti Infotech",
    place: "Noida",
    points: [
      "Built and maintained e-commerce, MLM, billing, and CRM platforms in PHP and Laravel.",
      "Delivered REST APIs, MySQL schemas, authentication, authorization, and role-based access.",
      "Integrated payment gateways and transaction workflows, plus customer, order, billing, and MLM modules.",
      "Debugged and optimized existing modules, and used Git for branching, reviews, and team workflows.",
    ],
  },
  {
    dates: "May 2024 – Apr 2025",
    title: "Associate Software Developer",
    company: "Code Optimal Solutions",
    place: "Amritsar",
    points: [
      "Developed Laravel applications: controllers, models, services, validation, authentication, and RBAC.",
      "Designed MySQL schemas and REST plus third-party APIs, and built interfaces with Blade, HTML, CSS, JavaScript, and Bootstrap.",
      "Customized WordPress and WooCommerce, including product management and online payments.",
      "Joined Agile sprints, code reviews, testing, and deployment, and supported junior developers.",
    ],
  },
  {
    dates: "Dec 2022 – May 2023",
    title: "Salesforce CRM Training",
    company: "Ducat IT Training School",
    place: "Noida",
    points: [
      "Practical training in Salesforce Sales Cloud, Service Cloud, and core CRM functionality.",
      "Hands-on work with Apex, Visualforce, process automation, and Lightning Components.",
      "Data modeling, reporting, and dashboard creation.",
    ],
  },
];

const skillGroups = [
  { title: "Languages", items: ["PHP", "JavaScript", "HTML5", "CSS3", "SQL"] },
  { title: "Frameworks", items: ["Laravel", "Node.js", "WordPress", "WooCommerce", "Bootstrap", "MVC"] },
  { title: "Backend", items: ["REST APIs", "API integration", "Auth & RBAC", "Validation", "Middleware", "Payment gateways"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "Schema design", "Indexing", "Query optimization"] },
  { title: "Cloud", items: ["AWS", "Server configuration", "Deployment", "Production support"] },
  { title: "Practice", items: ["Git", "GitHub", "Postman", "VS Code", "Agile", "Code review", "Debugging"] },
];

const education = [
  ["Master of Computer Application (MCA)", "Veer Kunwar Singh University", "2020–2023"],
  ["Bachelor of Science (B.Sc), Mathematics", "Veer Kunwar Singh University", "2015–2018"],
  ["Intermediate (Class 12)", "Al-Hafeez College", "2013–2015"],
];

const ticker = ["Laravel", "PHP", "REST APIs", "MySQL", "MongoDB", "Node.js", "AWS", "WordPress"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function siteHost(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

function ProjectFrame({
  image,
  alt,
  host,
  position = "top center",
}: {
  image: string;
  alt: string;
  host: string;
  position?: string;
}) {
  return (
    <span className="browser">
      <span className="browser-bar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{host}</span>
      </span>
      <span className="browser-shot">
        <img src={image} alt={alt} style={{ objectPosition: position }} />
      </span>
    </span>
  );
}

export default function App() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="eyebrow reveal">
          Backend developer
          <span className="eyebrow-place">Lucknow , India</span>
        </div>
        <div className="hero-portrait">
          <img src="/my-profile-img.jpg" alt="Yasir Hussain" />
        </div>
        <div className="hero-cluster">
          <h1 className="hero-title">
            <span className="reveal">I build backends</span>
            <span className="reveal hero-title-indent">
              <i>in Laravel and Node.js</i>
            </span>
            <span className="reveal">for production.</span>
          </h1>
          <div className="hero-row">
            <p>
              Laravel and Node.js developer from Lucknow, building production web apps, REST APIs, and system
              integrations. I also build e-commerce, CRM, billing, and WordPress systems.
            </p>
          </div>
        </div>
        <a className="circle-link" href="#work" aria-label="Scroll to selected work">
          <span>Selected work</span>
          <span className="circle-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span className="ticker-set" key={copy}>
              {ticker.map((item) => (
                <span key={`${copy}-${item}`}>
                  {item}
                  <b aria-hidden="true" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="work-section" id="work">
        <header className="section-head">
          <p>Selected work</p>
          <h2>Platforms I’ve helped ship.</h2>
        </header>

        <div className="projects">
          {projects.map((project) => {
            const live = "url" in project ? project.url : undefined;
            const frame = (
              <ProjectFrame
                image={project.image}
                alt={live ? "" : project.label}
                host={live ? siteHost(live) : "Client work"}
                position={"imagePosition" in project ? project.imagePosition : undefined}
              />
            );

            return (
              <article className="project" key={project.title}>
                <div className="project-board">
                  <div className="project-copy">
                    <div>
                      <div className="project-kicker">
                        <span className="project-index">{project.index}</span>
                        <p className="project-type">{project.type}</p>
                        <span className={live ? "project-live" : "project-live project-live--quiet"}>
                          {live ? "Live" : "Private"}
                        </span>
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>
                    <div className="project-foot">
                      <div className="project-stack">
                        <span className="project-stack-label">Stack</span>
                        <ul className="tech-list" aria-label={`Technologies used on ${project.title}`}>
                          {project.stack.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      {live ? (
                        <a className="project-cta" href={live} target="_blank" rel="noreferrer">
                          View live site <Arrow />
                        </a>
                      ) : null}
                    </div>
                  </div>
                  {live ? (
                    <a className="project-visual" href={live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                      {frame}
                    </a>
                  ) : (
                    <div className="project-visual">{frame}</div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <header className="section-head">
          <p>Experience</p>
          <h2>Where I’ve worked.</h2>
        </header>
        <div className="roles">
          {roles.map((role) => (
            <article className="role" key={role.company}>
              <div>
                <p className="project-type">{role.dates}</p>
                <h3>{role.company}</h3>
                <p className="role-place">{role.place}</p>
              </div>
              <div>
                <p className="role-title">{role.title}</p>
                <ul className="role-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-sticky">
          <p className="section-label">About</p>
          <div className="portrait">
            <img src="/my-profile-img.jpg" alt="Portrait of Yasir Hussain" />
            <span>Lucknow, India</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I’m Yasir Hussain, a backend developer with 3+ years building{" "}
            <i>production-ready</i> Laravel and Node.js applications.
          </p>
          <div className="about-notes">
            <p>
              The work covers financial platforms, digital credit, hotel booking, travel sites, e-commerce, CRM,
              MLM, billing, and business-management tools — PHP, Laravel, MySQL, MongoDB, REST APIs, auth, RBAC,
              payment gateways, and third-party integrations.
            </p>
            <p>
              I deploy and support live apps on AWS, use Git and Agile, and work with frontend developers,
              designers, QA, and other stakeholders to turn requirements into maintainable backend systems.
            </p>
          </div>

          <div className="edu-block">
            <p className="section-label">Education</p>
            <div className="edu-list">
              {education.map(([credential, school, years]) => (
                <div className="edu" key={credential}>
                  <div>
                    <h3>{credential}</h3>
                    <p>{school}</p>
                  </div>
                  <span>{years}</span>
                </div>
              ))}
            </div>
            <p className="lang-line">
              <span>Languages</span>
              English, Hindi, Urdu, Dutch
            </p>
          </div>

          <a className="text-link" href={RESUME_URL} download="Yasir_Hussain_Resume.pdf">
            Download resume <Arrow />
          </a>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <header className="section-head">
          <p>Technical skills</p>
          <h2>Stack I use on the job.</h2>
        </header>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div>
            <p className="footer-kicker">Contact</p>
            <a className="footer-name" href="#top">
              Yasir Hussain
            </a>
            <p className="footer-role">Backend developer · Laravel and Node.js · Lucknow</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${EMAIL}`}>
              <span>Email</span>
              {EMAIL}
            </a>
            <a href={PHONE_HREF}>
              <span>Phone</span>
              {PHONE}
            </a>
            <a href={RESUME_URL} download="Yasir_Hussain_Resume.pdf">
              <span>Resume</span>
              Download PDF
            </a>
          </div>
        </div>
        <div className="footer-bar">
          <p>© {new Date().getFullYear()} Yasir Hussain</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/imyasirrr" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/imyasirr" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.axionsofts.com" target="_blank" rel="noreferrer">
              Website
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
