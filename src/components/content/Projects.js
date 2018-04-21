import React, { Component } from 'react';
import { projects, art } from '../../projects';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      art: []
    };

    this.renderProject = this.renderProject.bind(this);
  }
  renderProject(project) {
    return (
      <div className="project w-33 pr3 mv3" key={project.name}>
        <h3 className="ma3">{project.name}</h3>
        {project.preview_img && (
          <div className="image">
            <img src={project.preview_img} alt={project.name} />
          </div>
        )}
        <div className="ma3">
          {project.url && (
            <a
              className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray mr1"
              href={project.url}
            >
              View
            </a>
          )}
          <a
            className="f6 link dim ph3 pv2 mb2 dib white bg-dark-gray"
            href={project.github_url}
          >
            Source
          </a>
        </div>
        <p className="ma3">{project.description}</p>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      projects: projects,
      art: art
    });
  }
  render() {
    return (
      <div>
        <div id="projects" className="bg-yellow black ph5 pv5 center">
          <div className="content">
            <h2 className="f5 ttu mb3 mh3">Projects</h2>
            <div className="projects">
              <div className="gallery flex flex-wrap mv3">
                {this.state.projects.map(project =>
                  this.renderProject(project)
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="creative" className="bg-light-blue black ph5 pv5 center">
          <div className="content">
            <h2 className="f5 ttu mb3 mh3">Creative</h2>
            <div className="projects">
              <div className="gallery flex flex-wrap mv3">
                {this.state.art.map(project => this.renderProject(project))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
