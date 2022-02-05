import React from 'react';

function Footer(props) {
    return (
        <div>
           <br/>
        <footer class="md:ml-26 container mt-20 border-gray-200 items-center mx-auto px-2 md:px-14 lg:px-15 w-full">
        <div
              class="
                container
                flex flex-col flex-wrap
                px-4
                py-16
                mx-auto
                md:items-center
                lg:items-start
                md:flex-row md:flex-nowrap
              "
            >
          <div
                class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
              >
                <a
                  class="
                    flex
                    items-center
                    justify-center
                    text-4xl
                    font-bold
                    text-white
                    md:justify-start
                  "
                >
                  shopnilashik.io
                </a>
                <p class="mt-2 text-sm text-white">
                    A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity.
                </p>
              </div>

              <div class=" px-4 mt-6 items-center mx-auto lg:w-2/3 md:w-1/2">
                  <h2 class="mb-2 font-bold tracking-widest text-white">
                    Useful Links
                  </h2>
                  <ul class="mb-8 space-y-2 text-sm list-none">
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Home</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">About Me</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">My Work</a>
                    </li>
                    <li>
                      <a class="text-gray-600 hover:text-gray-800">Hire Me</a>
                    </li>
                  </ul>
                </div>

            </div>
        </footer>
        <div class="flex justify-center">
              <p class="text-base text-gray-400">
                All rights reserved by @ shopnilashik 2021
              </p>
            </div>
        </div>
    );
}

export default Footer;