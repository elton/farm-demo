import { createSignal } from 'solid-js'
import farmLogo from './assets/logo.png'
import solidLogo from './assets/solid.svg'

const App = () => {
  const [count, setCount] = createSignal(0)

  return (
    <div class='bg-gray-800 p-8 h-svh'>
      <div class='w-fit mx-auto flex'>
        <a href='https://farmfe.org/' target='_blank' rel='noreferrer'>
          <img src={farmLogo} class='h-24 p-6' alt='Farm logo' />
        </a>
        <a href='https://solidjs.com' target='_blank' rel='noreferrer'>
          <img src={solidLogo} class='h-24 p-6' alt='Solid logo' />
        </a>
      </div>
      <h1 class='w-fit mx-auto text-5xl text-white'>
        Farm + Solid + TailwindCSS
      </h1>
      <div class='w-fit mx-auto p-8'>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          class='rounded-lg px-3 py-2 font-medium bg-gray-100 cursor-pointer'
          onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p class='text-gray-300 mt-4'>
          Edit <code class='font-mono'>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class='w-fit mx-auto text-gray-300'>
        Click on the Farm and Solid logos to learn more
      </p>
    </div>
  )
}

export default App
