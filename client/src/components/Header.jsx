import React from 'react'
import {Button, Navbar, TextInput} from "flowbite-react";
import {Link,useLocation} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {FaMoon} from "react-icons/fa";
export default function Header() {
  const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold'>
        <span className='px-3 py-1 bg-gradient-to-r from-indigo-500
        via-purple-500 to-pink-500 rounded-lg text-white'> Amit's</span>
        Blog
      </Link>
      <form>
        <TextInput className='hidden lg:inline'  type='text' placeholder='Search' rightIcon={AiOutlineSearch}/>
      </form>
      <Button className='w-12 h-10 lg:hidden'   color="gray"><AiOutlineSearch /></Button>
      <div className='flex gap-2 md:order-2'>
      <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
        <FaMoon />
      </Button>
      <Link to ='/sign-in'>
        <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
      </Link>
      <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path==="/"}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" active={path==="/about"}>About</Navbar.Link>
        <Navbar.Link href="/projects" active={path==="/projects"}>projects</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
