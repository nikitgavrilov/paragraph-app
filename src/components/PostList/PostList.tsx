"use client";

import { useGetPostsQuery } from "@/redux/api/api";
import React from "react";
import PostItem from "./PostItem/PostItem";

const PostList: React.FC = () => {
  const { data: posts } = useGetPostsQuery(null);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {posts?.map((post, index) => {
        return <PostItem post={post} index={index} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
