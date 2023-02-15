import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import ApartmentIcon from '@mui/icons-material/Apartment';

import { 
  CustomSearch, 
  MenuPrincipal, 
  MenuSecundario, 
  ItemMenuPrincipal, 
  ItemMenuSecundario,
  CustomCompany,
} from './styled/navbar.styled';

interface Props {
  window?: () => Window;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  '&:hover': 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 240;
const NAV_ITEMS = ['Inicio', 'Sobre nosotros', 'Contáctanos', 'Usuarios', 'Bancos'];
const NAV_AUTH = ['Crea tu cuenta', 'Ingresá'];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {NAV_ITEMS && NAV_ITEMS.map((item) => (
            <ItemMenuPrincipal key={item}>
              {item}
            </ItemMenuPrincipal>
              ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: '6rem' }}>
      <AppBar component="nav" sx={{ height: '6rem' }}>
        <Toolbar sx={{ "justify-content": "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <CustomCompany>
            <ApartmentIcon sx={{ "font-size": "3.5rem" }} />
          </CustomCompany>
          <CustomSearch>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ "color": "black"}} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <MenuPrincipal>
            <ItemMenuPrincipal key={'inicio'}>
              <Link to={'/'}>Inicio</Link>
            </ItemMenuPrincipal>
            <ItemMenuPrincipal key={'sobre_nosotros'}>
              <Link to={'/about'}>Sobre nosotros</Link>
            </ItemMenuPrincipal>
            <ItemMenuPrincipal key={'contactanos'}>
              <Link to={'/contact'}>Contáctanos</Link>
            </ItemMenuPrincipal>
            <ItemMenuPrincipal key={'usuarios'}>
              <Link to={'/users'}>Listado de usuarios</Link>
            </ItemMenuPrincipal>
            </MenuPrincipal>
          </CustomSearch>
          <MenuSecundario>
            {NAV_AUTH.map((item) => (
                <ItemMenuSecundario key={item}>
                  {item}
                </ItemMenuSecundario>
            ))}
            {/* <div>
              <ShoppingCartIcon />
            </div>           */}
          </MenuSecundario>
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