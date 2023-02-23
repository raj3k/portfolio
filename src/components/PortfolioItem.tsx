import React from 'react';

interface IProps {
  title: string,
  imgUrl: string,
  stack: string[],
  link: string
}

const PortfolioItem = ({ title, imgUrl, stack, link }: IProps) => {
  return (
    <div key={title} className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={imgUrl}
          alt="project image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-900 dark:text-white">
        <a href={link}>
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
      <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
      {stack.map(item => (
        <span className="inline-block z-10 bg-gray-50 opacity-50 rounded-full py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
          {item}
        </span>
      ))}
      </div>
    </div>
  );
};

export default PortfolioItem;