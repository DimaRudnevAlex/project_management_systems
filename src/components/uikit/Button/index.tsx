import { IUiButton } from '@/@types/uikit'
import { tokens } from '@/theme'
import { Button, Typography, useTheme } from '@mui/material'
import { FC } from 'react'

const UiButton: FC<IUiButton> = ({
    onClick = undefined,
    text,
    type = 'button',
    loading,
}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Button
            loading={loading}
            onClick={onClick}
            type={type}
            sx={{
                color: `${colors.accentColor}`,
                borderColor: `${colors.accentColor}`,
            }}
            variant="outlined"
        >
            <Typography fontSize={{ xs: 14, xl: 20, md: 16 }} fontWeight="bold">
                {text}
            </Typography>
        </Button>
    )
}

export default UiButton
