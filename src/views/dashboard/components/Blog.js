import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import img1 from 'src/assets/images/products/s4.jpg';
import comida from 'src/assets/images/products/comida.avif';
import img3 from 'src/assets/images/products/s7.jpg';
import plato from 'src/assets/images/products/plato.jpg';
import cepillo from 'src/assets/images/products/cepillo.jpg';
import pechera from 'src/assets/images/products/pechera.jpg';
import { Stack } from '@mui/system';
import { IconBasket } from '@tabler/icons';
import BlankCard from '../../../components/shared/BlankCard';

const ecoCard = [
    {
        title: 'Cepillo',
        subheader: 'September 14, 2023',
        photo: cepillo,
        salesPrice: 32000,
        price: 20000,
        rating: 4,
    },
    {
        title: 'Arnes',
        subheader: 'September 14, 2023',
        photo: pechera,
        salesPrice: 65000,
        price: 80000,
        rating: 5,
    },
    {
        title: 'Croquetas',
        subheader: 'September 14, 2023',
        photo: comida,
        salesPrice: 45000,
        price: 70000,
        rating: 5,
    },
    {
        title: 'Plato',
        subheader: 'September 14, 2023',
        photo: plato,
        salesPrice: 45000,
        price: 32000,
        rating: 3,
    },
];

const Blog = () => {
    return (
        <Grid container spacing={3}>
            {ecoCard.map((product, index) => (
                <Grid item sm={12} md={4} lg={3} key={index}>
                    <BlankCard>
                        <Typography component={Link} to="/">
                            <img src={product.photo} alt="img" width="100%" />
                        </Typography>
                        <Tooltip title="Add To Cart">
                            <Fab
                                size="small"
                                color="primary"
                                sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                            >
                                <IconBasket size="16" />
                            </Fab>
                        </Tooltip>
                        <CardContent sx={{ p: 3, pt: 2 }}>
                            <Typography variant="h6">{product.title}</Typography>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="h6">${product.price}</Typography>
                                    <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
                                        ${product.salesPrice}
                                    </Typography>
                                </Stack>
                                <Rating name="read-only" size="small" value={product.rating} readOnly />
                            </Stack>
                        </CardContent>
                    </BlankCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default Blog;
