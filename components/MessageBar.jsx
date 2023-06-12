import { useState, useRef, useEffect } from 'react'

const MessageBar = () => {
  const [height, setHeight] = useState('24px')
  const textareaRef = useRef(null)
  const maxBarHeight = 200

  useEffect(() => {
    setHeight(`${Math.min(textareaRef.current.scrollHeight, maxBarHeight)}px`)
  }, [])

  const handleInput = () => {
    let newHeight;
    
    // Temporarily shrink textarea to measure the real scrollHeight
    textareaRef.current.style.height = 'auto';
    
    // If real scrollHeight is less than maxBarHeight, use it as the new height
    if (textareaRef.current.scrollHeight < maxBarHeight) {
      newHeight = `${textareaRef.current.scrollHeight}px`;
    } 
    // If real scrollHeight is more than maxBarHeight, use maxBarHeight as the new height
    else {
      newHeight = `${maxBarHeight}px`;
    }
    
    // Apply newHeight to the textarea
    textareaRef.current.style.height = newHeight;
    setHeight(newHeight);
  };

  return (
    <div
      className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-gray-800 pt-2 md:border-t-0 md:border-transparent md:border-transparent md:!bg-transparent md:bg-vert-dark-gradient"
      style={{ minHeight: `${height}` }}
    >
      <form className="stretch mx-2 mt-1 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div
          className="relative flex h-full flex-1 items-stretch md:flex-col"
          role="presentation"
        >
          <div className="shadow-xs shadow-xs relative flex w-full flex-grow flex-col rounded-xl border border-black/10 border-gray-900/50 bg-gray-700 py-[10px] text-white md:py-4 md:pl-4">
            <textarea
              ref={textareaRef}
              tabIndex="0"
              data-id="root"
              rows="1"
              placeholder="Send a message."
              className="msgboxarea m-0 w-full resize-none border-0 bg-transparent bg-transparent p-0 pr-10 pl-3 ring-0 focus:ring-0 focus-visible:ring-0 md:pr-12 md:pl-0"
              style={{
                display: 'relative',
                maxHeight: `${maxBarHeight}px`,
                height: height,
                overflowY: 'auto',
                boxShadow: 'none',
              }}
              onInput={handleInput}
            />
            <button className="enabled:bg-green absolute right-2 bottom-1.5 rounded-md p-1 text-white transition-colors hover:bg-purple-900 disabled:text-gray-400 disabled:opacity-40 disabled:hover:bg-transparent md:bottom-3 md:right-3 md:p-2">
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
          <div className="h-32"></div>
        </div>
      </form>
    </div>
  )
}

export default MessageBar
