import React from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, User } from 'lucide-react'

function Hero() {
  return (
    <section className='relative w-full bg-[url("/heropic.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20'>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black px-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-white">
            Food<span className="text-orange-500">tuck</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-orange-500">
              Menu
            </Link>
            <Link href="/blog" className="text-orange-500">
              Blog
            </Link>
            <Link href="/pages" className="text-white hover:text-orange-500">
              Pages
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500">
              About
            </Link>
            <Link href="/shop" className="text-white hover:text-orange-500">
              Shop
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-orange-500">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link href="/account">
              <button className="text-white hover:text-orange-500">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </button>
            </Link>
            <Link href="/cart">
              <button className="text-white hover:text-orange-500">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className='container mx-auto px-4 mt-16'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            404 Error
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/blog" className='text-[#FF9F0D]'>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
