import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

export const metadata = {
  title: "Contact | Md. Kawsar Hussen Shohud",
  description:
    "Contact Md. Kawsar Hussen Shohud, MERN Stack Developer from Sylhet, Bangladesh. Available for freelance projects, remote jobs, and collaborations.",

  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
    "Full Stack Developer",
    "Contact Kawsar Hussen Shohud",
  ],

  authors: [{ name: "Md. Kawsar Hussen Shohud" }],
  creator: "Md. Kawsar Hussen Shohud",

  openGraph: {
    title: "Contact | Md. Kawsar Hussen Shohud",
    description:
      "Let's discuss your next project, freelance work, or collaboration opportunity.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/contact-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Md. Kawsar Hussen Shohud",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | Md. Kawsar Hussen Shohud",
    description:
      "Available for freelance, remote, and full-stack development opportunities.",
    images: ["/contact-preview.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="bg-secondary text-primary-content py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Have a project idea, freelance opportunity, or collaboration in
            mind? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Contact Information
            </h2>

            <p className="text-base-content/70 mb-8">
              MERN Stack Developer specializing in React, Next.js, Node.js,
              Express.js, MongoDB, and modern web technologies.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-primary">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:mkhshohud1999@gmail.com"
                    className="link link-hover"
                  >
                    mkhshohud1999@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-primary">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+8801706532240" className="link link-hover">
                    +880 1706-532240
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-primary">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Sylhet-3100, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/mkhshohud99"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/md-kawsar-hussen-shohud-8581592a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://mkhshohud99.github.io/my-portfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-circle btn-outline"
                  aria-label="Portfolio"
                >
                  <FaGlobe />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl font-bold">Send Message</h2>

              <form className="space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full"
                />

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}