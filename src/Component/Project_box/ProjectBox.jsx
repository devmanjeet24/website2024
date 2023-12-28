import React from 'react'
import data from './ProjectData.json';
import './Project.css';
import { FaArrowRightLong } from "react-icons/fa6";


const ProjectBox = () => {
  return (
    <>

      {
        data && data.map(record => {
          return (

            <div className="col-md-6 my-4">
              <div className='Project_box' key={record.id}>
                <img src={record.Image} alt={record.DataImage} className='img-fluid' />
                <div className='ProjectBox_content'>
                  <p className="Project_name">{record.Projectname}</p>
                  <p className='Project_description'>{record.description}</p>
                  <p className='Technology'>{record.Tech.html}</p>
                  <p className='SeeLive'><a href={record.ProjectUrl}>See Live <span><FaArrowRightLong /></span></a></p>
                </div>
              </div>
            </div>

          )
        })
      }


    </>
  )
}

export default ProjectBox;