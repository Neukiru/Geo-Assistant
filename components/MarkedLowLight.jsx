import React from 'react'
import Markdown from 'marked-react'
import Lowlight from 'react-lowlight'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css' // you can choose your own style

hljs.configure({ languages: ['js', 'html', 'css', 'python', 'json', 'jsx'] })
// add more languages if needed

const renderer = {
  code(snippet, lang) {
    const key = `code-${Date.now()}-${Math.random()}`

    if (!lang) {
      const highlighted = hljs.highlightAuto(snippet)
      lang = highlighted.language
    }
    return (
      <div>
        <div className="mb-4 rounded-md bg-black mt-2">
          <div className="relative flex items-center justify-between rounded-t-md bg-gray-800 px-4 py-2 font-sans text-xs text-gray-200">
            <span>{lang}</span>
            <button className="ml-auto flex gap-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                height="1em"
                width="1em"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
              Copy code
            </button>
          </div>
          <div className="overflow-y-auto p-4">
            <Lowlight
              key={key}
              language={lang}
              value={snippet}
            />
          </div>
        </div>
      </div>
    )
  },
  // Custom class for non-code elements
  text(text) {
    const key = `code-${Date.now()}-${Math.random()}`
    return (
      <span key={key} className="text-white">
        {text}
      </span>
    )
  },
}

const MarkedLowlightRenderer = ({ markdown }) => {
  return (
    <div>
      <Markdown value={markdown} renderer={renderer} />
    </div>
  )
}

export default MarkedLowlightRenderer
