import React, { useContext } from 'react';
import style from './blogById.module.scss';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { BlogContext } from '../../Context/BlogContext';
import { useHistory } from 'react-router-dom';
import { EDIT_BLOG } from '../../_utility/menuItem';

const BlogById = () => {
  const history = useHistory();
  const { removeBlog, blogs, setEditBlog } = useContext(BlogContext);

  // * ACCESSING ID OF SINGLE BLOG
  const { id } = useParams();

  const getBlogById = (blogId) => {
    const filteredBlog = blogs.filter((blog) => blog.id === parseInt(blogId));
    return filteredBlog[0];
  };

  const blog = getBlogById(id);

  // * IMPORTING FUNCTION FROM CONTEXT FOR BLOG DELETE FUNCTION
  const handleDelete = () => {
    removeBlog(id);
    history.push('/');
  };

  // ! UPDATE/EDIT BLOG
  // * STEP 1 FOR EDIT BLOG & UPDATING THE EDIT_BLOG STATE IN CONTEXT
  // STEP 2 IN BLOG_CONTEXT PAGE
  const handleEdit = () => {
    // const editBlogState = blog;
    setEditBlog(blog);
    history.push(EDIT_BLOG);
  };
  //STEP 3 IN ADD_BLOG PAGE

  return (
    <div className={style.blogId}>
      <h1 className={style.blogIdTitle}>{blog.title}</h1>
      <p className={style.blogIdDescription}>{blog.description}</p>
      <Button
        label="DELETE"
        icon="pi pi-times"
        className={`p-button-lg p-button-danger ${style.deleteButton}`}
        onClick={handleDelete}
      />
      <Button
        label="EDIT"
        icon="pi pi-print"
        className={`p-button-lg p-button-primary ${style.editButton}`}
        onClick={handleEdit}
      />
    </div>
  );
};

export default BlogById;
