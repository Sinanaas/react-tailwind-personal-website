import React from 'react'
import './About.css'
import FadeInSection from "./FadeInSection";

const About = () => {
  return (
    <div className="about-section md:container md:mx-auto bg-neutral-800 text-yellow-100 p-8 md:px-32 md:min-h-[90vh] flex justify-center flex-col">
        <h1 className='underline underline-offset-8 font-semibold text-4xl mb-4 md:mb-8 md:text-6xl'>ABOUT ME</h1>
        <FadeInSection>
          <p className='md:text-2xl'>Hello, my name is Muhammad Sinan Abdussyakur. I'm an undergraduate computer science major at Bina Nusantara University, as I've already mentioned before. I've learned a lot about many programming fundamentals over my two years in college. I've had exposure to a wide range of topics, including Code Reengineering which helps me identify and refactor code smells, Data Structures such as arrays, linked lists, trees, and graphs, Algorithms including sorting algorithms, searching algorithms, and algorithmic problem-solving techniques, Computer Networks covering topics like network protocols, routing, and network security, and many more.<br /><br />I'm a curious and eager-to-learn type of person, which has fueled my passion for exploring various programming languages and frameworks, such as C, Java, Laravel, ASP.NET, HTML, CSS, Tailwind, Bootstrap, JS, and React. These experiences have allowed me to hone a broad range of skills.<br /><br />In addition to my academic pursuits, I enjoy watching movies, playing video games, listening to music, and dabbling with street photography. These activities allow me to express my creativity, and they also help me relax after a hard day of studying.</p>
        </FadeInSection>
    </div>
  )
}

export default About