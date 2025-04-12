import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <h2 className="font-bold text-xl border-b border-white border-opacity-30 pb-2 mb-4">THÔNG TIN LIÊN HỆ CHI TIẾT</h2>
        
        <div className="space-y-1.5 pl-1">
          <p>TIẾU LÂM TOURIST - 280 An Dương Vương, Phường 4, Quận 5, TP.HCM</p>
          <p>Hotline: 0931.32.4693 - 0931.00.5624</p>
          <p>Email: tieulamtourist@gmail.com</p>
          <p>Website: <a href="https://tieulamtourist.io.vn" className="text-white hover:text-gray-300">tieulamtourist.io.vn</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 