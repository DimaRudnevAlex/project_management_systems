import CustomLinkNav from '@/components/custom-link-nav'
import { configPage } from '@/utils/config-page'
import { Box, Typography } from '@mui/material'

const NavMenu = () => {
    return (
        <Box component="nav" display="flex" gap={3} alignItems="center">
            <CustomLinkNav to={configPage.ISSUES}>
                <Typography variant="h5" fontSize={{ xs: 14, sm: 18, md: 24 }}>
                    Все задачи
                </Typography>
            </CustomLinkNav>
            <CustomLinkNav to={configPage.BOARDS}>
                <Typography variant="h5" fontSize={{ xs: 14, sm: 18, md: 24 }}>
                    Проекты
                </Typography>
            </CustomLinkNav>
        </Box>
    )
}

export default NavMenu
