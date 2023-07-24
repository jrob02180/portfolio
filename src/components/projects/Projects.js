import React from 'react';
import WOW from 'wowjs';
import github from '../../assets/projects/github-mark.png';
import eatspeaklove from '../../assets/projects/eat-speak-love-screenshot.png';
import owl from '../../assets/projects/owl.webp';
import password from '../../assets/projects/password.png';
import weather from '../../assets/projects/weather-dashboard-screenshot.png';
import workday from '../../assets/projects/workday-scheduler-screenshot.png';
import zenjournal from '../../assets/projects/zenjournal.PNG';

export default function Projects() {
    return (
        <div className="">
            <div className="project-container">
                <div id='projects'>
                    <h1 className="section-title ff-secondary">Projects</h1>
                    {/* <h1 className="mb-5">My Favorite Projects</h1> */}
                </div>
                <div className="project-carousel">
                    <div className="projects fadeInUp">
                        <div className="project-item">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={zenjournal} alt="zen journal"/>
                            </div>
                            <div className="label">
                            <h5 a href= "https://stark-cliffs-80324.herokuapp.com/" className="">Daily Zen Journal</h5>
                            <div className="">
                                <a className="btn" href="https://github.com/jrob02180/my-daily-zen-journal">
                                <img src={github} alt="github" className="tinyLogo" />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects fadeInUp">
                        <div className="project-item">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={zenjournal} alt="zen journal"/>
                            </div>
                            <div className="label">
                            <h5 a href= "https://stark-cliffs-80324.herokuapp.com/" className="">Daily Zen Journal</h5>
                            <div className="">
                                <a className="btn" href="https://github.com/jrob02180/my-daily-zen-journal">
                                <img src={github} alt="github" className="tinyLogo" />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects fadeInUp">
                        <div className="project-item">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={zenjournal} alt="zen journal"/>
                            </div>
                            <div className="label">
                            <h5 a href= "https://stark-cliffs-80324.herokuapp.com/" className="">Daily Zen Journal</h5>
                            <div className="">
                                <a className="btn" href="https://github.com/jrob02180/my-daily-zen-journal">
                                <img src={github} alt="github" className="tinyLogo" />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects fadeInUp">
                        <div className="project-item">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={zenjournal} alt="zen journal"/>
                            </div>
                            <div className="label">
                            <h5 a href= "https://stark-cliffs-80324.herokuapp.com/" className="">Daily Zen Journal</h5>
                            <div className="">
                                <a className="btn" href="https://github.com/jrob02180/my-daily-zen-journal">
                                <img src={github} alt="github" className="tinyLogo" />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects fadeInUp">
                        <div className="project-item">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={zenjournal} alt="zen journal"/>
                            </div>
                            <div className="label">
                            <h5 a href= "https://stark-cliffs-80324.herokuapp.com/" className="">Daily Zen Journal</h5>
                            <div className="">
                                <a className="btn" href="https://github.com/jrob02180/my-daily-zen-journal">
                                <img src={github} alt="github" className="tinyLogo" />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects fadeInUp">
                        <div className="project-item">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={zenjournal} alt="zen journal"/>
                            </div>
                            <div className="label">
                            <h5 a href= "https://stark-cliffs-80324.herokuapp.com/" className="">Daily Zen Journal</h5>
                            <div className="">
                                <a className="btn" href="https://github.com/jrob02180/my-daily-zen-journal">
                                <img src={github} alt="github" className="tinyLogo" />
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


