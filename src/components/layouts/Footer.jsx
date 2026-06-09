import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Logo />

            <p className="mt-4 text-base-content/70 leading-relaxed">
              Best destination for the kids.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/mkhshohud99"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-sm"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/md-kawsar-hussen-shohud-8581592a5/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-sm"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://mkhshohud99.github.io/my-portfolio/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-outline btn-sm"
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>

            <div className="flex flex-col gap-3">
              <Link href="/" className="link link-hover">
                Home
              </Link>

              <Link href="/about" className="link link-hover">
                About
              </Link>

              <Link href="/projects" className="link link-hover">
                Projects
              </Link>

              <Link href="/contact" className="link link-hover">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span className="text-sm">
                  mkhshohud1999@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                <span className="text-sm">
                  +880 1706-532240
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-sm">
                  Sylhet-3100, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-base-300 mt-10 pt-6 text-center">
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Md. Kawsar Hussen Shohud. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;