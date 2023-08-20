import { useState, useEffect } from 'react'
import { Box, Typography, Slide } from '@mui/material'
import istlogo from '../../../images/Banner/banner-image.gif'
import amilogo from '../../../images/Banner/banner-image3.gif'

export const Banner = () => {

    const [change, setChange] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setChange((prevState) => !prevState);
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

    return(
        <Box height={'80vh'} sx={{backgroundColor:'#FDFDFD', padding: '10vh'}}>
            <Typography textAlign={'center'} fontSize={'48px'} display='block' marginTop={'0vh'} color='black'>Ми - це найкращі IT спеціальності</Typography>
            <Typography textAlign={'center'} fontSize={'36px'} color='black' >Створюй майбутнє разом з нами</Typography>
            <Typography textAlign={'center'}  color ='black' marginTop='10vw' sx={{cursor:'pointer'}}>113 Прикладна математика</Typography>
            <img src={amilogo} width='25%' style={{position: 'absolute', top: '55%', left:'5%'}}/>
            <Typography textAlign={'center'} color ='black' sx={{cursor:'pointer'}}>126 Інформаційні системи та технології</Typography>
            <img src={istlogo} width='30%' style={{position: 'absolute', top: '60%', left:'65%'}}/>
            {/* <BannerAMI/>  <BannerIST/> */}
            {/* {change ? <BannerAMI/> : <BannerIST/>} */}
        </Box>
    )

}

const BannerAMI = () => {

    return (
        <Box width='100%' height='20vh' sx={{backgroundColor:'transparent'}}>
            <Typography textAlign={'center'}  color ='white' marginTop='10vw' sx={{cursor:'pointer'}}>113 Прикладна математика</Typography>
            <img src={amilogo} width='25%' style={{position: 'absolute', top: '55%', left:'5%'}}/>

        </Box>
    )

}

const BannerIST = () => {
    return (
        <Box width='100%' height='20vh' sx={{backgroundColor:'transparent'}}>
            <Typography textAlign={'center'} color ='white' marginTop='10vw' sx={{cursor:'pointer'}}>126 Інформаційні системи та технології</Typography>
            <img src={istlogo} width='30%' style={{position: 'absolute', top: '60%', left:'65%'}}/>

        </Box>
    )
}

// export default function SimpleSlide() {
//     const [checked, setChecked] = React.useState(false);
  
//     const handleChange = () => {
//       setChecked((prev) => !prev);
//     };
  
//     return (
//       <Box sx={{ height: 180 }}>
//         <Box sx={{ width: `calc(100px + 16px)` }}>
//           <FormControlLabel
//             control={<Switch checked={checked} onChange={handleChange} />}
//             label="Show"
//           />
//           <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//             {icon}
//           </Slide>
//         </Box>
//       </Box>
//     );
//   }

