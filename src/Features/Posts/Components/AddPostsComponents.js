import { Box, Typography, styled, TextField, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

export const Label = styled(Typography)(({theme}) => ({
    fontSize:'18px',
    textAlign:'left',
}))

export const TitleField = styled(TextField)(({theme}) => ({
    width:'calc(100%-20px)',
    height:'50px',
    // display:'flex',
    // alignItems:'center',
    paddingInline:'10px',
}))

export const TextArea = styled('textarea')(({theme}) => ({
    width:'calc(100%-20px)',
    height:'250px',
    padding:'10px',
})) 

export const SubmitBtn = styled(Button)(({theme}) => ({
    width:'150px',
    height:'50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}))
