import React from 'react';
import '../styles/projects.scss';

const Projects = () => {
    return (
        <section className="project-page" style={{width: '78%', margin: 'auto' }} >
            <h2>Projects </h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... </p>
            <div className="flex-row space-between" >
                <div className="first-container" >
                    <img />
                    <span><strong>Instagram Copy</strong></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="second-container">
                    <img />
                    <span><strong>Boginoo</strong></span>
                    <p>Amet aliquam id diam maecenas ultricies mi eget. </p>
                </div>
                <div className="third-container" >
                    <img/>
                    <span><strong>Firebase doc</strong></span>
                    <p>Amet aliquam id diam maecenas ultricies mi eget.</p>

                </div>
                <div className="fourth-container" >
                    <img/>
                    <span><strong>Firebase doc</strong></span>
                    <p>Amet aliquam id diam maecenas ultricies mi eget.</p>

                </div>
            </div>
        </section>
    )
}
export default Projects;