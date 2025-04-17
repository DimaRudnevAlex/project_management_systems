import { issuesApi } from '@/store/services/issuesApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        [issuesApi.reducerPath]: issuesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(issuesApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
