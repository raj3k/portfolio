import React from 'react';
import TimelineItem from "./TimelineItem";
import timeline from "../data/timeline";

const Timeline = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-zinc-50 text-center">Timeline</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        { timeline.map(item => (
          <TimelineItem timeInterval={item.timeInterval} title={item.title} description={item.description} />
        ))}
      </ol>
    </>
  );
};

export default Timeline;