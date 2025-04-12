import React from 'react';

const PricingInfo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Giá Tour */}
        <div className="flex justify-center mb-12">
          <div className="bg-cyan-500 rounded-full py-1 px-8 flex items-center max-w-md">
            <span className="text-white text-3xl md:text-4xl font-bold">
              1.540.000 Đồng/Pax
            </span>
          </div>
        </div>
        
        {/* Giá tour bao gồm */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-cyan-500 text-white font-bold text-2xl md:text-3xl py-3 px-8 rounded-full inline-block mb-6">
            💰 Giá tour bao gồm:
          </div>
          
          <ul className="list-disc pl-8 space-y-3 text-xl">
            <li>Lều máy lạnh: 04 khách /lều</li>
            <li>Xe du lịch đưa đón theo chương trình (xe đời mới, có máy lạnh, hệ thống âm thanh, màn hình tivi và wifi)</li>
            <li>Ăn uống theo chương trình:
              <ul className="list-none pl-6 space-y-2 mt-2 text-xl">
                <li>+ Bữa sáng: 01 bữa tại Vietgangz Glamping</li>
                <li>+ Bữa chính: 01 bữa trưa với tiêu chuẩn 150.000 /khách, 01 bữa tối tại Vietgangz.</li>
              </ul>
            </li>
            <li>Vé các điểm tham quan trong chương trình</li>
            <li>Chi phí tổ chức teambuilding:
              <ul className="list-none pl-6 space-y-2 mt-2 text-xl">
                <li>+ Âm thanh, sân bãi</li>
                <li>+ MC hoạt náo</li>
                <li>+ Áo team, vật dụng sử dụng trong các trò chơi</li>
                <li>+ Nhân sự tổ chức chương trình</li>
              </ul>
            </li>
            <li>VAT 10%</li>
          </ul>
        </div>
        
        <div className="border-t border-gray-300 my-10 max-w-4xl mx-auto"></div>
        
        {/* Tour không bao gồm */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-cyan-500 text-white font-bold text-2xl md:text-3xl py-3 px-8 rounded-full inline-block mb-6">
            ⛔ Tour không bao gồm:
          </div>
          
          <ul className="list-disc pl-8 space-y-3 text-xl">
            <li>Chi phí cá nhân, điện thoại, giặt ủi, tham quan ngoài chương trình.</li>
            <li>Phụ thu phòng đơn (nếu có).</li>
            <li>Tiền tip cho bác tài và HDV (nếu có)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingInfo; 