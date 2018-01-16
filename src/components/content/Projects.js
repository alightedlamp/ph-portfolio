// @format
import React, {Component} from 'react';
import {projects} from '../../projects';

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="bg-yellow black ph5-l pv5-l">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Not Art</h3>
          <div className="gallery flex flex-wrap mv3">
            {projects.map(project => {
              return (
                <div className="project w-25 pr3 mv3" key={project.name}>
                  <h3>{project.name}</h3>
                  <div className="image">
                    <img src={project.preview_img} alt={project.name} />
                  </div>
                  <p>{project.description}</p>
                  <p>
                    <a href={project.github_url}>Source</a>
                    <br />
                    <a href={project.url}>View</a>
                  </p>
                </div>
              );
            })}
          </div>
          <h3>Art</h3>
          <div>
            <p>Here is where some art goes</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
