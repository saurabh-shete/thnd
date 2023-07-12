import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#f3f2f2] text-green-800 p-4 text-center">
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/saurabh-shete/thnd"
          className="text-green-800 hover:text-green-600 font-semibold mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span className="text-green-800">&copy; 2023 Krishi AI</span>
      </div>
    </footer>
  );
}

export default Footer;
