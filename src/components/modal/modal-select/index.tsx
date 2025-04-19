import { IFormSelect } from '@/@types/form'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

const ModalSelect: FC<IFormSelect> = ({
    control,
    menuItems,
    label,
    name,
    disabled,
    defaultValue,
}) => {
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Controller
                disabled={disabled}
                name={name}
                control={control}
                defaultValue={String(defaultValue)}
                rules={{ required: 'Это обязательное поле' }}
                render={({ field, fieldState }) => (
                    <>
                        <Select {...field}>
                            <MenuItem value={''}>
                                <em>None</em>
                            </MenuItem>
                            {menuItems?.map(({ value, id }) => (
                                <MenuItem value={String(id)}>{value}</MenuItem>
                            ))}
                        </Select>
                        {fieldState.error && (
                            <Typography variant="caption" color="red">
                                {fieldState.error.message}
                            </Typography>
                        )}
                    </>
                )}
            />
        </FormControl>
    )
}

export default ModalSelect
