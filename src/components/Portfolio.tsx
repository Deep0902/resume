import React, { useEffect } from "react";
import "./Portfolio.css";
import Lenis from "lenis";
function Portfolio() {
  useEffect(() => {
    // npm install lenis
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    // Icon navigation and scroll
    const iconContainers = document.querySelectorAll(".icon-container");
    iconContainers.forEach((container) => {
      container.addEventListener("click", () => {
        const sectionId = container.getAttribute("data-section");
        if (sectionId) {
          scrollToSection(sectionId);
        }
      });
    });
    function scrollToSection(sectionId: string) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Intersection observer for active icon
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        const iconContainer = document.querySelector(
          `.icon-container[data-section="${sectionId}"]`,
        );
        if (iconContainer) {
          if (entry.isIntersecting) {
            iconContainer.classList.add("active");
          } else {
            iconContainer.classList.remove("active");
          }
        }
      });
    }, observerOptions);
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Email button
    const emailButton = document.getElementById("email-button");
    if (emailButton) {
      emailButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "mailto:deeptank09@gmail.com";
      });
    }

    // Download resume button
    const downloadButton = document.getElementById("download-resume");
    if (downloadButton) {
      downloadButton.addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "./Deep's Resume.pdf";
        link.download = "Deep's Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }

    // Cleanup
    return () => {
      iconContainers.forEach((container) => {
        container.replaceWith(container.cloneNode(true));
      });
      if (emailButton) emailButton.replaceWith(emailButton.cloneNode(true));
      if (downloadButton)
        downloadButton.replaceWith(downloadButton.cloneNode(true));
      observer.disconnect();
    };
  }, []);

  // Helper for opening links in new tab
  function openInNewTab(url: string) {
    window.open(url, "_blank");
  }

  return (
    <body className="custom-scrollbar">
      <nav
        className="sidebar animate"
        style={{ "--delay": "2s" } as React.CSSProperties}
      >
        <div className="icons">
          <div className="icon-container" data-section="Home">
            <img src="./icons/house-heart.svg" alt="" />
            <span className="hover-text">Home</span>
          </div>
          <div className="icon-container" data-section="skill">
            <img src="./icons/code-slash.svg" alt="" />
            <span className="hover-text">Expertise</span>
          </div>
          <div className="icon-container" data-section="Experience">
            <img src="./icons/person-workspace.svg" alt="" />
            <span className="hover-text">Experience</span>
          </div>
          <div className="icon-container" data-section="certifications">
            <img src="./icons/certificate.svg" alt="" />
            <span className="hover-text">Certifications</span>
          </div>
          <div className="icon-container" data-section="Projects">
            <img src="./icons/projects.svg" alt="" />
            <span className="hover-text">Projects</span>
          </div>
          <div className="icon-container" data-section="education">
            <img src="./icons/mortarboard-fill.svg" alt="" />
            <span className="hover-text">Education</span>
          </div>
        </div>
      </nav>

      <section id="Home" className="sections mobile">
        <img
          className="animate elements"
          style={{ "--delay": "0.8s" } as React.CSSProperties}
          src="./icons/elements.svg"
          alt=""
        />
        <img
          className="animate profile-img"
          style={{ "--delay": "0.9s" } as React.CSSProperties}
          src="./icons/Image.png"
          alt=""
        />
        <div className="intro">
          <span
            className="animate"
            style={{ "--delay": "0.5s" } as React.CSSProperties}
          >
            Hello! I am
          </span>
          <h2
            className="animate"
            style={{ "--delay": "0.9s" } as React.CSSProperties}
          >
            Deep Rakesh
          </h2>
          <span
            className="animate"
            style={{ "--delay": "1.5s" } as React.CSSProperties}
          >
            Senior Frontend Engineer with 3+ years of experience in crafting
            seamless digital experiences via thoughtful design and scalable
            architecture, driven by a passion for building products that are
            elegant and effective.
          </span>
          <br />
          <button
            id="download-resume"
            className="animate"
            style={{ "--delay": "1.5s" } as React.CSSProperties}
          >
            Download my CV
          </button>
          <br />
          <div
            className="homepage-links animate"
            style={{ "--delay": "1.8s" } as React.CSSProperties}
          >
            <a href="https://www.linkedin.com/in/deeprakesh/" target="_blank">
              <img
                style={{ height: "40px" }}
                src="./icons/linkedin.svg"
                //   href="https://www.linkedin.com/in/deeprakesh/"
                alt=""
              />
            </a>
            <a href="https://github.com/Deep0902/" target="_blank">
              <img style={{ height: "45px" }} src="./icons/github.svg" alt="" />
            </a>
            <a id="email-button" href="#">
              <img style={{ height: "45px" }} src="./icons/gmail.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
      <section id="skill" className="sections">
        <h2 className="underline">Skills</h2>
        <br />
        <div className="skills-container" id="skills-container">
          <div className="skill">
            <img src="./icons/react.svg" alt="" />
            <span className="poppins-medium">React JS</span>
          </div>
          <div className="skill">
            <img src="./icons/html-5.svg" alt="" />
            <span className="poppins-medium">HTML 5</span>
          </div>
          <div className="skill">
            <img src="./icons/css-3.svg" alt="" />
            <span className="poppins-medium">CSS</span>
          </div>
          <div className="skill">
            <img src="./icons/angular.svg" alt="" />
            <span className="poppins-medium">Angular</span>
          </div>
          <div className="skill">
            <img src="./icons/figma.svg" alt="" />
            <span className="poppins-medium">Figma</span>
          </div>

          <div className="skill">
            <img src="./icons/mongodb.svg" alt="" />
            <span className="poppins-medium">Mongo DB</span>
          </div>
          <div className="skill">
            <img src="./icons/python.svg" alt="" />
            <span className="poppins-medium">Python</span>
          </div>
          <div className="skill">
            <img src="./icons/androidstudiosvg.svg" alt="" />
            <span className="poppins-medium">Android Studio</span>
          </div>
          <div className="skill">
            <img src="./icons/c.svg" alt="" />
            <span className="poppins-medium">C++</span>
          </div>
          <div className="skill">
            <img src="./icons/adobe-xd.svg" alt="" />
            <span className="poppins-medium">Adobe XD</span>
          </div>
          <div className="skill">
            <img src="./icons/after-effects.svg" alt="" />
            <span className="poppins-medium">Adobe After Effects</span>
          </div>
          <div className="skill">
            <img src="./icons/premiere pro.svg" alt="" />
            <span className="poppins-medium">Adobe Premiere Pro</span>
          </div>
        </div>
      </section>
      <section id="Experience" className="sections">
        <h2 className="underline">Experience</h2>
        <div className="experience-section">
          <div className="experience-card poppins-bold">
            <div className="progress-container">
              <div className="dot active"></div>
              <div className="line"></div>
            </div>
            <div className="experience-content">
              <span className="experience-heading">
                LTIMindtree: Senior Frontend Engineer
              </span>

              <span className="experience-about poppins-regular-italic">
                LTIMindtree is a global technology consulting and digital
                solutions company that helps enterprises innovate using digital
                technologies
              </span>
              <span className="experience-duration">
                October 2022 - Present
              </span>
              <div className="experience-details poppins-regular">
                <ul>
                  <li>
                    Built responsive applications using Reactive Forms, modular
                    architecture, and reusable components, improving UI
                    efficiency by ~20%.
                  </li>
                  <li>
                    Streamlined feature delivery and API integration by
                    implementing shared Angular component libraries and RxJS
                    workflows, accelerating development by ~25%
                  </li>
                  <li>
                    Increased application reliability by enforcing unit testing
                    with Testing Library and SonarQube quality standards,
                    improving test coverage by ~30%.
                  </li>
                  <li>
                    Developed secure, scalable frontend features using React
                    with JWT authentication, AES-encrypted APIs, rate limiting,
                    and cookie-based authorization.
                  </li>
                  <li>
                    Enhanced frontend performance through lazy loading, PWA
                    capabilities, reverse proxy configuration, and
                    performance-focused UI architecture across React and Angular
                    applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-card poppins-bold">
            <div className="progress-container">
              <div className="dot"></div>
              <div className="line active"></div>
            </div>
            <div className="experience-content">
              <span className="experience-heading">
                Finera.in: Graphic Designer Intern
              </span>
              <span className="experience-about poppins-regular-italic">
                Finera is an Indian online training platform aimed to connect
                learners to the best trainers in the world
              </span>
              <span className="experience-duration">
                {" "}
                July 2020 - September 2020{" "}
              </span>
              <div className="experience-details poppins-regular">
                <ul>
                  <li>
                    Finera provided a great opportunity to be a part of their
                    graphic design team. I had to design explanatory videos
                    using motion graphics. Software used - Adobe After Effects
                  </li>
                  <li>
                    As a result of this experience, I am now confident on
                    creating such content and encouraged to learn more about
                    this field. I also feel well-equipped to take on any role I
                    am assigned to.
                  </li>
                  <li>
                    Developed illustrative and explanatory videos using Adobe
                    After Effects and Adobe Premiere Pro, the content was
                    uploaded to their social media platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="experience-card poppins-bold">
            <div className="progress-container">
              <div className="dot"></div>
            </div>
            <div className="experience-content">
              <span className="experience-heading">
                Salver: Content Creator Intern
              </span>
              <span className="experience-about poppins-regular-italic">
                Salver, a product of Sanitizer India came up with the concept of
                a touch-free sanitizer dispenser which was distributed across
                the city.
              </span>
              <span className="experience-duration">
                {" "}
                July 2020 - August 2020{" "}
              </span>
              <div className="experience-details poppins-regular">
                <ul>
                  <li>
                    Used Adobe After Effects, Adobe Premiere Pro, and Adobe
                    Illustrator to assist the team in creating and uploading
                    exciting & attractive commercials on their social media
                    handles as a part of the advertisement.
                  </li>
                  <li>
                    Involved in discussing and coming up with new ideas about
                    promoting the product, coming up with a theme, and
                    maintaining it throughout the workplace.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <br />
      </section>
      <section id="certifications" className="sections">
        <h2 className="underline">Certifications</h2>
        <div className="certifications-container">
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.credly.com/badges/77232754-7799-49ca-8d3b-7a8bbe835e1f",
              )
            }
          >
            <img src="./icons/github.svg" alt="" />
            <span className="poppins-semibold">
              GitHub Copilot Certification
            </span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.coursera.org/account/accomplishments/certificate/M3WDJSOHN22P",
              )
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">Advanced React by Meta</span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.coursera.org/account/accomplishments/certificate/BJYD35V2S750",
              )
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">
              Introduction to Front-End Development by Meta
            </span>
          </div>

          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.udemy.com/certificate/UC-851239aa-befb-4308-9d73-70c8986e2776/",
              )
            }
          >
            <img src="./icons/udemy.svg" alt="" />
            <span className="poppins-semibold">
              User Experience Design Essentials - Adobe XD
            </span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.coursera.org/account/accomplishments/verify/VSEQ2FQ2PHHH",
              )
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">Introduction to MongoDB</span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.coursera.org/account/accomplishments/certificate/VHHEYC6JDJEJ",
              )
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">
              Programming Foundations: HTML, CSS, JavaScript
            </span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab("https://coursera.org/verify/YP1P1XZEQEKC")
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">GenAI for UX Designers</span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.coursera.org/account/accomplishments/certificate/VR7VOV5UQFPM",
              )
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">
              Introduction to Networking (NVidia)
            </span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.credly.com/badges/1c591a95-a49f-468f-8237-c08c05a5cb93/linked_in_profile",
              )
            }
          >
            <img src="./icons/microsoft.svg" alt="" />
            <span className="poppins-semibold">Azure Fundamentals</span>
          </div>

          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.coursera.org/account/accomplishments/certificate/9NYLU6U78QEP",
              )
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">
              Google Cloud Platform Fundamentals: Core Infrastructure
            </span>
          </div>
          <div
            className="certification"
            onClick={() =>
              openInNewTab(
                "https://www.coursera.org/account/accomplishments/verify/F4KIPAK7MDMF",
              )
            }
          >
            <img src="./icons/coursera.svg" alt="" />
            <span className="poppins-semibold">
              GenAI Basics - How LLMs Work
            </span>
          </div>
        </div>
      </section>
      <section id="Projects" className="sections">
        <h2 className="underline">Personal Projects</h2>
        <div className="projects-section">
          <div className="projects-card">
            <div className="project-heading">
              <img src="./icons/url-short.svg" alt="" />
              <span className="poppins-bold">ChopURL</span>
            </div>
            <div>
              <ul>
                <li>
                  Features AES-encrypted APIs, JWT authentication, and rate
                  limiting for secure user access
                </li>
                <li>
                  Implements PWA, lazy loading, and reverse proxy for optimized
                  UX and secure cookie-based auth.
                </li>
                <li>
                  Integrates robust CI/CD and branching strategy to maximize
                  uptime and deployment frequency
                </li>
              </ul>
            </div>
            <div>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#019863" }}
                onClick={() =>
                  openInNewTab("https://url-shortner-amber-pi.vercel.app/")
                }
              >
                Check it out!
              </button>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#3d3d3d" }}
                onClick={() =>
                  openInNewTab("https://github.com/Deep0902/url-shortner")
                }
              >
                Code
              </button>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#0077b5" }}
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/posts/deeprakesh_mern-webdevelopment-fullstack-activity-7366074727263629312-6ZNq?utm_source=share&utm_medium=member_desktop&rcm=ACoAACoFEikBgTRfV20JkR8nkT1C7aC7SEzR7rI",
                  )
                }
              >
                More Info
              </button>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-heading">
              <img src="./icons/personal-expense-tracker.svg" alt="" />
              <span className="poppins-bold">Personal Expense Tracker</span>
            </div>
            <div>
              <ul>
                <li>
                  Cross-device expense tracking app built with React, Flask, and
                  MongoDB.
                </li>
                <li>
                  Employs reusable component architecture ensuring mobile-first
                  responsiveness and clean codebase
                </li>
                <li>
                  Follows Agile cycles with Git version control and Miro
                  prototyping for end-to-end user journey design
                </li>
              </ul>
            </div>
            <div>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#019863" }}
                onClick={() =>
                  openInNewTab(
                    "https://deep0902.github.io/personal-expense-tracker-demo/",
                  )
                }
              >
                Check it out!
              </button>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#3d3d3d" }}
                onClick={() =>
                  openInNewTab(
                    "https://github.com/Deep0902/personal-expense-tracker",
                  )
                }
              >
                Code
              </button>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#0077b5" }}
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/posts/deeprakesh_fullstackdevelopment-pythonflask-mongodb-activity-7233375508577591297-nkqo?utm_source=share&utm_medium=member_desktop",
                  )
                }
              >
                More Info
              </button>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-heading">
              <img src="./icons/traffic.svg" alt="" />
              <span className="poppins-bold">Smart Traffic Control System</span>
            </div>
            <div>
              <ul>
                <li>
                  A prototype of automating a 4 way signal lane using IR & RF
                  sensors, Arduino Uno and LEDs.🚨
                </li>
                <li>
                  IR sensors detect the traffic density and automatically change
                  the green signal time on each lane.🛣️
                </li>
                <li>Used Python for development.🛠️</li>
              </ul>
            </div>
            <div style={{ marginTop: "auto" }}>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#3d3d3d" }}
                onClick={() =>
                  openInNewTab(
                    "https://github.com/Deep0902/personal-expense-tracker",
                  )
                }
              >
                Code
              </button>
            </div>
          </div>
          <div className="projects-card">
            <div className="project-heading">
              <img src="./icons/MeAn.png" alt="" />
              <span className="poppins-bold">MeAn - Message Analyser</span>
            </div>
            <div>
              <ul>
                <li>
                  An Android application created using basic concepts of Natural
                  Language Processing (NLP), Artificial Intelligence (AI), Java,
                  XML, and implemented with Android Studio.
                </li>
                <li>
                  A message can be passed and analyzed. The app makes a POST
                  request to the hosted server, and the detected sentiments are
                  displayed as a pie chart.
                </li>
              </ul>
            </div>
            <div style={{ marginTop: "auto" }}>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#3d3d3d" }}
                onClick={() =>
                  openInNewTab(
                    "https://github.com/Likith2000/MeAN-Android-Application",
                  )
                }
              >
                Code
              </button>
            </div>
          </div>
          {/* <div className="projects-card">
            <div className="project-heading">
              <img src="./icons/ball.svg" alt="" />
              <span className="poppins-bold">Ball-Der-Dash</span>
            </div>
            <div>
              <ul>
                <li>
                  Ball-Der-Dash is similar to dodgeball. You control a ball
                  using arrow keys to dodge falling obstacles. The difficulty
                  increases as the speed of the falling obstacles rises.
                </li>
                <li>
                  Used concepts of OpenGL which is an extensively documented 3D
                  graphics API. This game can be called a partially enhancement
                  of a previously created game.
                </li>
              </ul>
            </div>
            <div style={{ marginTop: "auto" }}>
              <button
                className="poppins-medium"
                style={{ color: "white", backgroundColor: "#3d3d3d" }}
                onClick={() =>
                  openInNewTab("https://github.com/Deep0902/CGV-Mini-Project")
                }
              >
                Code
              </button>
            </div>
          </div> */}
        </div>
      </section>
      <section id="education" className="sections">
        <h2 className="underline">Education</h2>
        <div className="experience-section">
          <div
            className="experience-card poppins-bold"
            style={{ color: "#08528c" }}
          >
            <div className="progress-container">
              <div className="dot"></div>
              <div className="line active"></div>
            </div>
            <div className="experience-content">
              <span>
                Bachelor of Engineering: Computer Science - 2018 to 2022
              </span>
              <span className="poppins-regular">
                BMS Institute of Technology & Management, Bangalore
              </span>
            </div>
          </div>
          <div
            className="experience-card poppins-bold"
            style={{ color: "#08528c" }}
          >
            <div className="progress-container">
              <div className="dot"></div>
              <div className="line active"></div>
            </div>
            <div className="experience-content">
              <span>Senior Secondary Education - 2016 to 2018</span>
              <span className="poppins-regular">
                Air Force School Hebbal, Bangalore
              </span>
            </div>
          </div>
          <div
            className="experience-card poppins-bold"
            style={{ color: "#08528c" }}
          >
            <div className="progress-container">
              <div className="dot"></div>
            </div>
            <div className="experience-content">
              <span>Junior High School - 2005 to 2016</span>
              <span className="poppins-regular">
                Air Force School Hebbal, Bangalore
              </span>
            </div>
          </div>
        </div>
        <br />
        <h2 className="underline">Interests</h2>
        <div className="interests-section">
          <div className="interest-card">
            <img src="./icons/piano.svg" alt="" />
            <span>&nbsp;Piano</span>
          </div>
          <div className="interest-card">
            <img src="./icons/guitar.svg" alt="" />
            <span>Guitar</span>
          </div>
          <div className="interest-card">
            <img src="./icons/animation.svg" alt="" />
            <span>&nbsp;Motion Graphics</span>
          </div>
          <div className="interest-card">
            <img src="./icons/football.svg" alt="" />
            <span>&nbsp;Football</span>
          </div>
          <div className="interest-card">
            <img src="./icons/basketball.svg" alt="" />
            <span>&nbsp;Basketball</span>
          </div>
          <div className="interest-card">
            <img src="./icons/table-tennis.svg" alt="" />
            <span>&nbsp;Table Tennis</span>
          </div>
        </div>
      </section>
      <div className="footer">
        <div className="textBlock">
          <div className="textSection">
            <label className="poppins-semibold">About</label>
            <br />
            <span className="poppins-regular">
              This is a basic webpage that is used mainly to showcase my updated
              CV
            </span>
          </div>
          <div className="textSection">
            <label className="poppins-semibold">Quick Links</label>
            <br />
            <span className="poppins-regular">
              <ul>
                <li>
                  <a
                    href="https://github.com/Deep0902"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/deeprakesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:deeptank09@gmail.com">Send me an Email</a>
                </li>
              </ul>
            </span>
          </div>
          <div className="textSection">
            <label className="poppins-semibold">Project Info</label>
            <br />
            <span className="poppins-regular">
              This project is made using HTML, CSS, JavaScript and deployed on
              Github <br />
              <br />
              It is a personal project and not for commercial use
            </span>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </body>
  );
}
export default Portfolio;
