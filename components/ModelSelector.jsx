import React, { useState, useEffect, useRef } from 'react'

const ModelOption = ({ svg, text, setChosenSVG, setChosenText, setDropdownVisible}) => (
    <button onClick={() => { setChosenSVG(svg); setChosenText(text); setDropdownVisible(false);}}>
      <div className="flex h-12 w-full flex-row items-center justify-center gap-2 border-t-1 border-gray-700 bg-transparent hover:bg-gray-greenish">
        <span className="relative max-[370px]:hidden">{svg}</span>
        <span
          className={`truncate pr-1.5 text-lg font-medium text-white md:pr-1.5`}
        >
          {text}
        </span>
      </div>
    </button>
  );

const MainModelOption = ({ svg, text, isPressed, dropDown, setIsPressed }) => (
  <button
    className={`relative h-full w-full cursor-pointer ${
      isPressed ? 'scale-97' : 'scale-100'
    } transition-transform duration-75 ease-in-out`}
    onClick={dropDown}
    onMouseDown={() => setIsPressed(true)}
    onMouseUp={() => setIsPressed(false)}
    onMouseLeave={() => setIsPressed(false)}
  >
    <div
      className={`flex h-full w-full items-center justify-center gap-2 rounded-lg border border-black/10 bg-gray-greenish py-3 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] outline-none transition-opacity duration-100 hover:brightness-110 sm:w-auto sm:min-w-[148px]`}
    >
      <span className="relative max-[370px]:hidden">{svg}</span>
      <span
        className={`truncate pr-1.5 text-lg font-medium text-white md:pr-1.5`}
      >
        {text}
      </span>
    </div>
  </button>
)

const ModelSelector = ({isModelSelectorVisible}) => {
  console.log(isModelSelectorVisible ? 'visible' : 'invisible')
  const defaultSVG = (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      strokeWidth="2"
      width="16"
      height="16"
      className="h-5 w-5 text-green-500 transition-colors"
    >
      <path
        fill="currentColor"
        d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
      />
    </svg>
  )
  const defaultText = 'GPT-3.5 Turbo'
  const [isPressed, setIsPressed] = useState(false)
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [chosenSVG, setChosenSVG] = useState(defaultSVG)
  const [chosenText, setChosenText] = useState(defaultText)
  const [isVisible,setVisibility] = useState(true)
  const dropdownRef = useRef(null)

  const dropDown = () => {
    console.log('Dropdown clicked!')
    setIsPressed(true)
    setDropdownVisible((prevState) => !prevState)
    setTimeout(() => setIsPressed(false), 200)
  }

  useEffect(() => {
    
    setVisibility(isModelSelectorVisible)
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false)
      }
    }

    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isVisible,isDropdownVisible])

  return (
    <div
      className={`mt-12 h-20 w-60 place-items-center rounded-xl bg-gray-950 p-1.5 ${isModelSelectorVisible ? 'visible' : 'hidden'}`}
      ref={dropdownRef}
    >
      <MainModelOption
        svg={chosenSVG}
        text={chosenText}
        isPressed={isPressed}
        dropDown={dropDown}
        setIsPressed={setIsPressed}
      />

      {isDropdownVisible && (
        <div className="relative left-[-2rem] z-10 mt-5 h-44 w-72 overflow-hidden rounded-xl bg-gray-950">
          <div className="flex flex-col">
            <div className="h-19 p-3 text-center">
              <span className="text-[16px] font-bold text-white">
                აირჩიეთ სასურველი მოდელი
              </span>
            </div>
            <ModelOption
              svg={
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  strokeWidth="2"
                  width="16"
                  height="16"
                  className="h-5 w-5 text-green-500 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
                  />
                </svg>
              }
              text="GPT-3.5 Turbo"
              setChosenSVG={setChosenSVG}
              setChosenText={setChosenText}
              setDropdownVisible={setDropdownVisible}
            />
            <ModelOption
              svg={
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  strokeWidth="2"
                  width="16"
                  height="16"
                  className="h-5 w-5 text-purple-600 transition-colors"
                >
                  <path
                    fill="currentColor"
                    d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z"
                  />
                </svg>
              }
              text="GPT-4"
              setChosenSVG={setChosenSVG}
              setChosenText={setChosenText}
              setDropdownVisible={setDropdownVisible}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ModelSelector
