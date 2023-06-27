import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const MutateGeneralStyle = () => {
  const router = useRouter()
  useEffect(() => {
    const mainElement = document.querySelector('main')
    const paddingElement = document.querySelector('.nx-w-64')

    if (router.asPath === '/prompt_engineering/label/assistantReply') {
      mainElement.classList.remove('md:nx-px-12', 'nx-px-6')
    }
    else if(router.asPath === '/AIchat'){
      mainElement.classList.remove('md:nx-px-12', 'nx-px-6')
      paddingElement.classList.remove('nx-w-64')
    }
    else {
      mainElement.classList.add('md:nx-px-12', 'nx-px-6');
    }
  }, [router.asPath])

  return null // Return null or any desired JSX since rendering is not necessary
}

export default MutateGeneralStyle
