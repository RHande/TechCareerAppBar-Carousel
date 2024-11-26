import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import SimpleSlider from "./SimpleSlider.jsx";
import * as React from "react";
import Dotsss from "../../assets/shape-dots.svg";
import Kesik from "../../assets/kesik-yan-cizgi.svg";

export default function CarouselBox() {
    return(
        <Box sx={{
            backgroundColor: 'rgb(246, 248, 255)',
            boxSizing: 'border-box',
            top: 0,
            zIndex: 1,
            width: '100%',
            maxWidth: '100%',
            color: '#1D1D1D',
            display: 'block',
            fontSize: '1rem',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            lineHeight: 1.5,
            position : 'relative',
            height: 'auto',
            '@media (min-width: 1200px)': {
                height:'555px',
            },
            '@media (max-width: 900px)': {
                height:'383px',
                maxHeight:'383px',
            },
        }}>
            <Container
                sx={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    height:'429px',
                    display: 'block',
                    margin: 'auto',
                    zIndex:3,
                    '@media (max-width: 1200px)': {
                        maxWidth:'1200px',
                    },
                    '@media (min-width: 600px)': {
                        top: '64px',
                        height: 'auto',
                        width: 'auto',
                        paddingLeft:'24px',
                        paddingRight:'24px',

                    },
                    '@media (max-width: 900px)': {
                        top: '24px',
                        height: '287px',
                        width: 'auto',
                        paddingLeft:'24px',
                        paddingRight:'24px',
                    },

                }}
            >

                <Box
                    component="img"
                    src={Dotsss}
                    alt="Dotsss"
                    sx={{
                        height: '50px',
                        width: '50px',
                        position: 'absolute',
                        top: '-15px',
                        left:'10px',
                        display: 'block',
                        aspectRatio:'auto 50/50',
                        '@media (max-width: 900px)': {
                            display:'none'
                        },
                    }}
                />
                <Box
                    component="img"
                    src={Kesik}
                    alt="Kesik"
                    sx={{
                        height: '149px',
                        width: '142px',
                        position: 'absolute',
                        top: '-30px',
                        right:'1px',
                        display: 'block',
                        aspectRatio:'auto 142/142',
                        '@media (max-width: 900px)': {
                            display:'none'
                        },
                    }}
                />

                <SimpleSlider
                    sx={{
                        zIndex:4
                    }}
                />
            </Container>
            <Box
                sx={{
                    div: {
                        display: 'block',
                        unicodeBidi: 'isolate',
                    },
                    zIndex:1,
                    display:'block',
                    boxSizing: 'inherit',
                    width: '100%',
                    maxWidth: '100%',
                    position: 'relative',
                    backgroundColor:'rgb(41, 51, 73)',
                    color: 'rgb(29, 29, 29)',
                    height:'126px',
                    '@media (min-width: 1200px)': {
                        paddingTop: '63px',
                        paddingBottom: '63px',
                        marginTop:'0px',
                    },
                    '@media (max-width: 900px)': {
                        paddingTop: '80px',
                        paddingBottom: '80px',
                        marginTop:'-64px',
                    },
                }}/>
        </Box>
    )
}