import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='px-[10vw]'>
      <h1>Projects</h1>
      <div className='grid grid-cols-10 grid-rows-8 gap-6'>
        <div className='col-span-7 row-span-3 bg-project-skillbridge h-[50vh]  bg-cover rounded-lg flex flex-col justify-end items-end'>
          <ProjectItem title={''} tags={['Mobile', 'Prototyping', 'User Experience']} description={''} link={''} />
        </div>
        <div className='col-span-3 row-span-3 rounded-lg bg-project-admin-skillbridge  bg-no-repeat bg-[length:100%_100%] flex flex-col justify-end items-end'>
          <ProjectItem title={''} tags={['Mobile', 'Prototyping', 'User Experience']} description={''} link={''} />
        </div>
        <div className='col-span-5 row-span-3 bg-project-rateeat rounded-lg flex flex-col justify-end items-end'>
          <ProjectItem title={''} tags={['Mobile', 'Prototyping', 'User Experience']} description={''} link={''} />
        </div>
        <div className='col-span-5 row-span-3 bg-project-portal rounded-lg flex flex-col justify-end items-end'>
          <ProjectItem title={''} tags={['Mobile', 'Prototyping', 'User Experience']} description={''} link={''} />
        </div>
        <div className='col-span-4 row-span-2 bg-project-arifone bg-[length:100%_100%] flex flex-col justify-end items-end'>
          <ProjectItem title={''} tags={['Mobile', 'Prototyping', 'User Experience']} description={''} link={''} />
        </div>
        <div className='col-span-4 row-span-2 bg-project-landing bg-[length:100%_100%] flex flex-col justify-end items-end'>
          <ProjectItem title={''} tags={['Mobile', 'Prototyping', 'User Experience']} description={''} link={''} />
        </div>
      </div>
    </div>
  )
}

export default Projects