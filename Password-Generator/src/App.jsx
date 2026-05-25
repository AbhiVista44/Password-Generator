import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6">

        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex overflow-hidden rounded-xl border border-slate-700 mb-6">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-3 bg-slate-800 text-white outline-none"
          />

          <button
            onClick={copyPasswordToClipboard}
            className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-200 px-5 text-white font-semibold"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-5">

          {/* Length Slider */}
          <div>
            <div className="flex justify-between mb-2 text-slate-300">
              <label>Password Length</label>
              <span className="text-cyan-400 font-semibold">
                {length}
              </span>
            </div>

            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full cursor-pointer accent-cyan-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 text-slate-300">

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() =>
                  setNumberAllowed((prev) => !prev)
                }
                className="accent-cyan-500 w-4 h-4"
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() =>
                  setCharAllowed((prev) => !prev)
                }
                className="accent-cyan-500 w-4 h-4"
              />
              Include Special Characters
            </label>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App