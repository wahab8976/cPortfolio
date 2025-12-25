'use client'
import React, { useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState('English')

  const menuItems = ['Home', 'About', 'Services', 'Pricing', 'Contact']
  const languages = ['English', 'Deutsch', 'Italiano', '中文']

  return (
    <nav className="fixed top-0 w-full z-20 bg-neutral-900 border-b border-neutral-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-semibold text-xl">
          <span>Flowbite</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 md:order-2">

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-2 text-sm text-white border border-neutral-600 rounded hover:bg-neutral-800"
            >
              {language}
            </button>

            {langOpen && (
              <ul className="absolute right-0 mt-2 w-36 bg-neutral-800 border border-neutral-700 rounded shadow-lg">
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => {
                        setLanguage(lang)
                        setLangOpen(false)
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-neutral-700 hover:text-white"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            ☰
          </button>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`md:flex md:items-center md:gap-8 absolute md:static left-0 w-full md:w-auto bg-neutral-900 md:bg-transparent transition-all duration-300
          ${menuOpen ? 'top-16 opacity-100' : '-top-100 opacity-0 md:opacity-100'}
          `}
        >
          {menuItems.map((item) => (
            <li key={item} className="text-center md:text-left">
              <button
                onClick={() => {
                  setActive(item)
                  setMenuOpen(false)
                }}
                className={`relative block px-4 py-3 text-sm font-medium transition-colors
                  ${
                    active === item
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }
                `}
              >
                {item}

                {/* Active underline */}
                {active === item && (
                  <span className="absolute left-0 bottom-1 w-full h-0.5 bg-purple-500 rounded"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar