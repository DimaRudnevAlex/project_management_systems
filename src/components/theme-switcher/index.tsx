import { useColorMode } from '@/theme'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton, useTheme } from '@mui/material'

const ThemeSwitcher = () => {
    const theme = useTheme()
    const colorMode = useColorMode()!

    return (
        <IconButton onClick={colorMode.toggleMode}>
            {theme.palette.mode === 'dark' ? (
                <DarkModeIcon />
            ) : (
                <LightModeIcon />
            )}
        </IconButton>
    )
}

export default ThemeSwitcher
