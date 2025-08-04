import { Mail, Instagram, Linkedin, Facebook, Twitter, X } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="min-h-70 bg-[#2a2a2a]">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-white font-semibold text-lg mt-15 mb-5">
              Company
            </h2>
            <div className="flex flex-col">
              <a href="#about" className="text-white hover:underline mb-2">
                About
              </a>
              <a className="text-gray-500 hover:underline mb-2">Careers (coming soon)</a>
              <a className="text-gray-500 hover:underline">Blog (coming soon)</a>
            </div>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mt-15 mb-5">
              Support
            </h2>
            <a className="text-gray-500 hover:underline">
              Contact Us (coming soon)
            </a>
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg mt-15 mb-5">
              Follow Us
            </h2>
            <div className="flex gap-4 text-white">
              <span className="hover:-translate-y-1 transition-all duration-300">
                <Instagram />
              </span>
              <span className="hover:-translate-y-1 transition-all duration-300">
                <Linkedin />
              </span>
              <span className="hover:-translate-y-1 transition-all duration-300">
                <Facebook />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
