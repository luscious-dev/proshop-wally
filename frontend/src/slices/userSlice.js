import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({ url: `${USERS_URL}/profile` }),
    }),
    getUserById: builder.query({
      query: (id) => ({ url: `${USERS_URL}/${id}` }),
    }),
    getAllUsers: builder.query({
      query: () => ({ url: `${USERS_URL}` }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    updateUser: builder.mutation({
      query: (id, data) => ({
        url: `${USERS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUpdateUserProfileMutation,
  useLogoutUserMutation,
} = userSlice;
