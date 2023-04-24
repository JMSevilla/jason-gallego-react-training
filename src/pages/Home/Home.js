import React from 'react'
import { ControlledAppBar, ControlledCard, ControlledContainer, ControlledTextField, ControlledButton } from '../../components'
import { Typography, Button } from '@mui/material'
/**
 * Parent Node, Children Node
 * @returns 
 */
const Home = () => {
    return (
        <>
            <ControlledAppBar 
                title="Jason Gallego"
            />
            <ControlledContainer
            style={{
                marginTop: '100px'
            }}
            >
                <ControlledCard>
                    <Typography variant='h6'>User Form</Typography>
                    <ControlledTextField 
                        style={{
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}
                        variant='outlined'
                        onChange={(e) => console.log(e)}
                        placeholder='Enter firstname'
                        fullWidth
                        label='Enter firstname'
                    />
                    <ControlledTextField 
                        style={{
                            marginTop: '10px',
                            marginBottom: '10px'
                        }}
                        variant='outlined'
                        onChange={(e) => console.log(e)}
                        placeholder='Enter lastname'
                        fullWidth
                        label='Enter lastname'
                    />
                    <ControlledButton 
                    sx={{
                        float: 'right',
                        mt: 2,
                        mb: 2
                    }}
                    children="SAVE"
                    variant='outlined'
                    size='small'
                    />
                </ControlledCard>
            </ControlledContainer>
        </>
    )
}

export default Home