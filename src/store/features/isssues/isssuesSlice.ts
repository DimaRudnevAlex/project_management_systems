import { IApiGetIssues } from '@/@types/issues'
import { createAppSelector, IssuesState } from '@/@types/store'
import { AppState } from '@/store'
import { ISSUE_STATUS } from '@/utils/constants'
import { issuesListFiltered } from '@/utils/helper'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IssuesState = {
    search: '',
    filterByBoardId: null,
    filterByStatus: '',
}

export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        changeFilterByStatus: (state, action: PayloadAction<ISSUE_STATUS>) => {
            state.filterByStatus = action.payload
        },
        changeFilterByNameBoard: (
            state,
            action: PayloadAction<number | null>,
        ) => {
            state.filterByBoardId = action.payload
        },
        changeFilterSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
    },
})

export const {
    changeFilterByStatus,
    changeFilterByNameBoard,
    changeFilterSearch,
} = issuesSlice.actions

export const selectFilterOptions = (state: AppState) => state.issues

// Отфильтрованный массив, с кешированием результата
export const selectIssuesByFilter = createAppSelector(
    selectFilterOptions,
    (_state: AppState, data: IApiGetIssues | undefined) => {
        return data
    },
    (filterOption, data: IApiGetIssues | undefined) => {
        if (!data) {
            return []
        }
        return issuesListFiltered(data.data, filterOption)
    },
)

export default issuesSlice.reducer
