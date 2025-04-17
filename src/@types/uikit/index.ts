import { IMenuItemToSelect } from '@/@types/issues'
import { SelectChangeEvent } from '@mui/material'

export interface IUiSelect {
    text: string
    ArrayMenuItems: IMenuItemToSelect[]
    onChange: (e: SelectChangeEvent) => void
    value: string
}
