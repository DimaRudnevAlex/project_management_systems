import { AppDispatch, AppState } from '@/store'
import {
    changeFilterByNameBoard,
    changeFilterByStatus,
    changeFilterSearch,
} from '@/store/features/isssues/isssuesSlice.ts'
import { issueStatus } from '@/utils/constants'
import { SelectChangeEvent } from '@mui/material'
import { createSelector } from '@reduxjs/toolkit'
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppState>()
export const createAppSelector = createSelector.withTypes<AppState>()

export const useChangeFilterOption = () => {
    const dispatch = useAppDispatch()
    const handleChangeStatus = (event: SelectChangeEvent) => {
        dispatch(changeFilterByStatus(event.target.value as issueStatus))
    }
    const handleChangeBoardName = (event: SelectChangeEvent) => {
        dispatch(
            changeFilterByNameBoard(
                event.target.value === '' ? null : +event.target.value,
            ),
        )
    }
    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilterSearch(event.target.value))
    }
    return { handleChangeStatus, handleChangeBoardName, handleChangeSearch }
}
