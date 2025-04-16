import { Box, Typography } from '@mui/material'

import { configPage } from '../../../utils/config-page'
import CustomLink from '../../custom-link'

const NavMenu = () => {
    return (
        <Box component="nav" display="flex" gap={3} flexDirection="row">
            <CustomLink to={configPage.ISSUES}>
                <Typography variant="h5" component="h5">
                    Все задачи
                </Typography>
            </CustomLink>
            <CustomLink to={configPage.BOARDS}>
                <Typography variant="h5" component="h5">
                    Проекты
                </Typography>
            </CustomLink>
        </Box>
    )
}

export default NavMenu
