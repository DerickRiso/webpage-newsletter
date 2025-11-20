import './App.css';
import { IconList } from "../components/icon-list"
import { SectionTopics } from "../components/section-topics"

function App() {

  return (
    <>
      <header className='flex items-center justify-between w-screen fixed top-0 pt-8 pb-8 pl-10 pr-10 bg-transparent' >
        <h1 className='text-4xl'>
          Hello, World!
        </h1>
        <button className='border rounded-xl border-white cursor-pointer p-3'>
          Subscribe
        </button>
      </header>

      <main className='h-screen'>
        <section className='flex gap-4 flex-col justify-center items-center bg-[url("./assets/background.png")] bg-cover bg-no-repeat w-screen h-180 top-0'>

          <h1 className='text-4xl z-2'>
            Comece a receber os emails agora!
          </h1>

          <button className='border pl-5 pr-5 pt-2 pb-2 rounded-xl z-2'>
            Get Started
          </button>
        </section>

        <section className='flex justify-center z-1 bg-black'>
          <IconList />
        </section>

        <SectionTopics />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
