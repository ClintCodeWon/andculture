import React, { useState } from 'react'
import { Brewery } from '../App';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import MapIcon from '@mui/icons-material/Map';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BreweryMap from '../BreweryMap/BreweryMap';
import "./styles.scss";

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

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const hasWebsite = (data.website_url != null) ? true: false;

    const hasCoordinates = (data.latitude != null && data.longitude != null) ? true : false

    return (
        <div className='wrapper'>
            <Card>
                <CardHeader
                    title={data.name}
                    className="header"
                />
                <CardContent>
                    <Typography variant='subtitle1'>Type: {data.brewery_type}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {hasWebsite ? <Link href={data.website_url} target="_blank">
                        <SportsBarIcon className='sport-icon' />
                    </Link>: <div/>}
                    {hasCoordinates ? <MapIcon/> : <div />}
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit={true}>
                    <CardContent className='body'>
                        <Typography>
                            Location: {data.street}, {data.city}, {data.state}, {data.postal_code}
                        </Typography>
                        <Typography>
                            Phone: {data.phone}
                        </Typography>
                        {hasCoordinates ? <BreweryMap lat={data.latitude} long={data.longitude} name={data.name} />
                                            : <div></div>}
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default BreweryCard;