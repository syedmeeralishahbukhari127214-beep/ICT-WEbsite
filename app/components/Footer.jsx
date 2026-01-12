
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <div className="flex justify-center bg-gray-100 px-4">
        <div className="flex flex-col lg:flex-row bg-[#3D4098] mt-24 pt-18 rounded-3xl w-full max-w-5xl gap-10 items-center px-6 pb-10">
          
          {/* Image */}
          <div className="flex justify-center">
            <img
              className="w-60 lg:w-72 lg:-mt-36"
              src="image 8.png"
              alt=""
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-white font-bold text-2xl lg:text-[28px]">
              Subscribe to our newsletter <br className="hidden lg:block" />
              for the latest updates and insights.
            </h1>

            {/* Input */}
            <div className="flex flex-col sm:flex-row items-center mt-4 border-2 border-gray-400 rounded-full px-3 py-2 w-full sm:max-w-md mx-auto lg:mx-0 gap-3">
              <input
                type="email"
                placeholder="@ Enter your email"
                className="flex-1 bg-transparent text-white placeholder-white outline-none px-3"
              />
              <button className="bg-white text-black font-medium px-6 py-2 rounded-full w-full sm:w-auto">
                Subscribe
              </button>
            </div>

            <p className="text-white mt-3 text-sm">
              Stay ahead with the latest updates, insights,
              <br className="hidden lg:block" /> and events from Macat Megatrons.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-white -mt-20 py-16 pt-40 rounded-[40px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <img src="/logo ict.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Macat Megatrons is a thriving community where innovators,
              professionals, and enthusiasts come together to share
              knowledge, collaborate, and grow.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Important links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/mentors">Our Mentors</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="/courses/usa-taxation">US Taxation</a></li>
              <li><a href="/courses/uk-taxation">UK Taxation</a></li>
              <li><a href="/courses/uae-taxation">UAE Taxation</a></li>
              <li><a href="/courses/saudi-taxation">Saudi Taxation</a></li>
              <li><a href="/courses">View All</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex gap-3">
                <span className="text-[#3D4098] text-lg">
                  <FaMapMarkerAlt />
                </span>
                Plot No. 63, Service Road, I-10/3 North, Islamabad
              </li>
              <li className="flex gap-3">
                <span className="text-[#3D4098] text-lg">
                  <FaPhone />
                </span>
                03710194615
              </li>
              <li className="flex gap-3">
                <span className="text-[#3D4098] text-xl">
                  <IoIosMail />
                </span>
                admission@ict.net.pk
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-gray-200 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2025 ICT. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
            <a href="">Legal</a>
            <a href="">Sitemap</a>
          </div>
        </div>
      </div>
    </>
  );
}
