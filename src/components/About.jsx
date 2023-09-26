import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-section md:container md:mx-auto dark:bg-neutral-800 text-yellow-100 p-8 md:p-32 md:min-h-[100vh] flex justify-center flex-col">
        <h1 className='underline font-semibold text-4xl mb-4 md:mb-8 md:text-6xl'>ABOUT ME</h1>
        <p className='md:text-2xl'>Hello, my name is Muhammad Sinan Abdussyakur. I'm an undergraduate computer science major at Bina Nusantara University, as I've already mentioned before. I've learned a lot about many programming fundamentals over my two years in college. I've had exposure to a wide range of topics, including Code Reengineering, Data Structures, Algorithms, Computer Networks, and many more. <br /><br />I've had the chance to work with various programming language, such as, C, Java, PHP, ASP.NET, HTML, CSS, and JS. These experiences have given me the opportunity to hone a broad range of skills. <br /><br />In addition to my academic pursuits, I enjoy watching movies, playing video games, listening to music, and dabbling with street photography, as I can express my creativity via these activities, and they also help me relax after a hard day of studying.</p>
    </div>
  )
}

export default About