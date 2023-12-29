import React from 'react'
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
    const isMediumScreen = window.innerWidth >= 768;
  return (
    <footer className='bg-black p-16 text-white container mx-auto w-full'>
        <div className="grid md:grid-cols-2 text-center md:text-left gap-4">
            <header className='flow-content--m'>
                <a className="logo w-full text-3xl font-bold text-[#00df9a]">React</a>
                <p className='max-w-[400px] mx-auto md:mx-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptas inventore minima! Sapiente, dolorem doloribus.</p>
                <ul className="social-list flex justify-center md:justify-start my-8 md:my-0 items-center gap-4">
                    <li><a href=""><AiOutlineFacebook size={50}/></a></li>
                    <li><a href=""><AiFillInstagram size={50}/></a></li>
                    <li><a href=""><AiFillTwitterSquare size={50}/></a></li>
                    <li><a href=""><AiFillGithub size={50}/></a></li>
                </ul>
            </header>
            <nav className='grid md:grid-cols-3 gap-16 md:flow-content--0'>
                <ul className={isMediumScreen ? "flow-content--s" : "flow-content--m" }>
                    <h5 className="title text-[#00df9a]">Solutions</h5>
                    <li><a href="">Analytics</a></li>
                    <li><a href="">Marketing</a></li>
                    <li><a href="">Commerce</a></li>
                    <li><a href="">Insights</a></li>
                </ul>
                <ul className={isMediumScreen ? "flow-content--s" : "flow-content--m" }>
                    <h5 className="title text-[#00df9a]">Support</h5>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Documentation</a></li>
                    <li><a href="">Guides</a></li>
                    <li><a href="">API Status</a></li>
                </ul>
                <ul className={isMediumScreen ? "flow-content--s" : "flow-content--m" }>
                    <h5 className="title text-[#00df9a]">Company</h5>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Press</a></li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}

export default Footer