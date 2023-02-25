import React from "react";

const Introduction = () => {
  return (
    <section>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <p className="text-4xl md:text-7xl text-white mb-1 md:mb-3 font-bold">Maciej Lukaszuk</p>
        <p className="text-base md:text-xl mb-3 text-white font-medium">Software Engineer & Web Developer</p>
        <p className="text-sm max-w-xl mb-6 text-white font-bold">
          <p className="py-1.5">I'm a software engineer from Poland.</p>
          <p className="py-1.5">I enjoy working on application backend.</p>
          <p className="py-1.5">I have particular interest in cloud computing technology and trying to take my first steps into it.</p>
          <p className="py-1.5">For work, I'm a Analyst at corporation from banking sector, where I work in international environment, helping to
          upskill and mentor colleagues with less experience. I'm responsible for automation in Excel spreadsheets and cooperating with Dev Team.</p>
          <p className="py-1.5">Away from the keyboard, I like sports (especially Crossfit and riding bike).</p>
        </p>
      </div>
    </section>
  )
}

export default Introduction;