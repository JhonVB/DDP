import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
import YearlyBreakup2 from './components/YearlyBreakup2';
import YearlyBreakup3 from './components/YearlyBreakup3';

import RecentTransactions from './components/RecentTransactions';
import ProductPerformance from './components/ProductPerformance';
import Blog from './components/Blog';
import MonthlyEarnings from './components/MonthlyEarnings';




const Dashboard = () => {

  


  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
         
          <Grid item xs={12} lg={4}>
            <Grid container spacing={5}>
              <Grid item xs={24}>
                <YearlyBreakup />
              </Grid>
            </Grid>
          </Grid>

               
          <Grid item xs={12} lg={4}>
            <Grid container spacing={5}>
              <Grid item xs={24}>
                <YearlyBreakup2 />
              </Grid>
            </Grid>
          </Grid>
            
          <Grid item xs={12} lg={4}>
            <Grid container spacing={5}>
              <Grid item xs={24}>
                <YearlyBreakup3 />
              </Grid>
            </Grid>
          </Grid>

         
       
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
