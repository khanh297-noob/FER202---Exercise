import React, { useState, useEffect } from 'react';

const UserPosts = () => {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]); // Chạy lại mỗi khi userId thay đổi

  return (
    <div className="card shadow-sm p-4 bg-dark text-white border-0 h-100">
      <h5 className="text-warning mb-3">1. Data Fetching (User Posts)</h5>
      
      {/* Nút chuyển đổi User ID */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <label className="fw-semibold">Select User ID:</label>
        <select 
          className="form-select form-select-sm text-center" 
          style={{ width: '90px' }}
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
      </div>

      {/* Danh sách bài viết có thanh cuộn */}
      <div className="overflow-auto pe-1" style={{ maxHeight: '320px' }}>
        {loading ? (
          <div className="text-center py-4 text-warning">Đang tải bài viết...</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="p-2 mb-2 bg-secondary bg-opacity-25 rounded border border-secondary">
              <h6 className="fw-bold text-info text-capitalize mb-1">{post.title}</h6>
              <p className="small mb-0 text-light">{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserPosts;