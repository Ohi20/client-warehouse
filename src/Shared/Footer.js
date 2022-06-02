import React from 'react';

const Footer = () => {
    return (
        <footer style={
            {
                background: `url()`,
                backgroundSize: 'cover'
            }
        } className=" p-10 ">
  <div className='footer text-xl text-white'>
  <div >
    <span class="footer-title text-white">Categories</span> 
    <a class="link link-hover">Cars</a>
    <a class="link link-hover">Engines</a>
    <a class="link link-hover">Tools</a>
    <a class="link link-hover">Tires</a>
  </div> 
  <div>
    <span class="footer-title text-white">Company</span> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title text-white">Legal</span> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
  </div>
  <footer class="footer footer-center pt-6 text-base-content">
  <div>
    <p className='text-xl text-white font-bold'>Copyright © 2022 - Ashraf Ohi - Programming Hero</p>
  </div>
</footer>
</footer>
    );
};

export default Footer;