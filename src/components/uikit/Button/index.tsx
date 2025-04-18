import { IUiButton } from '@/@types/uikit'
import { tokens } from '@/theme'
import { Button, useTheme } from '@mui/material'
import { FC } from 'react'

const UiButton: FC<IUiButton> = ({ onClick, text }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Button
            onClick={onClick}
            sx={{
                color: `${colors.accentColor}`,
                borderColor: `${colors.accentColor}`,
                fontWeight: 'bold',
            }}
            variant="outlined"
        >
            {text}
        </Button>
    )
}

export default UiButton
