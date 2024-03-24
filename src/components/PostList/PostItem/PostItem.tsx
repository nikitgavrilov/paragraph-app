import { IPost } from "@/models/IPost";
import React from "react";
import styles from "./PostItem.module.scss";
import { useDeletePostMutation } from "@/redux/api/post.api";
import { useActions } from "@/hooks/useActions";
import Modal from "@/components/Modal/Modal";
import PostForm from "@/components/PostFrom/PostForm";
import { useAppSelector } from "@/hooks/useAppSelector";

interface PostItemProps {
  post: IPost;
  index: number;
}

const PostItem: React.FC<PostItemProps> = ({ post, index }) => {
  const [deletePost] = useDeletePostMutation();
  const { setPostIdToEdit, toggleModal, toggleMode } = useActions();
  const { mode } = useAppSelector((state) => state.modalReducer);

  console.log(mode, post);

  return (
    <>
      <div className={styles.column}>
        <div className="flex flex-col border-solid border-2 border-indigo-500 p-4">
          <h2 className="mb-1 text-lg">
            {index + 1}. {post.title}
          </h2>
          <h3 className="text-zinc-600 mb-4">Publication date: {post.date}</h3>
          <p className="text-sm leading-6 flex-auto mb-4">{post.body}</p>
          <div>
            <div className="flex justify-between gap-4">
              <button
                onClick={() => deletePost(post.id)}
                className="border-solid
					 border-2 text-lg py-2 px-9
					  border-red-600 hover:bg-red-600 transition-all"
              >
                Delete post
              </button>
              <button
                onClick={() => {
                  setPostIdToEdit(post.id);
                  toggleMode("edit");
                  toggleModal(true);
                }}
                className="border-solid
					 border-2 text-lg py-2 px-9
					  border-amber-600 hover:bg-amber-600 transition-all"
              >
                Edit post
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal key={post.id}>
        <PostForm mode={mode} postToEdit={{ id: post.id, title: post.title, body: post.body, date: post.date }} />
      </Modal>
    </>
  );
};

export default PostItem;
