import React, { useEffect, useState } from 'react'
import { Brewery } from '../App';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { orange, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

type Props = {
    data: Brewery
}

const BreweryCard: React.FC<Props> = ({data}) => {

    const titleComp = () => {
        return <p>{data.name}</p>
    }
    // useEffect(() => {
    //     console.log(`data ${data.name}`);
    // })

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: orange[400] }} aria-label="Brewery">
                            B
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                    }title={data.name}
                    subheader={titleComp}
                />

            </Card>
        </div>
    )
}

export default BreweryCard;