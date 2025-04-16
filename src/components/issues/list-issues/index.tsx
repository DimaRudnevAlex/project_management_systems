import { Grid } from '@mui/material'

import ItemIssues from '../item-issues'

const ListIssues = () => {
    return (
        <Grid container columns={1}>
            {[...new Array(10).keys()].map(() => (
                <ItemIssues />
            ))}
        </Grid>
    )
}

export default ListIssues
