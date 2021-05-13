import React, { useState, createContext } from 'react';

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(
    JSON.parse(localStorage.getItem('blogs')) || []
  );
  const [editBlog, setEditBlog] = useState({});

  // ! ADD BLOG
  const addBlog = (blog) => {
    const newBlog = { ...blog, id: blogs.length + 1 };
    const newBlogs = [...blogs, newBlog];
    setBlogs(newBlogs);
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
  };

  // ! DELETE BLOG
  const removeBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== parseInt(id));
    setBlogs(newBlogs);
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
  };

  // ! UPDATE BLOG
  // * STEP 2 FOR CHECKING IF THE STATE IS CHANGING
  //  STEP 1 IN BLOG PAGE (BLOG_BY_ID)
  // useEffect(() => {
  //   const blogToUpdate = () => {
  //     let newBlogs = [...blogs];
  //     // const newBlog = { title, description, id: editBlog.id };
  //     const editableBlogIndex = newBlogs.findIndex(
  //       (blog) => blog.id === editBlog.id
  //     );
  //     console.log(editableBlogIndex);
  //     newBlogs[editableBlogIndex] = editBlog;
  //     // console.log(newBlogs,editBlog)
  //     setBlogs(newBlogs);
  //     setEditBlog('');
  //   };
  //   blogToUpdate();
  // }, [editBlog]);
  const updateBlog = ({ title, description }) => {
    const newBlogs = [...blogs];
    const index = blogs.findIndex((blog) => blog.id === editBlog.id);
    newBlogs[index] = { ...editBlog, title, description };
    setBlogs(newBlogs);
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
  };

  // STEP 3 IN ADD_BLOG PAGE

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        addBlog,
        removeBlog,
        editBlog,
        setEditBlog,
        updateBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
