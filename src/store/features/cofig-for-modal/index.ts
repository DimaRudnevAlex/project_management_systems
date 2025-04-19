import { ConfigForModal } from '@/@types/store'
import { AppState } from '@/store'
import { AppStartListening } from '@/store/listener-middleware'
import { issuesApi } from '@/store/services/issuesApi'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ConfigForModal = {
    issueId: null,
    boardId: null,
}

export const configForModalSlice = createSlice({
    name: 'config-for-modal',
    initialState,
    reducers: {
        changeIssueIdForEdit: (
            state,
            action: PayloadAction<{ issueId: number; boardId: number }>,
        ) => {
            const { boardId, issueId } = action.payload
            state.issueId = issueId
            state.boardId = boardId
        },
        clearConfigForModal: () => {
            return initialState
        },
    },
})

export const { changeIssueIdForEdit, clearConfigForModal } =
    configForModalSlice.actions

export const selectIssueIdConfigForModal = (state: AppState) =>
    state.configForModal

export default configForModalSlice.reducer

export const addOrUpdateIssue = (startAppListening: AppStartListening) => {
    startAppListening({
        matcher: issuesApi.endpoints.addNewIssueOrUpdateIssue.matchFulfilled,
        effect: async (_action, listenerApi) => {
            const { toast } = await import('react-tiny-toast')

            const toastId = toast.show('Успешно!', {
                variant: 'success',
                position: 'top-center',
                pause: true,
            })

            await listenerApi.delay(5000)
            toast.remove(toastId)
        },
    })
    startAppListening({
        matcher: issuesApi.endpoints.addNewIssueOrUpdateIssue.matchRejected,
        effect: async (_action, listenerApi) => {
            const { toast } = await import('react-tiny-toast')

            const toastId = toast.show('Ошибка!', {
                variant: 'danger',
                position: 'top-center',
                pause: true,
            })

            await listenerApi.delay(5000)
            toast.remove(toastId)
        },
    })
}
