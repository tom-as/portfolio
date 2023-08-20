
import IntroHeader from './IntroHeader/introheader'
import IntroFooter from './IntroFooter/introfooter'

const Intro = () => {

  return (
    <div className='bg-gradient-to-r from-gray-900 to-cyan-950	h-full pt-10 flex justify-center items-center'>
      <div className="flex flex-col relative flex-grow h-screen pt-60 ">
        <IntroHeader />
        <IntroFooter />
      </div>
    </div>
  )
}

export default Intro