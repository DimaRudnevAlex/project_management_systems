import { useTheme } from '@mui/material'
import { FC } from 'react'
import { Link, useMatch } from 'react-router'

import { ICustomLink } from '../../@types/custom-link'
import { tokens } from '../../theme'

const CustomLink: FC<ICustomLink> = ({ children, to }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const match = useMatch({
        path: to,
        end: to.length === 1,
    })
    return (
        <Link
            to={to}
            style={{
                display: 'block',
                color: match ? 'white' : 'inherit',
                backgroundColor: match
                    ? `${colors.accentColor}`
                    : 'transparent',
                borderRadius: '4px',
                padding: '10px 5px',
                textDecoration: 'none',
            }}
        >
            {children}
        </Link>
    )
}

export default CustomLink
