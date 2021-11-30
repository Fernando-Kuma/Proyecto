import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Orders from './Orders';
import Container from '@mui/material/Container';


function preventDefault(event) {
    event.preventDefault();
}

function Ejemplos() {
    const theme = useTheme();
    return (
        <>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <React.Fragment>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Today
                            </Typography>

                        </React.Fragment>
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <React.Fragment>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Recent Deposits
                            </Typography>
                            <Typography component="p" variant="h4">
                                $3,024.00
                            </Typography>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                on 15 March, 2019
                            </Typography>
                            <div>
                                <Link color="primary" href="#" onClick={preventDefault}>
                                    View balance
                                </Link>
                            </div>
                        </React.Fragment>
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Orders />
                    </Paper>
                </Grid>
            </Grid>

        </>
    )
}

export default Ejemplos
