import React from 'react'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

// import { Theme } from '_theme'

import PageContainer from '../_common/BasePageContainer'
import PageToolbar from '../_common/BasePageToolbar'
import Chart from './Chart'
import Deposits from './Deposits'
import Orders from './Orders'

export default function Home() {
  // const classes = useStyles()

  const PageTitle = 'Dashboard'

  const PageActions = (
    <Button variant="contained" href="#contained-buttons">
      Link
    </Button>
  )

  return (
    <PageContainer>
      <PageToolbar title={PageTitle} actions={PageActions}></PageToolbar>

      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper>
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper>
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

// const useStyles = makeStyles((theme: Theme) => ({
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
// }))