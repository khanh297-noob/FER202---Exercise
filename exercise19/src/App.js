import React from 'react';
import animals from './data/data';
import AnimalCard from './components/AnimalCard';

function App() {
  // Hàm chuyển object thành chuỗi key: value rồi alert lên màn hình
  const showAdditional = (additional) => {
    const alertInformation = Object.entries(additional)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(alertInformation);
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        {/* Tiêu đề trang */}
        <h1 className="text-center fw-bold text-dark mb-4 display-5">Animals</h1>

        {/* Lưới 3 cột hiển thị các AnimalCard */}
        <div className="row g-4 justify-content-center">
          {animals.map((animal) => (
            <div key={animal.name} className="col-lg-4 col-md-6 col-12">
              <AnimalCard
                name={animal.name}
                scientificName={animal.scientificName}
                size={animal.size}
                diet={animal.diet}
                image={animal.image}
                additional={animal.additional}
                showAdditional={showAdditional}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;