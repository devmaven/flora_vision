import { useState } from 'react'
import './App.css'
import NavBar from "./components/navBar";
import HeroSection from './components/heroSection'
import TrendingPlants from './components/trendingPlants'
import TopSellingPlants from './components/topSellingPlants'
import CustomerReviews from './components/customerReviews'
import O2Plants from './components/o2Plants'
import Footer from './components/footer'
import BGPlant from '/images/bg.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <div
          className=" bg-[url('./assets/images/bg.png')] w-full bg-contain bg-no-repeat bg-start h-fit"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
        <NavBar />
          <HeroSection />
          <TrendingPlants />
        <TopSellingPlants />
        <CustomerReviews />
        <O2Plants />
        <Footer />
        </div>
      </div>
    </>
  );
}

export default App
