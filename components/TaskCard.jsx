import React from 'react';

const TaskCard = ({ id, title, description, nTasks }) => {
  return (
    <div id={id} className="chakra-card rounded-xl bg-white shadow">
      <div className="pt-5 pl-5 pr-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-xl font-bold">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        <span className="mb-2 inline-block rounded-lg bg-blue-500 px-3 py-1 text-sm font-semibold text-white">
          {nTasks} tasks available
        </span>
      </div>
      <button className="mt-5 cursor-pointer bg-blue-500 py-2 text-white transition-colors duration-300 hover:bg-blue-600 w-full rounded-bl-xl rounded-br-xl">
        Go -&gt;
      </button>
    </div>
  );
};

export default TaskCard;
