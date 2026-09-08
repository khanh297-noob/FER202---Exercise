import React from 'react';

const CourseList = () => {
  const courses = ['React', 'ReactNative', 'NodeJs'];

  return (
    <div style={{ marginTop: '25px' }}>
      <h1 style={{ color: '#0000ff', fontSize: '46px', fontWeight: 'bold' }}>
        This is JSX
      </h1>
      <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '20px' }}>
        Course names
      </h2>
      <ul style={{ fontSize: '24px', lineHeight: '2' }}>
        {courses.map((course, idx) => (
          <li key={idx}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;