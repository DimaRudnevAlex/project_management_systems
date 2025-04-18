import Header from '@/components/header'
import Modal from '@/components/modal'
import { tokens } from '@/theme'
import ModalProvider from '@/utils/context/modal'
import { Box, Container, useTheme } from '@mui/material'
import { Outlet } from 'react-router'

const MainLayout = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <ModalProvider>
            <Modal />
            <Box
                sx={{
                    backgroundColor: `${colors.primary.DEFAULT}`,
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        backgroundColor: `${colors.primary.DEFAULT}`,
                    }}
                >
                    <Header />
                    <Outlet />
                </Container>
            </Box>
        </ModalProvider>
    )
}

export default MainLayout
