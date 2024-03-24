import { IPost } from "@/models/IPost";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4173/posts";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], null>({
      query: () => "/",
      providesTags: () => [
        {
          type: "Post",
        },
      ],
    }),
  }),
});

export const { useGetPostsQuery } = api;
