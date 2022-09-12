import { Box, Typography, styled, TextField, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
    padding:'50px 100px',
    display: 'flex',
    flexDirection: 'column',
    gap:'20px'
}));

export const FormContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap:'20px'
}))

export const Label = styled(Typography)(({theme}) => ({
    fontSize:'20px',
    textAlign:'left',
}))

export const TitleField = styled(TextField)(({theme}) => ({
    height:'50px',
    width:'100%',
}))

export const TextArea = styled('textarea')(({theme}) => ({
    height:'200px',
    padding:'10px',
    fontSize:'16px',
    width:'calc(100% - 20px)',
}))

export const BtnContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems:'center',
    gap:'10px'
}));

export const SubmitBtn = styled(Button)(({theme}) => ({
    width:'150px',
    height:'50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#33db33',
    color:'#fff',
    ':hover':{
        backgroundColor:'#33db33',
    }
}))

export const DeleteBtn = styled(Button)(({theme}) => ({
    width:'150px',
    height:'50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#d21717',
    color:'#fff',
    ':hover':{
        backgroundColor:'#d21717',
    }
}))
