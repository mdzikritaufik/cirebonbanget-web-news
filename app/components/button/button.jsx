'use client'

export default function Button({btnTitle,link}) {
  return (
  <a href={link}>
    <button className="px-6 py-3 font-medium tracking-wide text-slate-800 capitalize transition-colors duration-300 transform bg-fresh rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-80 shadow-md">
      {btnTitle}
    </button>
  </a>
  )
}




