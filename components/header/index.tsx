
export function Header() {
    // Mudar a cor do header ao rolar a tela

    return (
        <header className='flex items-center justify-between w-screen fixed top-0 pt-8 pb-8 pl-10 pr-10 bg-transparent' >
        <h1 className='text-4xl'>
          Hello, World!
        </h1>
        <button className='border rounded-xl border-white cursor-pointer p-3'>
          Subscribe
        </button>
      </header>
    )
}