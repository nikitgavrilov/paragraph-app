import { IPost } from "@/models/IPost";
import { api } from "./api";
import { InitialState } from "../slices/selected-id/selectedId.slice";

export const postApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createPost: builder.mutation<null, IPost>({
      query: (post) => ({
        body: post,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Post",
        },
      ],
    }),
    deletePost: builder.mutation<null, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "Post",
        },
      ],
    }),
    editPost: builder.mutation<null, { id: null | string; post: Omit<IPost, "id" | "date"> }>({
      query: ({ id, post }) => ({
        body: post,
        url: `/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: () => [
        {
          type: "Post",
        },
      ],
    }),
  }),
});

export const { useCreatePostMutation, useDeletePostMutation, useEditPostMutation } = postApi;
