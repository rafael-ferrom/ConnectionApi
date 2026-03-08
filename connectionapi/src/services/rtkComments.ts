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
        
        
         
    })
})

