import React from 'react';
import TaskCard from './TaskCard';
import styles from './taskGrid.module.css'

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