import React from 'react'

const About = () => {
  return (
    <section className="flex items-center justify-center bg-white text-gray-800 h-screen" id="about">
    <div className="max-w-4xl px-4">
      <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">About Me</h2>

      <blockquote className="text-lg italic border-l-4 border-yellow pl-4 mb-8" data-aos="fade-up">
      &apos;I don&apos;t always test my code, but when I do, I do it in production.&apos;
      </blockquote>
      <p className="text-lg" data-aos="fade-up">
        I love creating user-friendly experiences...
      </p>
      <hr className="border-t-2 border-yellow-500 my-4 w-1/2 mx-auto" />

<p className="text-lg mb-6"data-aos="fade-up">
  When I&apos;m not conjuring up code, you&apos;ll find me diving into a good book, gaming with friends, or staying active with football, running, and trekking. Balancing life between the world of tech and adventure—because who says wizards can&apos;t be sporty?
</p>
    </div>
  </section>
  )
}

export default About