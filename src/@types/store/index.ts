import { AppDispatch, AppState } from '@/store'
import { ISSUE_STATUS } from '@/utils/constants'
import { createSelector } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppState>()
export const createAppSelector = createSelector.withTypes<AppState>()

export interface IssuesState {
    search: string
    filterByBoardId: number | null
    filterByStatus: ISSUE_STATUS | ''
}

export interface ConfigForModal {
    issueId: number | null
    boardId: number | null
    ToBoard: boolean
}
