import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">
              Shree Durvankur Greens
            </h3>
            <p className="text-sm">
              Your trusted partner for healthy plants, expert gardening services,
              and quality equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Nursery
                </Link>
              </li>
              <li>
                <Link href="/plants/indoor" className="hover:text-green-400 transition-colors">
                  Indoor Plants
                </Link>
              </li>
              <li>
                <Link href="/plants/outdoor" className="hover:text-green-400 transition-colors">
                  Outdoor Plants
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  123 Green Street, Garden City, GC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">info@durvankurgreens.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shree Durvankur Greens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
