import React from 'react';
import TaskGrid from './TaskGrid';

const RenderTaskGrid = () => {
  const tasks = [
    { id: "1", title: 'Task 1', description: 'Description 1', nTasks: '303', taskRoute: "./label/assitantReply" },
    { id: "2", title: 'Task 2', description: 'Description 2', nTasks: '303', taskRoute: "./label/assitantReplyClassification" },
    { id: "3", title: 'Task 3', description: 'Description 3', nTasks: '303', taskRoute: "./label/assitantReply" },
    { id: "4", title: 'Task 4', description: 'Description 3', nTasks: '303', taskRoute: "./label/assitantReply" },
    { id: "5", title: 'Task 5', description: 'Description 3', nTasks: '303', taskRoute: "./label/assitantReply" },
    { id: "6", title: 'Task 6', description: 'Description 3', nTasks: '303', taskRoute: "./label/assitantReply" },
  ];

  return (
    <TaskGrid tasks={tasks} />
  );
};

export default RenderTaskGrid;