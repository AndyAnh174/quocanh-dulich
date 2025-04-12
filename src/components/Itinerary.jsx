import React from 'react';

const Itinerary = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
          <span className="text-pink-500">👉 LỊCH TRÌNH CHI TIẾT</span>
        </h2>
        
        <div className="border-t border-b border-gray-300 py-6 my-4">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-red-500">📍 NGÀY 1: Tìm hiểu Công viên lịch sử - văn hóa dân tộc & Vietgangz</span>
            </h3>
            
            <div className="pl-6">
              <p className="mb-3 text-xl">
                <span className="font-bold">🌅 Buổi sáng: (Ăn sáng tự túc)</span>
              </p>
              <p className="mb-5 pl-6 text-lg">
                Đến Thành phố Thủ Đức, Quý khách sẽ di chuyển tham quan, nghe thuyết minh tại Đền Hùng thuộc Công viên lịch sử - văn hóa dân tộc, sau đó được tham gia Thử thách giải mật thư "Dấu Ấn Thời Gian" ngay nơi đây.
              </p>
              
              <p className="mb-3 text-xl">
                <span className="font-bold">🍱 Buổi trưa:</span>
              </p>
              <p className="mb-5 pl-6 text-lg">
                Đoàn dùng bữa tại nhà hàng địa phương, với các đặc sản Nam Bộ.
              </p>
              <p className="mb-5 pl-6 text-lg">
                Đoàn di chuyển đến Vietgangz - Nơi diễn ra chuỗi các trò chơi teambuilding được thiết kế đặc biệt nhấn mạnh vào việc sử dụng và phối hợp các giác quan khác nhau. Ngoài ra còn các hoạt động tự do tại đây: Chèo sup, Câu cá, Pickleball,...
              </p>
              
              <p className="mb-3 text-xl">
                <span className="font-bold">🍽️ Buổi tối:</span>
              </p>
              <p className="mb-5 pl-6 text-lg">
                Đoàn dùng bữa tối BBQ gắn kết ngoài trời, tự do ca hát, trò chuyện.
              </p>
              <p className="mb-5 pl-6 text-lg">
                Hoạt động Lửa trại "Chạm cảm xúc": Cùng nhau quây quần bên lửa trại, tham gia các trò chơi nhỏ quanh lửa trại, hát hò, chia sẻ cảm xúc, câu chuyện.
              </p>
              <p className="mb-5 pl-6 text-lg">
                Khoảnh khắc lắng đọng, chia sẻ chân thành, thắt chặt tình cảm đồng đội.
              </p>
              <p className="mb-5 pl-6 text-lg">
                Tự do hoạt động về đêm tại Vietgangz.
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-red-500">📍 NGÀY 2: THAM QUAN BẢO TÀNG ÁO DÀI</span>
            </h3>
            
            <div className="pl-6">
              <p className="mb-3 text-xl">
                <span className="font-bold">🌅 Buổi sáng:</span>
              </p>
              <p className="mb-5 pl-6 text-lg">
                Đoàn dùng bữa sáng "Nắng mới" tại Vietgangz.
              </p>
              <p className="mb-5 pl-6 text-lg">
                Tham quan tự do, chiêm ngưỡng các bộ sưu tập áo dài, tìm hiểu về lịch sử, văn hóa gắn liền với trang phục truyền thống tại Bảo tàng Áo Dài duy nhất tại Thành phố Hồ Chí Minh. Chụp ảnh lưu niệm.
              </p>
              <p className="mb-5 pl-6 text-lg">
                Chia tay và chào tạm biệt trên xe trở về công ty.
              </p>
              <p className="mb-5 pl-6 text-xl font-bold">
                <span>🚌 Hẹn gặp lại quý khách trên các chuyến đi sau - Kết thúc hành trình</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary; 