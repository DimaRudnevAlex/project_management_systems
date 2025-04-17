import { IUiSelect } from '@/@types/uikit'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FC } from 'react'

const UiSelect: FC<IUiSelect> = ({ text, ArrayMenuItems, value, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel color="secondary">{text}</InputLabel>
            <Select
                value={value ? String(value) : ''}
                label={text}
                color="secondary"
                variant="outlined"
                onChange={onChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {ArrayMenuItems.map(({ id, value }) => (
                    <MenuItem value={String(id)}>{value}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default UiSelect
