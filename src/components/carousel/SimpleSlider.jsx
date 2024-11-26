import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../assets/1112_412_2_cd52574011.png";
import Slide2 from "../../assets/1112_412_47abc9d7c5.webp";
import Slide3 from "../../assets/Banner_TR_1112_412_6c2ce3564b.webp";
import Slide4 from "../../assets/luxoft_hackathon_1112x412_3468c22c84.webp";
import Slide5 from "../../assets/senior_aday_tecrubeli_yazilimci_2630787120.webp";
import Slide6 from "../../assets/TR_1112_412_de17b90249.webp";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        top: '64px',
        autoplay: true,
        speed: 500,
        zIndex:5,
        slidesToShow: 1,
        slidesToScroll: 1,
        position: 'relative',
        display: 'block',
        boxSizing: 'border-box',
        touchAction: 'pan-y',
        width:'1152',
        unicodeBidi: 'isolate',
        transform:'translateZ(0)',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    width: 'auto',
                    height: 'auto',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    width: 'auto',
                    height: 'auto',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    width: 'auto',
                    height: 'auto',
                },
            }
        ],
        slickList: {
            transform:'translateZ(0)',
            margin: 0,
            padding: 0,
            position: 'relative',
            display: 'block',
            ovwerflow: 'hidden',
        },
    };

    return (
        <Slider {...settings}>
            <div>
                <Box
                sx={{
                    borderBottomStyle: 'solid',
                    borderBottomWidth: '16px',
                    borderImageSlice: '0 16 16 0',
                    borderImageSource: 'linear-gradient(-125deg,transparent 13px,#00C26D 0 calc(100% - 9px),transparent 0)',
                    borderRightStyle: 'solid',
                    borderRightWidth: '16px',
                    marginRight:'auto',
                    marginLeft:'auto',
                    display: 'block',
                }}
                >
                <Button
                    component="a"
                    href="https://cdn.gcp.techcareer.net/Tech_Report_2023_Yazilimci_ve_Isveren_Arastirmasi_Raporu_24_72478c3bae/Tech_Report_2023_Yazilimci_ve_Isveren_Arastirmasi_Raporu_24_72478c3bae.pdf?utm_source=aday&utm_medium=banner&utm_campaign=techreport-2023&_gl=1*ddefin*_gcl_aw*R0NMLjE3MzA4MDI1NjAuQ2owS0NRaUFvYWU1QmhDTkFSSXNBRFZMelpmLWtaM0NfRnpvcHZpUWRvTVhhb2ZucDZVTEJyaUYxWC04S1FnZ0RreTF0Rl9MdEtsNDdsTWFBcXNSRUFMd193Y0I.*_gcl_au*MTg3MDc3ODkwOC4xNzMwODAyNTYw*_ga*MTk0Mjk4NDU2OC4xNzMwODAyNTYw*_ga_E0FGSHPKVP*MTczMjI3OTgxNC4yOS4xLjE3MzIyODE0OTYuNjAuMC4w*_fplc*YkRpNGI5Q1cxcm14MXpacUxjeCUyRkg5b1Fvajg5UktXZVptRnJXRUFjQWt6eUdJSGJsSUY2ZGxhWWtiRVVQaXpIV3h0NnBWSzRzcnNEVGw2UzIyNjJhc3BSckVjZ3dheDcyeU1lUE9lNGQ3c0lPVkxGcXp4OE5VWnd6RFB6VXclM0QlM0Q."
                    style={{
                        display: "inline-flex",
                        width: "100%",
                        height: "auto",
                        color: '#00C26D',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin:0,
                        padding:0,
                    }}
                    disableRipple
                >
                    <img
                        src={Slide1}
                        alt="Slide 1"
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </Button>
                </Box>
            </div>
            <div>
                <Box
                    sx={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '16px',
                        borderImageSlice: '0 16 16 0',
                        borderImageSource: 'linear-gradient(-125deg,transparent 13px,#00C26D 0 calc(100% - 9px),transparent 0)',
                        borderRightStyle: 'solid',
                        borderRightWidth: '16px',
                        marginRight:'auto',
                        marginLeft:'auto',
                        display: 'block',
                    }}
                >
                    <Button
                        component="a"
                        href="https://www.techcareer.net/jobs"
                        style={{
                            display: "inline-flex",
                            width: "100%",
                            height: "auto",
                            color: '#00C26D',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin:0,
                            padding:0,
                        }}
                        disableRipple
                    >
                        <img
                            src={Slide2}
                            alt="Slide 2"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </Button>
                </Box>
            </div>
            <div>
                <Box
                    sx={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '16px',
                        borderImageSlice: '0 16 16 0',
                        borderImageSource: 'linear-gradient(-125deg,transparent 13px,#00C26D 0 calc(100% - 9px),transparent 0)',
                        borderRightStyle: 'solid',
                        borderRightWidth: '16px',
                        marginRight:'auto',
                        marginLeft:'auto',
                        display: 'block',
                    }}
                >
                    <Button
                        component="a"
                        href="https://www.techcareer.net/courses"
                        style={{
                            display: "inline-flex",
                            width: "100%",
                            height: "auto",
                            color: '#00C26D',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin:0,
                            padding:0,
                        }}
                        disableRipple
                    >
                        <img
                            src={Slide3}
                            alt="Slide 3"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </Button>
                </Box>
            </div>
            <div>
                <Box
                    sx={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '16px',
                        borderImageSlice: '0 16 16 0',
                        borderImageSource: 'linear-gradient(-125deg,transparent 13px,#00C26D 0 calc(100% - 9px),transparent 0)',
                        borderRightStyle: 'solid',
                        borderRightWidth: '16px',
                        marginRight:'auto',
                        marginLeft:'auto',
                        display: 'block',
                    }}
                >
                    <Button
                        component="a"
                        href="https://www.techcareer.net/hackathon/luxoft-parking-hackathon"
                        style={{
                            display: "inline-flex",
                            width: "100%",
                            height: "auto",
                            color: '#00C26D',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin:0,
                            padding:0,
                        }}
                        disableRipple
                    >
                        <img
                            src={Slide4}
                            alt="Slide 1"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </Button>
                </Box>
            </div>
            <div>
                <Box
                    sx={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '16px',
                        borderImageSlice: '0 16 16 0',
                        borderImageSource: 'linear-gradient(-125deg,transparent 13px,#00C26D 0 calc(100% - 9px),transparent 0)',
                        borderRightStyle: 'solid',
                        borderRightWidth: '16px',
                        marginRight:'auto',
                        marginLeft:'auto',
                        display: 'block',
                    }}
                >
                    <Button
                        component="a"
                        href="https://kariyer.typeform.com/to/D3yn9U0w?_gl=1*fnxf4o*_gcl_aw*R0NMLjE3MzA4MDI1NjAuQ2owS0NRaUFvYWU1QmhDTkFSSXNBRFZMelpmLWtaM0NfRnpvcHZpUWRvTVhhb2ZucDZVTEJyaUYxWC04S1FnZ0RreTF0Rl9MdEtsNDdsTWFBcXNSRUFMd193Y0I.*_gcl_au*MTg3MDc3ODkwOC4xNzMwODAyNTYw*_ga*MTk0Mjk4NDU2OC4xNzMwODAyNTYw*_ga_E0FGSHPKVP*MTczMjI3OTgxNC4yOS4xLjE3MzIyODI2ODcuNjAuMC4w*_fplc*YkRpNGI5Q1cxcm14MXpacUxjeCUyRkg5b1Fvajg5UktXZVptRnJXRUFjQWt6eUdJSGJsSUY2ZGxhWWtiRVVQaXpIV3h0NnBWSzRzcnNEVGw2UzIyNjJhc3BSckVjZ3dheDcyeU1lUE9lNGQ3c0lPVkxGcXp4OE5VWnd6RFB6VXclM0QlM0Q.&typeform-source=www.techcareer.net"
                        style={{
                            display: "inline-flex",
                            width: "100%",
                            height: "auto",
                            color: '#00C26D',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin:0,
                            padding:0,
                        }}
                        disableRipple
                    >
                        <img
                            src={Slide5}
                            alt="Slide 1"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </Button>
                </Box>
            </div>
            <div>
                <Box
                    sx={{
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '16px',
                        borderImageSlice: '0 16 16 0',
                        borderImageSource: 'linear-gradient(-125deg,transparent 13px,#00C26D 0 calc(100% - 9px),transparent 0)',
                        borderRightStyle: 'solid',
                        borderRightWidth: '16px',
                        marginRight:'auto',
                        marginLeft:'auto',
                        display: 'block',
                    }}
                >
                    <Button
                        component="a"
                        href="https://www.techcareer.net/dictionary?utm_source=tcnet-community&utm_medium=banner&utm_campaign=teknik-sozluk"
                        style={{
                            display: "inline-flex",
                            width: "100%",
                            height: "auto",
                            color: '#00C26D',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin:0,
                            padding:0,
                        }}
                        disableRipple
                    >
                        <img
                            src={Slide6}
                            alt="Slide 1"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </Button>
                </Box>
            </div>
        </Slider>
    );
}