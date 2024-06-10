import { Link } from 'react-router-dom';
import logo from 'src/assets/images/logos/logo.png';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
     
                            <img src={logo} alt="img" width={160} height={84} />
                   
    </LinkStyled>
  )
};

export default Logo;
