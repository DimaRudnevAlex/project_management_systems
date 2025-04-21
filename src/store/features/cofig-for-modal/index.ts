import { ConfigForModal } from '@/@types/store'
import { AppState } from '@/store'
import { AppStartListening } from '@/store/listener-middleware'
import { boardsApi } from '@/store/services/boardsApi'
import { issuesApi } from '@/store/services/issuesApi'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ConfigForModal = {
    issueId: null,
    boardId: null,
    ToBoard: false,
}
// Для конфига modal в зависимости от ситуации
export const configForModalSlice = createSlice({
    name: 'config-for-modal',
    initialState,
    reducers: {
        changeIssueIdForEdit: (
            state,
            action: PayloadAction<{
                issueId: number
                boardId: number
                ToBoard: boolean
            }>,
        ) => {
            const { boardId, issueId, ToBoard } = action.payload
            state.issueId = issueId
            state.boardId = boardId
            state.ToBoard = ToBoard
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

// Уведомления
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
    startAppListening({
        matcher: boardsApi.endpoints.updateStatusDrag.matchRejected,
        effect: async (_action, listenerApi) => {
            const { toast } = await import('react-tiny-toast')

            const toastId = toast.show('Не удалось обновить статус!', {
                variant: 'danger',
                position: 'top-center',
                pause: true,
            })

            await listenerApi.delay(5000)
            toast.remove(toastId)
        },
    })
}
