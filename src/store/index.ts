import configForModalReducer from '@/store/features/cofig-for-modal'
import issuesReducer from '@/store/features/isssues/isssuesSlice.ts'
import { listenerMiddleware } from '@/store/listener-middleware'
import { boardsApi } from '@/store/services/boardsApi'
import { issuesApi } from '@/store/services/issuesApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        issues: issuesReducer,
        configForModal: configForModalReducer,
        [issuesApi.reducerPath]: issuesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(listenerMiddleware.middleware)
            .concat(issuesApi.middleware)
            .concat(boardsApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
