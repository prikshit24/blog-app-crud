import { Box, Typography, styled } from "@mui/material";

export const HeaderContainer = styled(Box)(({theme}) => ({
    width:'calc(100%-100px)',
    height:'70px',
    paddingInline:'50px',
    backgroundColor: '#341c8d',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
}))

export const HeaderText = styled(Typography)(({theme}) => ({
    color:'#fff',
    fontSize:'24px',
}))

export const ListContainer = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap:'20px',
}))

export const NavigateList = styled(Typography)(({theme}) => ({
    color:'#fff',
    fontSize:'18px',
    cursor:'pointer',
}))