import React, { useContext, useState } from 'react';
import style from './editBlog.module.scss';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { BlogContext } from '../../Context/BlogContext';

const EditBlog = () => {
  const { editBlog, updateBlog } = useContext(BlogContext);

  const [title, setTitle] = useState(editBlog ? editBlog.title : '');
  const [description, setDescription] = useState(
    editBlog ? editBlog.description : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog({ title, description });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <InputText
          value={title}
          type="text"
          className={style.titleInput}
          placeholder="Blog Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <InputTextarea
          value={description}
          rows={10}
          cols={30}
          autoResize
          placeholder="Blog Description..."
          className={style.descriptionInput}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Button
          onClick={handleSubmit}
          label="Update Form"
          className={style.submitInput}
        />
      </form>
    </div>
  );
};

export default EditBlog;
