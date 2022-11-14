import React from 'react'
import { Box, FormControl, Grid, List, ListItem, Typography, FormLabel, FormGroup, InputLabel, Select, OutlinedInput, TextField, Input, InputAdornment, IconButton, FilledInput, ImageList, ImageListItem, CardMedia, Card, Button   } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import boat from '../assets/boat.jpg'
import boaterCard from '../assets/boaterCard.jpg'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function BodyComponent() {
  return (
    <Grid container md={12} spacing={2} padding='2rem 7rem'>
        <Grid md={7} align='left' paddingLeft={10}>
            <Typography fontSize='3rem' fontWeight='600'>Create your student account</Typography>
            <Typography fontSize='1.2rem'><WarningIcon sx={{color: '#eaae53', paddingRight: '5px'}} />Please createan account for the person <b>seeking certification.</b></Typography>

            <Box px={4}>
                <List>
                    <ListItem sx={{listStyleType: 'disc', display: 'list-item', padding: '2px',fontSize: '1.3rem'}}>One-time course fee of $34.95</ListItem>
                    <ListItem  sx={{listStyleType: 'disc', display: 'list-item', padding: '2px',fontSize: '1.3rem'}}>State fee of $0</ListItem>
                    <ListItem  sx={{listStyleType: 'disc', display: 'list-item', padding: '2px',fontSize: '1.3rem'}}>State approved and good for life!</ListItem>
                </List>
            </Box>
            
            {/* <FormControl sx={{ my: 1 }} component="fieldset">
                <FormGroup sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Typography>Student's Date of Birth</Typography>
                    <Typography sx={{justifyContent: 'flex-end'}}>Must be 13 years old or older to register</Typography>
                </FormGroup>
            </FormControl> */}

            <Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography fontWeight={600} fontSize='1rem'>Student's Date of Birth</Typography>
                    <Typography variant='subtitle2'>Must be 13 years old or older to register</Typography>
                </Box>
                <FormControl sx={{ my: 1, width: 300 }}>
                        <InputLabel sx={{fontWeight: '600', color: 'black'}}>Month</InputLabel>
                        <Select />
                </FormControl>
                <FormControl sx={{ m: 1, width: 155 }}>
                        <InputLabel sx={{fontWeight: '600', color: 'black'}}>Day</InputLabel>
                        <Select />
                </FormControl>
                <FormControl sx={{ my: 1, width: 155 }}>
                        <InputLabel sx={{fontWeight: '600', color: 'black'}}>Year</InputLabel>
                        <Select />
                </FormControl>
            </Box>

            <Box my={0.5}>
                <Typography fontWeight={600} fontSize='1rem'>Student's E-mail Address</Typography>
                <TextField sx={{width: 625, my: 1}} variant="outlined" />
            </Box>

            <Box my={0.5}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography fontWeight={600} fontSize='1rem'>Username</Typography>
                    <Typography variant='subtitle2'>Letters and numbers only, or a valid email address</Typography>
                </Box>
                <TextField sx={{width: 625, my: 1}} variant="filled" />
            </Box>

            <Box my={0.5}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography fontWeight={600} fontSize='1rem'>Password</Typography>
                    <Typography variant='subtitle2'>8-32 characters with letters and numbers</Typography>
                </Box>
                <FormControl sx={{width: 625, my: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            >
                                <VisibilityOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>

            <Box my={0.5}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography fontWeight={600} fontSize='1rem'>Confirm Password</Typography>
                    <Typography variant='subtitle2'>Re-enter password to confirm</Typography>
                </Box>
                <FormControl sx={{width: 625, my: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            >
                                <VisibilityOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
            
        </Grid>

        <Grid md={5}>
            {/* <ImageList >
                <ImageListItem >
                    <img src={boaterCard}/>
                </ImageListItem>
                <ImageListItem sx={{margin: '0 5rem'}}>
                    <img src={boat}/>
                </ImageListItem>
            </ImageList> */}
            <Box align='left' position='relative'>
                {/* <img src={boat}/>
                <Box>
                    <img sx={{  position: 'absolute',
          top: -40,
          left: '40%',
          zIndex: '1',}} src={boaterCard}/>
                </Box>
                 */}
                 <Box
                    sx={{
                    position: 'absolute',
                    top: 17,
                    left: '32%',
                    zIndex: '0',
                    }}
                >
                    <img src={boat}/>
                </Box>

                <Box
                    sx={{
                    boxShadow: 5,
                    position: 'absolute',
                    top: 55,
                    left: '25%',
                    zIndex: '1',
                    }}
                >
                    <img src={boaterCard}/>
                </Box>

                <Button variant="contained" 
                    textAlign='center'
                    sx={{boxShadow: 5,
                    position: 'absolute',
                    top: 600,
                    left: '92%',
                    borderRadius: '2rem',
                    zIndex: '1',
                    backgroundColor: '#70b251',
                    color: 'black',
                    textTransform: 'none'
                    }} 
                    startIcon={<HelpOutlineIcon />}>
                    Support
                </Button>
                    
            </Box>
            
        </Grid>
    </Grid>
  )
}

export default BodyComponent