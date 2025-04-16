import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { IconButton, useTheme } from '@mui/material'

import { useColorMode } from '../../theme'

const ThemeSwitcher = () => {
    const theme = useTheme()
    const colorMode = useColorMode()!

    return (
        <IconButton onClick={() => colorMode()}>
            {theme.palette.mode === 'dark' ? (
                <DarkModeIcon />
            ) : (
                <LightModeIcon />
            )}
        </IconButton>
    )
}

export default ThemeSwitcher
