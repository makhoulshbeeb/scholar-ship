import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const lessonsApi = createApi({
    reducerPath: 'lessonsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    headers: {
      'authorization' : `Bearer ${localStorage.getItem('token')}`,
      'Content-Type' : 'application/json'
    },
    tagTypes:['Lesson'],
    endpoints: (builder) => ({
      getAllLessons: builder.query({
        query: () => 'lessons/',
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Lesson', id })), 'Lesson']
            : ['Lesson'],
      }),
      getLessonById: builder.query({
        query:({id})=>`lessons/${id}`,
        providesTags: (result, error, arg) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Lesson', id })), 'Lesson']
            : ['Lesson'],
      }),
      createLesson: builder.mutation({
        query: (data)=>({
            url: 'lessons/',
            method: 'POST',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Lesson', id: arg.id }],
      }),
      updateLesson: builder.mutation({
        query: (data)=>({
            url: `lessons/${data.id}`,
            method: 'PATCH',
            body: data
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Lesson', id: arg.id }],
      }), 
      deleteLesson: builder.mutation({
        query: ({id})=>({
            url:'lessons/',
            method: 'DELETE',
            body: id
        }),
        invalidatesTags: (result, error, arg) => [{ type: 'Lesson', id: arg.id }],
      })
    }),
});

export const {
    useGetAllLessonsQuery,
    useGetLessonByIdQuery,
    useCreateLessonMutation,
    useUpdateLessonMutation,
    useDeleteLessonMutation
} = lessonsApi;