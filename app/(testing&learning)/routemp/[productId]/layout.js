import { Inter } from 'next/font/google'
// import './globals.css'



const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Why Create Next App',
  description: 'local layout wala metadata',
}

export default function RootLayout({ children }) {

  
  return (
    <>
    <header className='bg-blue-300 h-20'>This is secondary header</header>
     {children}     
        <h1>This is secondary layout</h1>
    <footer className='bg-neutral-600 h-14'>THis is secondary footer</footer>     
    </>
  )
}
