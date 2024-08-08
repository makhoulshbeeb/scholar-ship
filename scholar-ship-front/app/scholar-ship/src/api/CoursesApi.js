import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    headers: {
      'authorization' : `Bearer ${localStorage.getItem('token')}`,
      'Content-Type' : 'application/json'
    },
    tagTypes:['Course'],
    endpoints: (builder) => ({
      getAllCourses: builder.query({
        query: () => 'courses/',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Course', id })), 'Course']
            : ['Course'],
      }),
      getCourseBySearch: builder.query({
        query:({search})=>`courses/${search}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Course', id })), 'Course']
            : ['Course'],
      }),
      getCourseById: builder.query({
        query:({id})=>`courses/id/${id}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Course', id })), 'Course']
            : ['Course'],
      }),
      createCourse: builder.mutation({
        query: (data)=>({
            url: 'courses/',
            method: 'POST',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Course', id: arg.id }],
      }),
      updateCourse: builder.mutation({
        query: (data)=>({
            url: `courses/${data.id}`,
            method: 'PATCH',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Course', id: arg.id }],
      }), 
      deleteCourse: builder.mutation({
        query: ({id})=>({
            url:'courses/',
            method: 'DELETE',
            body: id
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Course', id: arg.id }],
      })
    }),
});

export const {
    useGetAllCoursesQuery,
    useGetCourseBySearchQuery,
    useGetCourseByIdQuery,
    useCreateCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation
} = coursesApi;