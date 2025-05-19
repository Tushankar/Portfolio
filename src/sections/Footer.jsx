const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/Tushankar" target="_blank" rel="noopener noreferrer" className="social-icon transition-transform duration-0 ease-linear hover:scale-125">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/tushankar-saha-5674a3254" target="_blank" rel="noopener noreferrer" className="social-icon transition-transform duration-0 ease-linear hover:scale-125">
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 cursor-pointer" />
        </a>
        <a href="https://www.naukri.com/code360/profile/tushankar" target="_blank" rel="noopener noreferrer" className="social-icon transition-transform duration-0 ease-linear hover:scale-125">
          <img src="/assets/codingninjas.svg" alt="codingninjas" className="w-1/2 h-1/2 cursor-pointer" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/sahatusha256n/" target="_blank" rel="noopener noreferrer" className="social-icon transition-transform duration-0 ease-linear hover:scale-125">
          <img src="/assets/geeksforgeeks.svg" alt="geeksforgeeks" className="w-1/2 h-1/2 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_tush4nkar/" target="_blank" rel="noopener noreferrer" className="social-icon transition-transform duration-0 ease-linear hover:scale-125">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 cursor-pointer" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Tushankar Saha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
