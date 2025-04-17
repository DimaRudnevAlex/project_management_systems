import { IMenuItemToSelect } from '@/@types/issues'
import { SelectChangeEvent } from '@mui/material'
import { ChangeEvent } from 'react'

export interface IUiSelect {
    text: string
    ArrayMenuItems: IMenuItemToSelect[]
    onChange: (e: SelectChangeEvent) => void
    value: string | null | number
}
export interface IUiTextField {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
