import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HelloReact from './components/HelloReact';
import ReactLogo from './components/ReactLogo';
import CourseList from './components/CourseList';
import CompanyTable from './components/CompanyTable';
import { runES6Exercises } from './es6Exercises';

function App() {
  
  useEffect(() => {
    runES6Exercises();
  }, []);

  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
      <Navbar />
      <div style={{ padding: '30px' }}>
        <HelloReact />
        <ReactLogo />
        <hr style={{ margin: '30px 0' }} />
        <CourseList />
        <hr style={{ margin: '30px 0' }} />
        <CompanyTable />
      </div>
    </div>
  );
}

export default App;