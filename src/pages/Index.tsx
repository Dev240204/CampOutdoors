import Features from './Features'
import Home from './Home'
import Tours from './Tours'

function Index() {
  return (
    <div className='flex flex-col gap-20'>
        <Home />
        <Features />
        <Tours />
    </div>
  )
}

export default Index