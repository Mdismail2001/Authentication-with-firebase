import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-3">About Us</h2>
          <p className="text-sm text-gray-600">
            We are your trusted source for the latest news, bringing you
            breaking stories, insights, and in-depth analysis from around the
            world.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold mb-3">Categories</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/world" className="hover:text-primary">World</a></li>
            <li><a href="/politics" className="hover:text-primary">Politics</a></li>
            <li><a href="/business" className="hover:text-primary">Business</a></li>
            <li><a href="/sports" className="hover:text-primary">Sports</a></li>
            <li><a href="/technology" className="hover:text-primary">Technology</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-primary">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-3">Subscribe</h2>
          <p className="text-sm text-gray-600 mb-3">
            Stay updated with the latest news directly in your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-r-none"
            />
            <button className="btn btn-primary rounded-l-none">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} News Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
