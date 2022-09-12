import React from 'react'
import { Box, Typography, styled } from "@mui/material";

const FooterContainer = styled(Box)(({theme}) => ({
  minWidth:'calc(100vw-100px)',
    height:'70px',
    paddingInline:'50px',
    backgroundColor: '#341c8d',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}))

const ReservRightsText = styled(Typography)(({theme}) => ({
  fontSize:'18px',
  color:'#fff',
}))


const Footer = () => {
  return (
    <FooterContainer>
      <ReservRightsText>All rights are reserved</ReservRightsText>
    </FooterContainer>
  )
}

export default Footer;
