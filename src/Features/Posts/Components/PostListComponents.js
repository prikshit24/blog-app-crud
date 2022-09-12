import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
   padding: '50px 100px',
   backgroundColor: '#fafafa',
}));

export const PostContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent:'space-evenly',
   gap: '10px',
   flexWrap:'wrap',
}))
