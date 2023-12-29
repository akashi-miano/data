import React from 'react'
import singleImage from "../assets/single.png"
import doubleImage from "../assets/double.png"
import tripleImage from "../assets/triple.png"

const Cards = () => {
  return (
    <section className='py-16 px-4 md:px-8 lg:px-8 md:py-32 bg-white'>
        <div className="cards-wrapper grid md:grid-cols-3 container gap-8 mx-auto">
            <div className="card bg-white text-center shadow-zinc-400 shadow-md rounded-lg p-8 relative duration-200 hover:scale-110 cursor-pointer">
                <img className="w-[50px] logo block mx-auto absolute top-[-25px] left-1/2 transform -translate-x-1/2" src={singleImage} alt=""/>
                <h4 className="card-title shadow-black text-2xl my-4 font-bold">Single User</h4>
                <p className="prize border-b-2 border-gray-200 py-2 font-bold text-3xl">$149</p>
                <p className="benefit border-b-2 border-gray-200 py-2">500 GB Storage</p>
                <p className="benefit border-b-2 border-gray-200 py-2">1 User Allowed</p>
                <p className="benefit border-b-2 border-gray-200 py-2">Send up to 2GB</p>
                <a href="" className="btn inline-block  text-black bg-[#00df9a] py-2 px-12 text-md rounded-md mt-2">Strat Trial</a>
            </div>
            <div className="card bg-gray-100 text-center md:mt-2 shadow-zinc-400 shadow-md rounded-lg p-8 relative duration-200 hover:scale-110 cursor-pointer">
                <img className="w-[50px] logo block mx-auto absolute top-[-25px] left-1/2 transform -translate-x-1/2" src={doubleImage} alt=""/>
                <h4 className="card-title shadow-black text-2xl my-4 font-bold">Partnership</h4>
                <p className="prize border-b-2 border-gray-200 py-2 font-bold text-3xl">$199</p>
                <p className="benefit border-b-2 border-gray-200 py-2">1 TB Storage</p>
                <p className="benefit border-b-2 border-gray-200 py-2">3 Users Allowed</p>
                <p className="benefit border-b-2 border-gray-200 py-2">Send up 10 GB</p>
                <a href="" className="btn inline-block  bg-black text-[#00df9a] py-2 px-12 text-md rounded-md mt-2">Strat Trial</a>
            </div>
            <div className="card bg-white text-center shadow-zinc-400 shadow-md rounded-lg p-8 relative duration-200 hover:scale-110 cursor-pointer">
                <img className="w-[50px] logo block mx-auto absolute top-[-25px] left-1/2 transform -translate-x-1/2" src={tripleImage} alt=""/>
                <h4 className="card-title shadow-black text-2xl my-4 font-bold">Group Account</h4>
                <p className="prize border-b-2 border-gray-200 py-2 font-bold text-3xl">$299</p>
                <p className="benefit border-b-2 border-gray-200 py-2">5 TB Storage</p>
                <p className="benefit border-b-2 border-gray-200 py-2">10 Users Allowed</p>
                <p className="benefit border-b-2 border-gray-200 py-2">Send up to 20 GB</p>
                <a href="" className="btn inline-block  text-black bg-[#00df9a] py-2 px-12 text-md rounded-md mt-2">Strat Trial</a>
            </div>
        </div>
    </section>
  )
}

export default Cards
