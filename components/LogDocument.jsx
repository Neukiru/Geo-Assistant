import React, { useEffect } from 'react';

const LogDocument = () => {
  useEffect(() => {
    const articleElement = document.querySelector('main');
    // if (articleElement) {
    //   articleElement.classList.remove('md:nx-px-12','nx-px-6');
    // }
  }, []);

  return null; // Return null or any desired JSX since rendering is not necessary
};

export default LogDocument;