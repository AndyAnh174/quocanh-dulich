import React from 'react';
import logoSaigon from '../assets/webyapping/saigon.png';
import logoThuDuc from '../assets/webyapping/teu.png';

const Header = () => {
  return (
    <div className="relative mb-8">
      <header className="flex justify-between items-center p-4 bg-white">
        <div className="logo">
          <img src={logoThuDuc} alt="Thủ Đức Logo" className="w-56 h-auto" />
        </div>
        <div className="right-logo">
          <img src={logoSaigon} alt="Sài Gòn Năng Động" className="w-100 h-auto" />
        </div>
      </header>
      <div className="w-9/10 h-1 bg-black mx-auto"></div>
    </div>
  );
};

export default Header; 