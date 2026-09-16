import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelloWorld, PersonalInfo } from './components/PersonalInfo';
import Counter from './components/Counter';
import SimpleCard from './components/SimpleCard';
import SimpleWebsite from './components/SimpleWebsite';

function App() {

  const cardData1 = {
    title: 'Kudoskibidi - FPT HaNoi',
    description: 'Su that chi co 1',
    imageUrl: 'https://24hstore.vn/upload_images/images/hinh-nen-conan/full-hd-4k/hinh-nen-4k-conan.png'
  };

  const cardData2 = {
    title: 'Conan - FPT HaNoi',
    description: 'Mobile: 0982827763',
    imageUrl: 'https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-nen-dien-thoai-conan-ngau-1-25-15-39-58.jpg'
  };

  return (
    <div className="container py-4" style={{ maxWidth: '900px' }}>
      <h2 className="border-bottom pb-2 mb-4 text-secondary">Exercise 9: React Component Showcase</h2>

      {}
      <div className="mb-4">
        <HelloWorld />
        <PersonalInfo 
          name="Nguyễn Văn Khánh" 
          bio="Sinh viên ngành Kỹ thuật Phần mềm tại FPT University" 
        />
      </div>

      {}
      <div className="mb-4">
        <Counter />
      </div>

      <hr />

      {}
      <div className="mb-4">
        <h4 className="fw-bold">Simple Cards (Component Breakdown)</h4>
        <SimpleCard item={cardData1} />
        <SimpleCard item={cardData2} />
      </div>

      <hr />

      {/* 4. Simple Website Layout */}
      <div className="mb-4">
        <h4 className="fw-bold">Simple Website</h4>
        <SimpleWebsite />
      </div>
    </div>
  );
}

export default App;