import React, { useContext, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { BlogContext } from '../../Context/BlogContext';
import style from './addBlog.module.scss';

const AddBlog = () => {
  const { addBlog } = useContext(BlogContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let blog = { title, description, id: '' };
    addBlog(blog);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <InputText
          value={title}
          type="text"
          className={style.titleInput}
          placeholder="Blog Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <InputTextarea
          value={description}
          rows={10}
          cols={30}
          autoResize
          placeholder="Blog Description..."
          className={style.descriptionInput}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <Button
          onClick={handleSubmit}
          label="Submit Form"
          className={style.submitInput}
        />
      </form>
    </div>
  );
};

export default AddBlog;
