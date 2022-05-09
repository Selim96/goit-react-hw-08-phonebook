import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const register = createApi({
  reducerPath: 'register',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  tagTypes: ['register'],
  endpoints: builder => ({
    registerUser: builder.mutation({
        query: newUser => ({
            url: '/users/signup',
            method: 'POST',
            body: newUser,
        }),
    invalidatesTags: ['register'],
    }),
    // deleteContacts: builder.mutation({
    //     query: contactId => ({
    //         url: `/contacts/${contactId}`,
    //         method: 'DELETE',
    //     }),
    // invalidatesTags: ['register'],
    // }),
    
  }),
})

export const { useRegisterUserMutation } = register;