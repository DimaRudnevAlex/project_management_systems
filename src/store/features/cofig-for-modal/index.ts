import { ConfigForModal } from '@/@types/store'
import { AppState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ConfigForModal = {
    issueId: null,
}

export const configForModalSlice = createSlice({
    name: 'config-for-modal',
    initialState,
    reducers: {
        changeIssueIdForEdit: (state, action: PayloadAction<number>) => {
            state.issueId = action.payload
        },
        clearConfigForModal: () => {
            return initialState
        },
    },
})

export const { changeIssueIdForEdit, clearConfigForModal } =
    configForModalSlice.actions

export const selectIssueIdConfigForModal = (state: AppState) =>
    state.configForModal.issueId

export default configForModalSlice.reducer
