import './App.css'
import { About, Companies, Content, FaqSection, Footer, Header, Product } from './container'

function App() {
  return (
    <div className='w-[1728px]'>
      <Header/>
      <Companies/>
      <About/>
      <Content/>
      <FaqSection/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App
