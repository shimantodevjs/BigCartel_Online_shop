import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems1 = [  { label: 'Examples', url: '/examples' },  
                     { label: 'Pricing', url: '/pricing' },
                     { label: 'About', url: '/about' },];

const navItems2 = [  { label: 'Log in', url: '/login' },  
                     { label: 'Sign up', url: '/pricing' , color: 'green' }];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' ,backgroundColor: '#262a2a' , color:'#fff' , height: '100%'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
       <Link to='/' className='link'>
            BigCartel
        </Link>
      </Typography>
      <List>
        {navItems1.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
               <Link to={item.url} className="link"></Link>
              <ListItemText primary={
                <Link to={item.url} className="link">{item.label}</Link>
              } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {navItems2.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={
                <Link to={item.url} className="link">{item.label}</Link>
              } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' , height:'100%', margin:0 ,width:'100%'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#262a2a' , position:"fixed"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} 
          >
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/' className='link'>
            BigCartel
            </Link>
          </Typography>
      
          <Box sx={{ display: { xs: 'none', sm: 'block' } , ml: {xs: 'none' , sm: '50px'}}}>
            {navItems1.map((item) => (
              <Button 
                 key={item.label} 
                 sx={{ color: '#fff' }}
                 >
                   <Link to={item.url} className="link">
                    {item.label}
                   </Link>
              </Button>
            ))}
          </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems2.map((item) => (
              <Button key={item.label} 
                      className={item.color === 'green' ? 'green-button' : ''}
                      sx={{ color: '#fff' }}
                      >
                <Link to={item.url} className="link" >
                  {item.label}
                </Link>   
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}


export default Navbar;
