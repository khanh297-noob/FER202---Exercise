import React from 'react';

const CompanyTable = () => {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  // Lọc category "Retail", tăng start thêm 1
  const retailCompanies = companies
    .filter(comp => comp.category === "Retail")
    .map(comp => ({ ...comp, start: comp.start + 1 }));

  return (
    <div style={{ maxWidth: '850px', marginTop: '30px' }}>
      <h3 style={{ marginBottom: '15px' }}>Retail Companies Table</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {retailCompanies.map((item, idx) => (
          <div 
            key={idx} 
            style={{ 
              display: 'flex', 
              border: '2px solid #d3d3d3', 
              padding: '12px 20px', 
              fontWeight: 'bold', 
              fontSize: '20px' 
            }}
          >
            <div style={{ flex: 2, textAlign: 'center' }}>{item.name}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{item.start}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{item.end}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTable;