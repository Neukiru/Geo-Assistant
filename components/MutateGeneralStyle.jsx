import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const MutateGeneralStyle = () => {
  const router = useRouter()
  useEffect(() => {
    const mainElement = document.querySelector('main')
    console.log(router.asPath)
    if (router.asPath === '/prompt_engineering/label/assistantReply') {
      mainElement.classList.remove('md:nx-px-12', 'nx-px-6')
    }
    else {
      mainElement.classList.add('md:nx-px-12', 'nx-px-6');
    }
  }, [router.asPath])

  return null // Return null or any desired JSX since rendering is not necessary
}

export default MutateGeneralStyle
