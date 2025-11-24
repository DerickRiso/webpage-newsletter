import './App.css';
import { IconList } from "../components/icon-list"
import { SectionTopics } from "../components/section-topics"
import { Header } from "../components/header"

function App() {
  document.addEventListener('scroll', changeHeaderColor);

  return (
    <>
      <Header />

      <main className='w-screen'>
        <section id="home" className='flex gap-4 flex-col justify-center items-center bg-[url("./assets/background.png")] bg-cover bg-no-repeat w-screen h-180 top-0'>

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
      <footer className='w-screen flex justify-center items-center h-15'>
        <a href="https://github.com/DerickRiso" target='_blank' className='text-left hover:text-blue-500'>Sobre o criador</a>  
      </footer>
    </>
  )
}

function changeHeaderColor() {
  const home = document.getElementById('home') as HTMLElement;
  const header = document.getElementById('header') as HTMLHeadingElement;

  let position = home.getBoundingClientRect()
  if (position.y < -600) {
    header.style.backgroundColor = "#000000"
  }
  if (position.y > -600) {
    header.style.backgroundColor = "transparent"
  }  
}

export default App
