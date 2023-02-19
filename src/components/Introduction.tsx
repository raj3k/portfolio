import React from "react";

const Introduction = () => {
  return (
    <section>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <p className="text-4xl md:text-7xl text-white mb-1 md:mb-3 font-bold">Maciej Lukaszuk</p>
        <p className="text-base md:text-xl mb-3 text-white font-medium">Software Engineer & Web Developer</p>
        <p className="text-sm max-w-xl mb-6 text-white font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </section>
  )
}

export default Introduction;