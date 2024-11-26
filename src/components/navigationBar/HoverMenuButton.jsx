import * as React from 'react';
import { Button, Menu, MenuItem, Box } from '@mui/material';

function HoverMenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'inline-block', position: 'relative'}}
             anchorEl={anchorEl}
             open={open}
             onMouseLeave={handleMouseLeave} // Butondan çıkınca menü kapanı
             onClose={handleMouseLeave} // Butondan çıkınca menü kapanır
             MenuListProps={{
                 'aria-labelledby': 'basic-button',
                 onMouseLeave: handleMouseLeave, // Menüden çıkınca kapatır
             }}
        >
            <Button
                variant="text"
                onMouseEnter={handleMouseEnter} // Butona girince menü açılır

                sx={{
                    '&.MuiButton-root': {
                        pointerEvents : 'initial',
                    },
                    disableElevation: true,
                    display: 'inline-flex',
                    alignItems: 'center',
                    position: 'relative',
                    boxSizing: 'border-box',
                    backgroundColor: 'transparent',
                    fontFamily: 'Roboto, sans-serif',
                    justifyContent: 'left',
                    color: '#1D1D1D',
                    textTransform: 'initial',
                    borderRadius: '4px',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    zIndex: 20000,
                    pointerEvents: 'visible',

                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#00C26D', // Hover olduğunda yeşil renk
                    },
                }}
            >
                Etkinlikler
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMouseLeave} // Menü kapatma tetiklenir
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave: handleMouseLeave, // Menüden çıkınca kapatır
                }}
                sx={{
                    zIndex: 1,
                    '& .MuiMenu-paper': {
                        zIndex: 2, // Menü katmanını butonun altına yerleştir
                        backgroundColor: '#fff',
                        color: '#1D1D1D',
                        borderRadius: '4px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        marginTop: '8px',
                    },
                }}
            >
                <MenuItem onClick={() => alert('Seçenek 1')}>Seçenek 1</MenuItem>
                <MenuItem onClick={() => alert('Seçenek 2')}>Seçenek 2</MenuItem>
                <MenuItem onClick={() => alert('Seçenek 3')}>Seçenek 3</MenuItem>
            </Menu>
        </Box>
    );
}

export default HoverMenuButton;

