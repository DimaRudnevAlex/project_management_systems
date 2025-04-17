import { tokens } from '@/theme'
import { Button, useTheme } from '@mui/material'

const UiButton = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Button
            sx={{
                color: `${colors.accentColor}`,
                borderColor: `${colors.accentColor}`,
                fontWeight: 'bold',
            }}
            variant="outlined"
        >
            Создать задачу
        </Button>
    )
}

export default UiButton
