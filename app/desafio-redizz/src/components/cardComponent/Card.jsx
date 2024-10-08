//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PropTypes from 'prop-types';
import { makeRequest } from '../../utils/makeRequest'


CardComponent.propTypes = {
    item: PropTypes.node.isRequired,
};

export default function CardComponent({ item }) {

    const { product, description } = item

    const user = JSON.parse(localStorage.getItem("user"))

    const buttonTenhoInteresse = async () => {
        const require = await makeRequest('/request', 'POST', {
            productId: (+item.id),
            userEmail: user.email
        })
        console.log(require);
    }


    return (
        <Card sx={{
            maxWidth: 345,
            marginTop: "9%",
            marginLeft: "4%",
        }}>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={buttonTenhoInteresse}>
                    Tenho Interesse
                </Button>
            </CardActions>
        </Card>
    );
}