import React from 'react'
import Login from './Login'
import Header from './Header'
import VivaLoginAuthentication from './VivaLoginAuthentication'

const Home = () => {
  return (
    <div><div className="flex overflow-hidden flex-col text-lg bg-white text-black text-opacity-40">
    <div className="flex relative flex-col pb-5 w-full min-h-[1024px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e011d3a23e4adca1231501de3ecda307bcd57388842ae7b3745c0ecd22bdb6a?placeholderIfAbsent=true&apiKey=ab3c43d981ed4dfe8975ab5bc9a48b20" alt="" className="object-cover absolute inset-0 size-full" />
      <Header />
      <main className="flex relative flex-col items-center self-center pt-9 pb-80 mt-20 max-w-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[458px] max-md:pb-24 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c799834066462e2c64ea4dd16c551c78654b01d293324b813d68ba7e175403f?placeholderIfAbsent=true&apiKey=ab3c43d981ed4dfe8975ab5bc9a48b20" alt="VivaMQ logo" className="object-contain max-w-full aspect-[4.65] w-[233px]" />
        <hr className="shrink-0 self-stretch mt-8 border border-solid border-black border-opacity-40 max-md:max-w-full" />
        <Login />
        {/* <VivaMQLogin/> */}
        {/* {<VivaLoginAuthentication/>} */}
      </main>
    </div>
  </div></div>
  )
}

export default Home