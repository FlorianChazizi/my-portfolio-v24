import React from 'react'

const About = () => {
  return (
    <section className="flex items-center justify-center bg-white text-gray-800 h-screen" id="about">
    <div className="max-w-4xl px-4">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>

      <blockquote className="text-lg italic border-l-4 border-yellow pl-4 mb-8">
        "I don't always test my code, but when I do, I do it in production."
      </blockquote>
      <p className="text-lg">
        I love creating user-friendly experiences...
      </p>
      <hr className="border-t-2 border-yellow-500 my-4 w-1/2 mx-auto" />

<p className="text-lg mb-6">
  When I'm not conjuring up code, you'll find me diving into a good book, gaming with friends, or staying active with football, running, and trekking. Balancing life between the world of tech and adventure—because who says wizards can't be sporty?
</p>
    </div>
  </section>
  )
}

export default About