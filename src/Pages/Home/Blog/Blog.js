import React from 'react';
import style from './blog.module.scss';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = JSON.parse(localStorage.getItem('blogs'));
  return (
    <div className={style.blogList}>
      {blogs
        ? blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <Card title={blog.title} className={style.card}>
                  <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                    {blog.description.slice(0, 140)}
                    <button className={style.readMoreButton}>
                      <Link to={`/blog/${blog.id}`}>...READ MORE</Link>
                    </button>
                  </p>
                </Card>
              </div>
            );
          })
        : 'No Blog To display'}
    </div>
  );
};

export default Blog;
