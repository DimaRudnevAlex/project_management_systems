import { AppDispatch, AppState } from '@/store'
import { addOrUpdateIssue } from '@/store/features/cofig-for-modal'
import { createListenerMiddleware } from '@reduxjs/toolkit'

export const listenerMiddleware = createListenerMiddleware()
export const startAppListening = listenerMiddleware.startListening.withTypes<
    AppState,
    AppDispatch
>()

export type AppStartListening = typeof startAppListening

addOrUpdateIssue(startAppListening)
