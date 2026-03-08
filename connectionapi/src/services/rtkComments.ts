import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rtkURL } from "../utils/Url";
import type { Comment } from "../models/Comment";

export const commentServiceRtk = createApi({
    reducerPath: "commentsRtk",
    baseQuery: fetchBaseQuery({baseUrl: rtkURL}),
    endpoints: (builder) => ({
        getComments: builder.query<Comment[], void>({
            query: () => 'comments'
        }),
        getCommentById: builder.query<Comment, number>({
            query: (id) => `comments/${id}`
        }),
        createComment: builder.mutation<Comment, Comment>({
            query: (newComment) => ({
                url: 'comments',
                method: 'POST',
                body: newComment
            }) 
        }),
        editComment: builder.mutation<Comment, Comment>({
            query: (updatedComment) => ({
                url: `comments/${updatedComment.id}`,
                method: 'PUT',
                body: updatedComment
            })
        }),
        deleteComment: builder.mutation<Comment, number>({
            query: (id) => ({
                url:`comments/${id}`,
                method:'DELETE'
            })
        }) 
    })
})

