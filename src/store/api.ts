import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const API_URL = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  VERIFY_EMAIL: (token: string) => `${BASE_URL}/auth/verify-email/${token}`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
  RESET_PASSWORD: (token: string) => `${BASE_URL}/auth/reset-password/${token}`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  VERIFY_AUTH: `${BASE_URL}/auth/verify-auth`,
  UPDATE_PROFILE: (id: string) => `${BASE_URL}/profile/update/${id}`,
  ADD_POST: `${BASE_URL}/post`,
  GET_POST: `${BASE_URL}/post`,
  GET_POST_BY_SLUG: (slug: string) => `${BASE_URL}/post/${slug}`,
  DELETE_POST_BY_SLUG: (slug: string) => `${BASE_URL}/post/${slug}`,
  ADD_WISHLIST: `${BASE_URL}/wishList`,
  REMOVE_WISHLIST: `${BASE_URL}/wishList`,
  GET_WISHLIST: `${BASE_URL}/wishList`,
};

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["User", "Post", "WishList"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: API_URL.REGISTER,
        method: "POST",
        body: userData,
      }),
    }),

    login: builder.mutation({
      query: (userData) => ({
        url: API_URL.LOGIN,
        method: "POST",
        body: userData,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (token) => ({
        url: API_URL.VERIFY_EMAIL(token),
        method: "GET",
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: API_URL.FORGOT_PASSWORD,
        method: "POST",
        body: { email },
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ newPassword, token }) => ({
        url: API_URL.RESET_PASSWORD(token),
        method: "POST",
        body: { newPassword },
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: API_URL.LOGOUT,
        method: "GET",
      }),
    }),

    verifyAuth: builder.mutation({
      query: () => ({
        url: API_URL.VERIFY_AUTH,
        method: "GET",
      }),
    }),

    updateProfle: builder.mutation({
      query: ({ userData, id }) => ({
        url: API_URL.UPDATE_PROFILE(id),
        method: "POST",
        body: userData,
      }),
    }),

    // post endpoint

    createPost: builder.mutation({
      query: (postData) => ({
        url: API_URL.ADD_POST,
        method: "POST",
        body: postData,
      }),
      invalidatesTags: ["Post"],
    }),

    getAllPost: builder.query({
      query: () => API_URL.GET_POST,
      providesTags: ["Post"],
    }),

    getPostBySlug: builder.query({
      query: (slug) => API_URL.GET_POST_BY_SLUG(slug),
      providesTags: ["Post"],
    }),

    deletePostBySlug: builder.mutation({
      query: (slug) => ({
        url: API_URL.DELETE_POST_BY_SLUG(slug),
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),

    // WishList enpoint

    addWishList: builder.mutation({
      query: (postId) => ({
        url: API_URL.ADD_WISHLIST,
        method: "POST",
        body: { postId },
      }),
      invalidatesTags: ["WishList"],
    }),

    removeWishList: builder.mutation({
      query: (postId) => ({
        url: API_URL.REMOVE_WISHLIST,
        method: "DELETE",
        body: { postId },
      }),
      invalidatesTags: ["WishList"],
    }),

    getWishList: builder.query({
      query: () => API_URL.GET_WISHLIST,
      providesTags: ["WishList"],
    }),
  }),
});


export const {
    useRegisterMutation,
    useLoginMutation,
    useVerifyEmailMutation,
    useVerifyAuthMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useLogoutMutation,
    useUpdateProfleMutation,
    useCreatePostMutation,
    useGetAllPostQuery,
    useGetPostBySlugQuery,
    useDeletePostBySlugMutation,
    useRemoveWishListMutation,
    useAddWishListMutation,
    useGetWishListQuery,
    
} = api;