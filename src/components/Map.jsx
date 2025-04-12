import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import congvien from '../assets/congvien.jpg';
import hosenhonha from '../assets/hosen.jpg';
import vietgangz from '../assets/vietgang.jpg';
import baotangao from '../assets/aodai.jpg';

// Sửa lỗi icon mặc định của Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Component tạo lộ trình đường đi
const RoutingMachine = ({ waypoints, showRoutes }) => {
  const map = useMap();
  
  useEffect(() => {
    if (!map || !showRoutes) return;
    
    const routingControl = L.Routing.control({
      waypoints: waypoints.map(wp => L.latLng(wp[0], wp[1])),
      routeWhileDragging: false,
      lineOptions: {
        styles: [{ color: '#0066ff', weight: 7, opacity: 0.9 }]
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      createMarker: () => null // Không tạo marker mặc định
    }).addTo(map);
    
    // Ẩn bảng hướng dẫn
    routingControl.hide();
    
    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints, showRoutes]);
  
  return null;
};

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showRoutes, setShowRoutes] = useState(true);
  
  useEffect(() => {
    // Đảm bảo CSS của Leaflet được tải
    setMapLoaded(true);
  }, []);
  
  // Dữ liệu các địa điểm
  const locations = [
    {
      id: 1,
      position: [10.888077167554954, 106.81956808023814],
      name: "Công viên Lịch Sử - Văn Hóa Dân tộc",
      address: "Đường 16, khu phố Vĩnh Thuận, p. Long Bình, Tp. Thủ Đức, Tp.HCM",
      description: "Tham quan & Lắng nghe thuyết minh; Thử thách giải mật thư \"Dấu Ấn Thời Gian\": Dựa trên thông tin từ phần thuyết minh và quan sát tại chỗ để giải các mật thư/câu đố",
      image: congvien
    },
    {
      id: 2,
      position: [10.800793109730417, 106.8425424109277],
      name: "Hồ Sen Hồ Nhà",
      address: "233/22 Đ. Tam Đa, Trường Thạnh, Tp.Thủ Đức, TP.HCM",
      description: "Thưởng thức các món đặc sản Nam Bộ, và đặc sản nem Thủ Đức.",
      image: hosenhonha
    },
    {
      id: 3,
      position: [10.805598058500516, 106.86455770032961],
      name: "Vietgangz",
      address: "169 Đường Số 5, p.Long Phước, TP. Thủ Đức, TP. Hồ Chí Minh",
      description: "Chuỗi các trò chơi teambuilding được thiết kế đặc biệt nhấn mạnh vào việc sử dụng và phối hợp các giác quan khác nhau; BBQ gắn kết ngoài trời; Lửa trại \"Chạm cảm xúc\" nơi tất cả mọi người quây quần bên nhau; Bữa sáng \"Nắng mới\" với không gian trong lành kế sông tại đây",
      image: vietgangz
    },
    {
      id: 4,
      position: [10.808646913332515, 106.8530354093281],
      name: "Bảo tàng áo dài",
      address: "206/19, 30 Long Thuận, Long Phước, Tp. Thủ Đức",
      description: "Tham quan tự do, chiêm ngưỡng các bộ sưu tập áo dài, tìm hiểu về lịch sử, văn hóa gắn liền với trang phục truyền thống. Chụp ảnh lưu niệm.",
      image: baotangao
    }
  ];

  // Tạo waypoints cho routing
  const tourWaypoints = [
    locations[0].position, // Điểm 1: Công viên Lịch Sử - Văn Hóa Dân tộc
    locations[1].position, // Điểm 2: Hồ Sen Hồ Nhà
    locations[2].position, // Điểm 3: Vietgangz
    locations[3].position  // Điểm 4: Bảo tàng áo dài
  ];

  // Xử lý khi click vào marker
  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  // Xử lý khi đóng thông tin chi tiết
  const handleCloseDetail = () => {
    setSelectedLocation(null);
  };

  // Bật tắt hiển thị đường kẻ
  const toggleRoutes = () => {
    setShowRoutes(!showRoutes);
  };

  // Tạo custom icon cho marker với số thứ tự
  const createNumberedIcon = (number) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="marker-number">${number}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">ĐỊA ĐIỂM KHÁM PHÁ</h2>
        
        {/* Map Controls */}
        <div className="mb-4 flex justify-end">
          <button 
            onClick={toggleRoutes}
            className={`px-3 py-1 rounded text-sm ${showRoutes ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {showRoutes ? 'Ẩn lộ trình' : 'Hiện lộ trình'}
          </button>
        </div>
        
        {/* Tour giới thiệu */}
        <div className="mb-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="text-xl font-semibold mb-2 text-yellow-800">Lộ trình khám phá Thủ Đức</h3>
          <p className="text-sm text-yellow-700">
            Hành trình khám phá Thủ Đức bắt đầu từ Công viên Lịch Sử - Văn Hóa Dân tộc, 
            sau đó di chuyển đến Hồ Sen Hồ Nhà để thưởng thức ẩm thực đặc sản. 
            Tiếp theo là hoạt động team building tại Vietgangz, 
            và kết thúc bằng việc tham quan Bảo tàng áo dài.
          </p>
        </div>
        
        {/* Map Container */}
        <div className="h-[500px] mb-8 relative z-0 rounded-lg overflow-hidden shadow-lg">
          {mapLoaded && (
            <MapContainer 
              center={[10.83, 106.83]} 
              zoom={12} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              
              {/* Sử dụng Routing Machine cho đường đi thực tế */}
              {showRoutes && <RoutingMachine waypoints={tourWaypoints} showRoutes={showRoutes} />}
              
              {/* Hiển thị các marker */}
              {locations.map((location, index) => (
                <Marker 
                  key={location.id} 
                  position={location.position}
                  eventHandlers={{
                    click: () => handleMarkerClick(location),
                  }}
                  icon={createNumberedIcon(index + 1)}
                />
              ))}
            </MapContainer>
          )}
        </div>
        
        {/* Hiển thị các điểm dưới dạng danh sách */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleMarkerClick(location)}
            >
              <div className="flex items-center mb-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                  {index + 1}
                </span>
                <h3 className="font-bold">{location.name}</h3>
              </div>
              <p className="text-sm text-gray-600">{location.address}</p>
            </div>
          ))}
        </div>
        
        {/* Location Detail Modal */}
        {selectedLocation && (
          <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="modal-container max-w-lg w-full">
              <div className="relative">
                {/* Modal header */}
                <div className="flex justify-between items-center px-4 py-2 border-b">
                  <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
                  <button 
                    onClick={handleCloseDetail}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Modal image */}
                <div className="h-64 bg-gray-200">
                  <img 
                    src={selectedLocation.image} 
                    alt={selectedLocation.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Modal content */}
                <div className="p-4 bg-white">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Địa chỉ:</h4>
                    <p className="text-sm text-gray-600">{selectedLocation.address}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-1">Thông tin:</h4>
                    <p className="text-sm text-gray-600">{selectedLocation.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MapComponent; 