import { AppBar, Box, Toolbar, useTheme } from '@mui/material'

import { tokens } from '../../theme'
import ThemeSwitcher from '../theme-switcher'
import UiButton from '../uikit/Button'
import NavMenu from './nav-menu'

const Header = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Box>
            <AppBar position="static" sx={{ boxShadow: 'none' }}>
                <Toolbar
                    sx={{
                        backgroundColor: `${colors.primary.DEFAULT}`,
                        borderBottom: `1px solid ${colors.borderColor}`,
                        padding: '0px !important',
                    }}
                >
                    <Box
                        display="flex"
                        width="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        paddingBlock={2}
                    >
                        <NavMenu />
                        <ThemeSwitcher />
                        <UiButton />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
