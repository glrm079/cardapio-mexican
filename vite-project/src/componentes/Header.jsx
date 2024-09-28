import logo from '/src/assets/logo.png'


export default function Header(){
    return(
        <header className='p-3 shadow-md fixed w-full z-30 bg-zinc-50'>
        <div className=' flex flex-row justify-between w-auto '>
          <div className='flex flex-col justify-between w-1/3 '>
          <hr className='bg-green-900  header-hr mb-1' />
          <hr className='bg-green-900  header-hr' />
          </div>
          <img className='w-10' src={logo} alt="" />
          <div className='flex flex-col justify-between w-1/3 '>
              <hr className='bg-red-600 header-hr mb-1 ' />
              <hr className='bg-red-600 header-hr' />
          </div>
        </div>
      </header>
    )
}