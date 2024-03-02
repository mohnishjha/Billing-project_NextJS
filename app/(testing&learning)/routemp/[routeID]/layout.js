export default function ProductDetailsLayout({ children }) {

  
  return (
    <>
        <header className='p-11 bg-slate-400'></header>
          {children} 
          <p>Featured Products Here</p>
          <footer className='bg-zinc-300 p-11'></footer>
    </>
  )
}
