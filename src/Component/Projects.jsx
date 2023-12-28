import React from 'react';
import ProjectBox from './Project_box/ProjectBox';


const Projects = () => {
  return (
    <>

      <div className='container-fluid'>
        <div className="row">
          <div className="col-10 mx-auto">

            <div className="row">
              <div className="col-12 my-4 UnderLine">
                <h2>My Personal Projects</h2>
                <p>Projects I've constructed</p>
              </div>

             
                <ProjectBox />
              

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Projects;