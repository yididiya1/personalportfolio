import React from 'react'



type ProjectItemType = {
    title:String,
    description:String,
    link:String,
    tags: Array<String>,
}

const ProjectItem = ({title,description,link,tags}:ProjectItemType) => {
  return (
    <div className='flex flex-col  justify-end align-bottom self-end h-[30vh] p-10'>
         
        <div className=''>
            <p className='font-semibold text-3xl mb-3'>SkillBridge</p>
            <div className='flex justify-between'>
                <p className='font-extralight w-3/4 text-md'>with an AI-powered learning platform where students have access to learning resources, personalized learning paths, and interactive tools.</p>
                <button className='bg-white text-black py-6 px-0 rounded-full w-1/4 font-medium'>View Case Study</button>
            </div>
            <div className='flex space-x-4'>
                {
                    tags.map((item,index) => (
                        <div className='flex items-center justify-center space-x-4'>
                            <p className='text-[18px] font-medium'>{item}</p>
                            {index!= tags.length - 1 && <div className='w-1 h-1 bg-white rounded-full'></div>}
                        </div>
                        
                    ))
                }
            </div>
        </div>

        
    </div>
  )
}

export default ProjectItem