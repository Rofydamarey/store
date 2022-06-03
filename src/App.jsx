import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { createTheme, ThemeProvider, styled, useTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import Navbar from './components/Navbar';
import FooterComponent from './components/FooterComponent';
import NotFound from './pages/NotFound';
import { useRecoilState } from 'recoil';
import { myMode } from './atoms/atoms';
import { Box } from '@mui/material';
import './App.css'
const getDesignTokens = (mode) =>
({
  palette: {
    mode,
    primary: {
      ...grey,
      ...(mode === 'light' ? {
        main: '#ffd6d6',
      } : {
        main: '#ffd6d6',
      }),
    },
    background: {
      ...(mode === 'light'
        ? {
          primary: '#fff',
          secondary: grey[800],
        }
        : {
          primary: '#333',
          secondary: grey[500],
        }),
    },
    text: {
      ...(mode === 'light'
        ? {
          primary: '#333',
          secondary: grey[800],
        }
        : {
          primary: '#fff',
          secondary: grey[500],
        }),
    },
  },
});

function App() {
  const [ModeTheme, setModeTheme] = useRecoilState(myMode);
  const MainTheme = createTheme(getDesignTokens(ModeTheme));

  return (
    <ThemeProvider theme={MainTheme}>
        <Navbar />
      <Box className="App" sx={{ bgcolor: 'background.paper' }} >

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='Products' element={<Products />} />
          <Route path='Products/:id' element={<Product />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Register' element={<Register />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />

        </Routes>




      </Box>
        <FooterComponent />
    </ThemeProvider>

  );
}

export default App;
