import React from "react";
import github from "../../assets/projects/github.png";
import birds from "../../assets/projects/birds.webp";
import zenjournal from "../../assets/projects/zen-journal-background.jpg";
import books from "../../assets/projects/books.jpg";
import text from "../../assets/projects/text.jpg";
import "animate.css";

export default function Projects() {
  return (
    <div className="">
      <div className="project-container">
        <div id="projects">
          <h1 className="section-title ff-secondary">Projects</h1>
        </div>
        <div className="project-carousel">
          <div className="projects ">
            <div className="project-item">
              <div className="animate__fadeIn">
                <img className="img-fluid" src={zenjournal} alt="zen journal" />
              </div>
              <div className="project-info">
                <div className="label">
                  <a
                    href="https://stark-cliffs-80324.herokuapp.com/"
                    className="deployed"
                  >
                    Daily Zen Journal
                  </a>
                  <div className="github">
                    <a
                      className="link"
                      href="https://github.com/jrob02180/my-daily-zen-journal"
                    >
                      <img src={github} alt="github" className="tinyLogo" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  This final group project is a journaling app that allows users to create
                  entries and view them in a list, while also providing daily
                  journaling prompts to help users get started. Users can also
                  edit and delete entries. This app uses authentication to allow
                  users to create accounts and log in and out and provide a safe
                  and private place to relax and reflect.
                </div>
                <div className="appsUsed">
                  <p>React.js</p>
                  <p>Node.js</p>
                  <p>Express.js</p>
                  <p>MongoDB</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects ">
            <div className="project-item">
              <div className="animate__fadeIn">
                <img className="img-fluid" src={books} alt="books" />
              </div>
              <div className="project-info">
                <div className="label">
                  <a
                    href="https://salty-mountain-70469.herokuapp.com/"
                    className="deployed"
                  >
                    I Love Books!
                  </a>
                  <div className="github">
                    <a
                      className="link"
                      href="https://github.com/jrob02180/I-love-books"
                    >
                      <img src={github} alt="github" className="tinyLogo" />
                    </a>
                  </div>
                </div>
                <div className="description">
                This app is a MERN stack app that uses Google Books API search engine to search for books and save them to a database. It was built with a RESTful API and was refactored to a GraphQL API with Apollo Server, then deployed to Heroku.
                </div>
                <div className="appsUsed">
                  <p>MERN Stack</p>
                  <p>GraphQL</p>
                  <p>Apollo</p>
                  <p>Heroku</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects ">
            <div className="project-item">
              <div className="animate__fadeIn">
                <img className="img-fluid text" src={text} alt="text-editor" />
              </div>
              <div className="project-info">
                <div className="label">
                  <a
                    href="https://murmuring-depths-54542.herokuapp.com/"
                    className="deployed"
                  >
                    Text Editor At Your Service
                  </a>
                  <div className="github">
                    <a
                      className="link"
                      href="https://github.com/jrob02180/text-editor-at-your-service"
                    >
                      <img src={github} alt="github" className="tinyLogo" />
                    </a>
                  </div>
                </div>
                <div className="description">
                This is a Progressive Web App (PWA) text editor that runs in the browser and can also be installed on the desktop. It uses an IndexedDB databse to store and retrieve data.
                </div>
                <div className="appsUsed">
                  <p>Express</p>
                  <p>Workbox</p>
                  <p>Webpack</p>
                  <p>IndexedDB</p>
                  <p>Manifest</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projects ">
            <div className="project-item">
              <div className="animate__fadeIn">
                <img className="img-fluid" src={birds} alt="birds" />
              </div>
              <div className="project-info">
                <div className="label">
                  <a
                    href="https://nlewis742.github.io/birders-anonymous/"
                    className="deployed"
                  >
                    Birders Anonymous
                  </a>
                  <div className="github">
                    <a
                      className="link"
                      href="https://github.com/jrob02180/birders-anonymous"
                    >
                      <img src={github} alt="github" className="tinyLogo" />
                    </a>
                  </div>
                </div>
                <div className="description">
                Group project: An App for birders everywhere if you need to brush up on the magical sounds of your next travel location. If you want to get familiar and feel like a pro on your first hike, bird watching in a new country, then this is the app for YOU!
                </div>
                <div className="appsUsed">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Materialize</p>
                  <p>Restful APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
