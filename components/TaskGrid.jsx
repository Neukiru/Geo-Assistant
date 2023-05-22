import React from 'react';
import dynamic from 'next/dynamic';
// import TaskCard from './TaskCard';
import styles from './taskGrid.module.css'

const TaskCard = dynamic(() => import('./TaskCard'));
const TaskGrid = ({ tasks }) => {
  return (
    <div className={styles.taskGrid}>
      {tasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </div>
  );
};

export default TaskGrid;