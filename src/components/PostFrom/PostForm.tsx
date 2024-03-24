"use client";

import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/hooks/useAppSelector";
import { IPost } from "@/models/IPost";
import { useGetPostsQuery } from "@/redux/api/api";
import { useCreatePostMutation, useEditPostMutation } from "@/redux/api/post.api";
import { formattedDate } from "@/utils/formattedDate";
import React from "react";

interface PostFormAdd {
  mode: "add";
}
interface PostFormEdit {
  mode: "edit";
  postToEdit: IPost;
}

type PostFormProps = PostFormAdd | PostFormEdit;

const defaultPost = {
  title: "",
  body: "",
};

const PostForm: React.FC<PostFormProps> = (props) => {
  const isEdit = props.mode === "edit";

  const { toggleModal, setPostIdToEdit } = useActions();
  const [post, setPost] = React.useState(isEdit ? props.postToEdit : defaultPost);
  const { data: posts } = useGetPostsQuery(null);
  const [createPost] = useCreatePostMutation();
  const [editPost] = useEditPostMutation();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      editPost({ id: props.postToEdit.id, post: { title: post.title, body: post.body } }).then(() => {
        setPostIdToEdit(null);
        toggleModal(false);
      });
    }

    if (!isEdit) {
      const currentDate = formattedDate();

      if (posts && posts.length) {
        const newId = Number(posts[posts.length - 1].id) + 1;
        const newPost = { ...post, id: String(newId), date: currentDate };

        createPost(newPost).then(() => {
          setPost(defaultPost);
          toggleModal(false);
        });
      } else {
        const newPost = { ...post, id: "0", date: currentDate };

        createPost(newPost).then(() => {
          setPost(defaultPost);
          toggleModal(false);
        });
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl">{isEdit ? " Edit post" : "Add new post"}</h2>
      <div className="flex flex-col">
        <input
          required
          value={post.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Enter title"
          className="border-solid 
					border-2 py-2 px-4 mb-2 
					cursor-pointer outline-none
					 hover:border-indigo-500 focus:border-indigo-500 transition-all"
        />
        <textarea
          required
          value={post.body}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPost({ ...post, body: e.target.value })}
          placeholder="Enter description"
          className="border-solid leading-6
					border-2 py-2 px-4 mb-2 
					cursor-pointer outline-none transition
					 hover:border-indigo-500 focus:border-indigo-500"
          style={{ resize: "vertical" }}
        />
      </div>
      <button className="border-solid border-2 border-black py-2 px-4 hover:bg-indigo-500 hover:text-white transition-all">
        {isEdit ? "Edit" : "Add new post"}
      </button>
    </form>
  );
};

export default PostForm;
