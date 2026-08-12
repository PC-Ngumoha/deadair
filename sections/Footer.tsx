"use client";

import TwitterIcon from "@/assets/icons/twitter.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MailIcon from "@/assets/icons/mail.svg";

export function Footer() {
  return (
    <footer className="bg-solarized-black text-gray-100 py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Product Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected Column */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-white/10 rounded-2xl text-white/50 
                placeholder-gray-500 focus:outline-none focus:border-accent transition
                "
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent hover:bg-amber-600 rounded-3xl text-solarized-black
                text-sm tracking-tighter font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Dead Air. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 items-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-8 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@deadair.com"
                className="text-gray-400 hover:text-red-400 transition"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
