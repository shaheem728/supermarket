import React from 'react'
import { assets } from "../assets/assets";
const Footer = () => {
  return (
     <footer className="bg-[#27AE60] text-white py-10 px-6 md:px-16">
          <div className=" flex md:flex-row flex-col justify-between space-y-3  ">
    
            {/* Company Section */}
            <div>
              <img src={assets.Footer_Head} alt="Pokak Logo" className="w-64 mb-4" />
              <div className="flex items-center space-x-5 mt-4">
                <a href="#"><img src={assets.InstagramIcon} alt="Instagram" className="w-4 h-4" /></a>
                <a href="#"><img src={assets.FacebookIcon} alt="Facebook" className="w-3 h-4" /></a>
                <a href="#"><img src={assets.TwitterIcon} alt="Twitter" className="w-4 h-4" /></a>
                <a href="#"><img src={assets.LinkedinIcon} alt="LinkedIn" className="w-4 h-4" /></a>
              </div>
            </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-5">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-2 md:mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm font-medium ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Offers</a></li>
                <li><a href="#">Carts</a></li>
              </ul>
            </div>
    
            {/* Customer Care */}
            <div>
              <h3 className="font-semibold mb-2 md:mb-4 text-lg">Customer Care</h3>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Support</a></li>
                <li><a href="#">Cancellation & Refund Policies</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy & Policies</a></li>
              </ul>
            </div>
    
       
          </div>
          </div>
    
          {/* Bottom Bar */}
          <div className="poppins max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm  pt-4">
            <p>© 2025 Pokak Technologies Pvt Ltd</p>
          </div>
        </footer>
  )
}

export default Footer
