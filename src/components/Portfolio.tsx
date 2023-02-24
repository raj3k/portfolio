import React from 'react';
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr></hr>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-zinc-50 text-center">Projects</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {portfolio.map((item) => (
              <PortfolioItem title={item.title} imgUrl={item.imgUrl} stack={item.stack} link={item.link} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Portfolio;