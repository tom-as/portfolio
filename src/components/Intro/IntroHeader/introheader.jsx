
const IntroHeader = () => {
  return (
    <header className='w-6/6 h-4/6 items-center  backdrop-blur-3xl relative'>
      <div className="justify-center flex flex-row ">
        <div className="flex flex-col xsm:items-center sm:items-center lg:items-left lg:justify-left px-5 max-w-screen-md  md:justify-center md:items-center">
          <h1 className='lg:text-7xl md:text-6xl sm:text-6xl xsm: text-5xl font-bold text-white'>Tomás Arbía</h1>
          <h2 className="lg:text-3xl md:text-2xl pt-1 italic text-sky-400 font-semibold "> Junior Web Developer</h2>
          <p className="lg:text-xl text-white pt-20 max-w-6/6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc magna nibh, vestibulum sed laoreet vitae, tristique vitae turpis. Aliquam ultrices velit quis ante tempor fringilla. Integer porta tellus ornare libero tincidunt, sed aliquam diam congue. Nunc accumsan sapien gravida sapien ullamcorper accumsan. Mauris ornare gravida elit eget euismod. Proin at dapibus leo. Quisque fermentum magna vitae hendrerit molestie. Ut in sapien luctus, gravida nisi elementum, porta massa.</p>
        </div>
      </div>
    </header>

  )
}

export default IntroHeader