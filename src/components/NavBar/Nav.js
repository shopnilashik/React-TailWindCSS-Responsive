import React from 'react';

function Nav(props) {
  return (
    <div>
        <header class="py-6 h-5 bg-black">
        <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div class="text-lg text-white font-bold hover:text-blue-500">shopnilashik.io</div>
            <div class="hidden md:flex items-center space-x-12">
                <a href="#" class="hover:text-blue-500 text-white">Home</a>
                 <a href="#work" class="hover:text-blue-500 text-white">My Work</a>
                <a href="#clients" class="hover:text-blue-500 text-white">Clients</a>
                <a href="#hire"><button class="text-white bg-blue-700 px-6 py-2 font-bold rounded-sm">Hire me</button></a>
            </div>
            <div class="md:hidden flex items-center">
                <button class="btn-menu">
                <img width="26" height="18" src="https://img.icons8.com/fluency/48/000000/menu-rounded.png"/>
                </button>
            </div>
        </div>
      </header>

     
      
    </div>
  );
}

export default Nav;