import { IUiTextField } from '@/@types/uikit'
import { TextField } from '@mui/material'
import { FC } from 'react'

const UiTextField: FC<IUiTextField> = ({ value, onChange }) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            label="Поиск"
            variant="filled"
            color="secondary"
        />
    )
}

export default UiTextField
