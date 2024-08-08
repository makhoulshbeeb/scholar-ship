import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    headers: {
      'authorization' : `Bearer ${localStorage.getItem('token')}`,
      'Content-Type' : 'application/json'
    },
    tagTypes:['User'],
    endpoints: (builder) => ({
      getAllUsers: builder.query({
        query: () => 'users/',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'User', id })), 'User']
            : ['User'],
      }),
      getUserByUsername: builder.query({
        query:({username})=>`users/${username}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'User', id })), 'User']
            : ['User'],
      }),
      createUser: builder.mutation({
        query: (data)=>({
            url: 'users/',
            method: 'POST',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
      }),
      updateUser: builder.mutation({
        query: (data)=>({
            url: `users/${data.id}`,
            method: 'PATCH',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
      }), 
      deleteUser: builder.mutation({
        query: ({id})=>({
            url:'users/',
            method: 'DELETE',
            body: id
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
      })
    }),
});

export const {
    useGetAllUsersQuery,
    useGetUserByUsernameQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApi;