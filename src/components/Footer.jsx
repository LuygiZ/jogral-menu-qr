import { Facebook, Instagram, ExternalLink } from 'lucide-react';
import Luis from "/luis.png"

const Footer = () => {
  // FOOTER INFO
  const footerData = {
    businessName: "Jogral Cafe & Brasserie",
    facebook: "https://www.facebook.com/Jogralbarbrasserie/?locale=pt_PT",
    instagram: "https://www.instagram.com/jogralbarbrasserie/",
    developerName: "Luis Santos",
    developerImage: Luis,
    portfolioUrl: "https://luissantosportfolio.vercel.app/",
    showTerms: true,
    showPrivacy: true
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
          
          {/* Links Section */}
          {(footerData.showTerms || footerData.showPrivacy) && (
            <div className="flex gap-5 text-sm">
              {footerData.showTerms && (
                <a href="#" className="text-gray-700 hover:underline">
                  Terms of Service
                </a>
              )}
              {footerData.showPrivacy && (
                <a href="#" className="text-gray-700 hover:underline">
                  Privacy Policy
                </a>
              )}
            </div>
          )}

          {/* Social Media */}
          <div className="flex gap-4">
            {footerData.facebook && (
              <a 
                href={footerData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            )}
            {footerData.instagram && (
              <a 
                href={footerData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            )}
          </div>

          {/* Developer Credit */}
          {footerData.developerName && (
            <div className="flex items-center gap-3">
              {footerData.developerImage && (
                <img 
                  src={footerData.developerImage}
                  alt={footerData.developerName}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div className="flex flex-col text-sm">
                <p className="text-gray-700">Developed by {footerData.developerName}</p>
                {footerData.portfolioUrl && (
                  <a 
                    href={footerData.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    My Portfolio
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} {footerData.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;