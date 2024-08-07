import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { coursesApi } from '../api/CoursesApi'
import { lessonsApi } from '../api/LessonsApi'
import { usersApi } from '../api/UsersApi'

const store = configureStore({
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers({
      autoBatch: { type: 'tick' },
    }),
  reducer: {
    [coursesApi.reducerPath]: coursesApi.reducer,
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat([ coursesApi.middleware, lessonsApi.middleware, usersApi.middleware])
})

setupListeners(store.dispatch);

export default store