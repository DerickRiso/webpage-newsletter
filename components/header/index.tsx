
export function Header() {
    return (
        <header id="header" className='flex items-center justify-between w-screen fixed top-0 pt-8 pb-8 pl-10 pr-10 bg-transparent z-10' >
        <h1 className='text-4xl'>
          Newsletter
        </h1>
        <button className='border rounded-xl border-white cursor-pointer p-3 hover:bg-white hover:text-black ease-in-out transition'>
          Subscribe
        </button>
      </header>
    )
}