import React, { useState, useRef, useEffect } from 'react'
import Modal from 'react-modal'


Modal.setAppElement('#__next')

const knowledgeBubbleStyle = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '55%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-45%',
    transform: 'translate(-50%, -50%)',
    height: '40rem', // height of Modal
    width: '60rem', // width of Modal
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(31 41 55)',
    border: '1px solid black',
    color: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // semi-transparent gray
  },
}

const MessageBar = ({ onNewMessage, onSetModelSelectorVisible, isUser, requiresReponse }) => {
  const [height, setHeight] = useState('24px')
  const [inputValue, setInputValue] = useState('')
  const [modalInputValue, setModalInputValue] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const textareaRef = useRef(null)
  const modalTextAreaRef = useRef(null)
  const maxBarHeight = 200

  useEffect(() => {
    setHeight(`${Math.min(textareaRef.current.scrollHeight, maxBarHeight)}px`)
  }, [])

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleInput = () => {
    let newHeight

    // Temporarily shrink textarea to measure the real scrollHeight
    textareaRef.current.style.height = 'auto'

    // If real scrollHeight is less than maxBarHeight, use it as the new height
    if (textareaRef.current.scrollHeight < maxBarHeight) {
      newHeight = `${textareaRef.current.scrollHeight}px`
    }
    // If real scrollHeight is more than maxBarHeight, use maxBarHeight as the new height
    else {
      newHeight = `${maxBarHeight}px`
    }

    // Apply newHeight to the textarea
    textareaRef.current.style.height = newHeight
    setHeight(newHeight)
    setInputValue(textareaRef.current.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSetModelSelectorVisible(false)
    onNewMessage(inputValue, isUser, modalInputValue)
    if(requiresReponse){
      onNewMessage('', !isUser, modalInputValue, true)
    }
    setInputValue('')
    textareaRef.current.value = ''
    setModalInputValue('')
    // modalTextAreaRef.current.value = ''
    // Perform your desired action when the form button is clicked
    console.log('Form button clicked!')
  }

  const handleModalSubmit = () => {
    setModalInputValue(modalTextAreaRef.current.value)
    closeModal()
  }

  return (
    <div
      className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-gray-800 pt-2 md:border-t-0 md:border-transparent md:border-transparent md:!bg-transparent md:bg-vert-dark-gradient"
      style={{ minHeight: `${height}` }}
    >
      <form
        className="stretch mx-2 mt-1 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
        onSubmit={handleSubmit}
      >
        <div
          className="relative flex h-full flex-1 items-stretch md:flex-col"
          role="presentation"
        >
          <div
            className="h-full w-full pl-4 opacity-0 hover:opacity-100"
            onClick={openModal} // Add onClick handler here
          >
            <div className="mb-1 h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="22.000000pt" height="22.000000pt" viewBox="0 0 256.000000 256.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path fill="#e5e7eb" d="M1258 2529 c-27 -15 -25 -95 2 -109 14 -8 26 -8 40 0 28 15 29 95 1 110 -23 12 -22 12 -43 -1z"/>
                  <path fill="#e5e7eb" d="M845 2486 c-17 -12 -18 -17 -6 -52 28 -86 55 -129 80 -129 42 0 48 27 22 92 -42 104 -57 118 -96 89z"/>
                  <path fill="#e5e7eb" d="M1657 2478 c-8 -13 -25 -49 -38 -81 -25 -63 -20 -89 18 -95 25 -4 35 9 67 87 31 76 31 75 10 95 -22 22 -41 20 -57 -6z"/>
                  <path fill="#e5e7eb" d="M514 2214 c-5 -20 0 -32 27 -60 35 -36 57 -42 77 -22 20 20 14 42 -21 76 -41 40 -74 42 -83 6z"/>
                  <path fill="#e5e7eb" d="M1962 2207 c-40 -41 -42 -74 -6 -83 21 -5 33 0 61 29 29 28 34 40 29 61 -9 37 -44 34 -84 -7z"/>
                  <path fill="#e5e7eb" d="M1015 2166 c-27 -12 -65 -37 -83 -54 -27 -26 -38 -29 -71 -25 -46 6 -104 -11 -149 -44 -33 -25 -72 -89 -72 -118 0 -9 -18 -33 -41 -53 -51 -46 -69 -79 -71 -134 -1 -24 -12 -66 -24 -93 -28 -61 -39 -146 -26 -202 l10 -43 -38 -10 c-44 -12 -60 -28 -69 -73 -7 -31 -8 -32 -68 -35 -47 -2 -65 -8 -80 -25 -17 -18 -41 -124 -118 -524 -60 -310 -95 -511 -91 -527 4 -15 19 -41 35 -59 l29 -32 473 -3 c445 -2 475 -4 494 -21 96 -88 354 -88 450 0 19 17 49 19 494 21 l473 3 29 32 c16 18 31 44 35 59 10 38 -181 1012 -205 1044 -15 21 -28 26 -82 30 -62 5 -63 6 -70 37 -9 43 -25 61 -63 71 -28 8 -31 11 -28 45 2 20 -4 63 -14 94 -10 32 -16 81 -15 109 4 82 -44 156 -116 178 -13 4 -23 15 -23 24 0 29 -46 115 -83 158 -48 55 -143 104 -215 111 -44 4 -64 12 -87 33 -16 15 -40 33 -52 39 -35 18 -114 13 -155 -9 -37 -19 -37 -19 -80 0 -63 29 -168 27 -233 -4z m200 -70 c27 -11 30 -17 30 -56 0 -74 61 -84 76 -11 10 49 46 81 89 81 50 0 78 -23 91 -75 7 -29 18 -47 31 -51 21 -6 48 11 48 32 0 43 135 -10 193 -76 53 -58 83 -130 55 -130 -7 0 -24 -9 -37 -19 -19 -14 -22 -24 -17 -45 5 -21 12 -26 36 -26 16 0 32 5 35 10 3 6 22 10 41 10 26 0 44 -8 65 -29 41 -42 39 -83 -6 -128 -39 -39 -46 -78 -15 -88 10 -3 29 -1 40 5 29 15 35 7 35 -48 -1 -103 -79 -182 -179 -182 -57 0 -103 20 -97 41 11 40 12 119 2 138 -13 23 -50 28 -68 10 -7 -7 -10 -30 -6 -59 5 -41 3 -49 -18 -64 -34 -24 -59 -20 -95 15 -23 22 -38 29 -52 24 -32 -9 -36 -41 -12 -75 32 -45 74 -63 132 -58 27 3 51 1 55 -4 14 -25 91 -48 156 -48 49 0 68 -3 65 -12 -7 -21 -99 -78 -145 -89 -34 -9 -45 -17 -50 -37 -6 -27 20 -57 44 -48 6 3 27 8 46 11 34 7 35 6 52 -39 17 -44 17 -47 0 -66 -24 -26 -47 -25 -76 3 -37 36 -80 62 -134 81 -100 36 -163 96 -101 96 36 0 70 32 62 57 -9 28 -28 34 -68 22 -44 -12 -100 -11 -170 3 -53 11 -59 10 -80 -9 -60 -55 -148 -69 -216 -34 -46 23 -67 46 -87 94 -20 47 -19 91 2 150 16 43 16 49 1 63 -23 23 -57 9 -74 -32 -13 -31 -16 -33 -39 -22 -16 7 -29 24 -35 49 -18 66 -80 61 -80 -6 0 -55 48 -110 113 -129 10 -3 17 -15 17 -31 0 -23 -3 -25 -49 -25 -132 0 -248 101 -266 230 -10 72 18 156 40 120 9 -14 48 -13 63 2 18 18 15 32 -18 66 -87 92 23 217 119 136 23 -19 38 -24 56 -20 55 14 15 90 -61 118 -19 7 -34 17 -34 24 0 21 43 66 76 80 51 21 66 19 58 -11 -8 -31 10 -55 41 -55 17 0 27 10 38 38 21 52 61 99 106 122 42 22 131 26 176 6z m-649 -825 c67 -74 138 -106 244 -108 l85 -1 55 -54 c61 -60 107 -78 191 -78 53 0 127 26 159 55 12 11 25 11 62 4 37 -8 48 -16 58 -40 19 -45 81 -92 162 -124 39 -15 87 -42 107 -60 20 -18 46 -37 58 -44 57 -30 143 3 169 64 19 46 18 67 -7 126 l-22 50 41 42 c41 42 92 128 92 154 0 7 7 25 16 39 12 18 22 23 38 18 11 -4 22 -7 23 -8 3 -2 153 -901 153 -914 0 -5 -49 4 -109 19 -147 38 -326 53 -472 39 -112 -11 -258 -38 -312 -59 -16 -6 -30 -11 -33 -11 -2 0 -4 126 -4 280 0 269 -1 280 -20 290 -14 8 -26 8 -40 0 -19 -10 -20 -21 -20 -291 0 -249 -2 -280 -15 -275 -221 84 -579 92 -847 17 -38 -10 -68 -14 -68 -9 0 46 154 914 163 920 26 17 51 6 93 -41z m-209 -98 c-3 -16 -33 -200 -68 -410 -68 -412 -69 -423 -17 -452 24 -14 35 -13 130 11 162 42 252 51 426 45 87 -3 169 -9 185 -13 30 -7 33 -26 21 -118 l-7 -46 -448 0 c-394 0 -449 2 -463 16 -9 8 -16 18 -16 21 0 10 181 937 186 956 4 12 16 17 41 17 33 0 35 -2 30 -27z m1917 10 c6 -20 186 -945 186 -955 0 -4 -7 -14 -16 -22 -14 -14 -70 -16 -464 -16 l-448 0 -7 75 c-4 42 -6 78 -3 80 11 12 150 25 263 25 148 0 215 -9 368 -47 99 -25 111 -26 135 -12 52 29 51 40 -17 452 -35 210 -65 394 -68 410 -5 25 -3 27 30 27 25 0 37 -5 41 -17z m-1068 -879 l74 -25 76 26 c42 14 78 25 80 23 1 -2 6 -44 10 -94 l7 -91 -44 -17 c-59 -24 -198 -25 -256 -1 -35 14 -43 22 -43 44 0 44 13 161 17 161 3 0 38 -12 79 -26z"/>
                  <path fill="#e5e7eb" d="M1053 1830 c-51 -26 -91 -82 -99 -141 -5 -34 -2 -48 9 -58 32 -26 59 -6 72 53 9 41 57 86 93 86 35 0 55 20 50 52 -4 32 -68 36 -125 8z"/>
                  <path fill="#e5e7eb" d="M1500 1653 c-27 -79 -83 -131 -149 -140 -47 -6 -119 17 -146 47 -31 35 -75 19 -75 -26 0 -26 67 -80 111 -89 16 -4 29 -10 29 -15 0 -17 -53 -50 -79 -50 -39 0 -64 -21 -59 -51 3 -22 7 -24 59 -24 67 0 125 34 155 90 14 27 30 39 66 51 120 40 222 234 122 234 -18 0 -27 -7 -34 -27z"/>
                  <path fill="#e5e7eb" d="M260 1900 c-17 -32 2 -53 81 -84 79 -32 102 -28 107 16 3 22 -5 28 -69 56 -84 37 -104 39 -119 12z"/>
                  <path fill="#e5e7eb" d="M2177 1888 c-60 -28 -68 -34 -65 -56 6 -46 29 -49 111 -13 79 35 94 50 77 82 -14 26 -43 23 -123 -13z"/>
                  </g>
                </svg>
            </div>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Knowledge Base Modal"
            style={knowledgeBubbleStyle}
          >
            <textarea
              ref={modalTextAreaRef}
              tabIndex="0"
              data-id="root"
              rows="1"
              placeholder="დააფიქსირე კონტექსტი..."
              className="m-0 w-full resize-none border-0 bg-transparent bg-transparent p-0 pr-10 pl-3 ring-0 focus:ring-0 focus-visible:ring-0 md:pl-0"
              style={{
                display: 'relative',
                height: '90%',
                overflowY: 'auto',
                boxShadow: 'none',
              }}
              defaultValue={modalInputValue} // Set the initial value
            />
            <button
              className="rounded-md bg-purple-900 p-2"
              onClick={handleModalSubmit}
            >
              შენახვა
            </button>
          </Modal>
          <div className="shadow-xs relative flex w-full flex-grow flex-col rounded-xl border border-black/10 border-gray-900/50 bg-gray-700 py-[10px] text-white md:py-4 md:pl-4">
            <textarea
              ref={textareaRef}
              tabIndex="0"
              data-id="root"
              rows="1"
              placeholder="გააგზავნე მესიჯი."
              className="msgboxarea m-0 w-full resize-none border-0 bg-transparent bg-transparent p-0 pr-10 pl-3 ring-0 focus:ring-0 focus-visible:ring-0 md:pl-0"
              style={{
                display: 'relative',
                maxHeight: `${maxBarHeight}px`,
                height: height,
                overflowY: 'auto',
                boxShadow: 'none',
              }}
              onInput={handleInput}
            />
            <button
              type="submit"
              className="absolute right-2 bottom-1.5 rounded-md p-1 text-white transition-colors hover:bg-purple-900 disabled:text-gray-400 disabled:opacity-40 disabled:hover:bg-transparent md:bottom-3 md:right-3 md:p-2"
              disabled={!inputValue}
            >
              <span data-state="closed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  strokeWidth="2"
                  className="h-3 w-3"
                >
                  <path
                    d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="h-14"></div>
        </div>
      </form>
    </div>
  )
}

export default MessageBar
