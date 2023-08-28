import React from 'react';
import logo from './../assets/images/logo.svg';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {BiLogoYoutube} from 'react-icons/bi';
import {AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      
<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                  <img src={logo} class="h-14 mr-3" alt=" Logo" />
                 
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Browse</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Live TV</a>
                      </li>
                     
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Movies</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Originals</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Networks</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Kids</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">FX</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">HELP</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline ">Account & Billing</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Plan & Pricing</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Supported & Devices </a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">ABOUT US</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Shop Hulu</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Join our Team</a>
                      </li>
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Press </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Nikhil</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 
                    <BiLogoFacebookCircle class="w-4 h-4"/>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  
                    <BiLogoYoutube class="w-4 h-4"/>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 <AiOutlineTwitter class="w-4 h-4"/>
              </a>
              
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}

export default Footer
