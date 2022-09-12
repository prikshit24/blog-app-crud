import { Box, Typography, styled, TextField } from "@mui/material";

export const Container = styled(Box)(({theme}) => ({
    border:'1px solid #707070',
    borderRadius:'5px',
    width:'400px',
    maxHeight: '300px',
    padding:'25px',
}))

export const PostTitle = styled(Typography)(({theme}) => ({
    fontSize:'22px',
    fontWeight:'bold',
}))

export const PostBreaf = styled(Typography)(({theme}) => ({
    fontSize:'18px',
}))

export const PostDetailContainer = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    gap:'4px',
}))