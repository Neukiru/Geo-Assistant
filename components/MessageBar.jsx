import React,{ useState, useEffect, useRef } from 'react'


const MessageBar = () => {
  
  const [height, setHeight] = useState('24px');
  const textareaRef = useRef(null);
  const maxBarHeight = 200

  useEffect(() => {
    let textareaHeight = `${Math.min(textareaRef.current.scrollHeight, maxBarHeight)}px`;
    setHeight(textareaHeight);
  }, []);

  const handleInput = () => {
    let textareaHeight = `${Math.min(textareaRef.current.scrollHeight, maxBarHeight)}px`;
    setHeight(textareaHeight);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
      <form className="stretch mx-2 mt-1 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex h-full flex-1 items-stretch md:flex-col" role="presentation">
          <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 border-gray-900/50 text-white bg-gray-700 rounded-xl shadow-xs shadow-xs">
            <textarea 
              ref={textareaRef}
              tabIndex="0"
              data-id="root"
              rows="1"
              placeholder="Send a message."
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 ring-0 focus:ring-0 focus-visible:ring-0 focus:outline-none bg-transparent md:pr-12 pl-3 md:pl-0"
              style={{
                display: "relative",
                maxHeight: `${maxBarHeight}px`, 
                height: height, 
                overflowY: 'auto' 
              }}
              onInput={handleInput}
            />
            <button className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 hover:bg-purple-900 disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-green text-white bottom-1.5 transition-colors disabled:opacity-40">
              <span data-state="closed">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" strokeWidth="2" className="h-3 w-3">
                  <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor">
                  </path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MessageBar
