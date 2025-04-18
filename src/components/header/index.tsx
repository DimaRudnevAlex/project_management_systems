import NavMenu from '@/components/header/nav-menu'
import ThemeSwitcher from '@/components/theme-switcher'
import UiButton from '@/components/uikit/Button'
import { tokens } from '@/theme'
import { useModal } from '@/utils/hooks'
import { AppBar, Box, Toolbar, useTheme } from '@mui/material'

const Header = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const { handleOpenModal } = useModal()
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
                        <UiButton
                            onClick={handleOpenModal}
                            text="Создать задачу"
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
