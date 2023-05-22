import React from 'react'
import styles from './taskGrid.module.css'

const TaskCard = ({ id, title, description, nTasks }) => {
  return (
    <a href='https://open-assistant.io/dashboard' className={styles.noUnderline}>
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
        <button className="mt-5 w-full cursor-pointer rounded-bl-xl rounded-br-xl bg-blue-500 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
          Go -&gt;
        </button>
      </div>
    </a>
  )
}

export default TaskCard
