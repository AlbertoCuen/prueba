import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import './UserCard.css';

export const UserCard = (props: any) => {

    const { email, first_name, last_name, avatar } = props;

    console.log(first_name);


    return (
        // <div className="cardContainer">
            <Card sx={{ maxWidth: 345, margin: '20px', display: '-webkit-box', flexDirection: 'row' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={avatar}
                        alt={`${first_name}'s picture`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {`${first_name} ${last_name}`}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        // </div>
    )
}