import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Features", href: "#features", isActive: true },
    { name: "Insights", href: "#insights", isActive: false },
    { name: "About", href: "#about", isActive: false },
    { name: "Case Studies", href: "#case-studies", isActive: false, isStrikethrough: true },
    { name: "Contact", href: "#contact", isActive: false },
  ];

  return (
    <div className="w-full h-full relative py-2">
      {/* Logo */}
      <div className="absolute left-0 top-2 flex items-center gap-2">
        <div className="text-white text-[37px] font-inter font-medium leading-[40.7px] text-center">
          Logotype
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0">
        <div
          className="px-3 py-[10px] pl-3 pr-5 rounded-2xl border border-white/10 backdrop-blur-[18px] flex flex-col gap-2"
          style={{
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)'
          }}
        >
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center">
                {link.isActive ? (
                  <div
                    className="px-4 py-2 rounded-[10px] border border-white/10 flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(151deg, white 0%, rgba(255, 255, 255, 0) 100%)'
                    }}
                  >
                    <div className="w-[68px] text-center text-white font-geist font-normal text-base leading-[27.2px]">
                      {link.name}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`text-center text-white font-geist font-normal text-base leading-[27.2px] min-w-[68px] flex justify-center ${
                      link.isStrikethrough ? 'line-through' : ''
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden lg:block absolute right-0 top-2">
        <Button
          variant="navbar-cta"
          className="overflow-hidden"
          style={{
            background: 'linear-gradient(201deg, white 0%, #F3F3F3 100%)',
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.03)'
          }}
        >
          Get Started for Free
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden absolute right-4 top-4">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-gray-300 p-2 rounded-md transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 z-50 animate-fade-in">
          <div
            className="mx-4 px-4 py-6 rounded-2xl border border-white/10 backdrop-blur-[18px]"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(153, 153, 153, 0.10) 100%)'
            }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-white font-geist font-normal text-base leading-[27.2px] py-2 px-4 rounded-lg transition-colors duration-200 ${
                    link.isActive 
                      ? 'bg-white/20' 
                      : 'hover:bg-white/10'
                  } ${
                    link.isStrikethrough ? 'line-through' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="navbar-cta"
                  className="w-full overflow-hidden"
                  style={{
                    background: 'linear-gradient(201deg, white 0%, #F3F3F3 100%)',
                    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.03)'
                  }}
                >
                  Get Started for Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;