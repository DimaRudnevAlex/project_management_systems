import { ConfigForModal } from '@/@types/store'
import { AppState } from '@/store'
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
