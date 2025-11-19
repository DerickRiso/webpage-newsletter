import './App.css'

function App() {

  return (
    <>
      <header className='flex items-center justify-between w-screen fixed top-0 pt-8 pb-8 pl-10 pr-10 bg-transparent' >
        <h1 className='text-4xl'>Hello, World!</h1>
        <button className='border rounded-xl border-white cursor-pointer p-3'>Subscribe</button>
      </header>

      <main className='h-screen'>
        <section className='flex gap-4 flex-col justify-center items-center bg-[url("./assets/background.png")] bg-cover bg-no-repeat w-screen h-180 top-0'>
          <h1 className='text-4xl'>
            Comece a receber os emails agora!
          </h1>
          <button className='border pl-5 pr-5 pt-2 pb-2 rounded-xl'>
            Get Started
          </button>
        </section>
        <section>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
