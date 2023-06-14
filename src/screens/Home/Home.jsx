import React from 'react';
import { Box,StatusBar,Text } from 'native-base';
import NavBar from "../../lib/components/Navbar";


export default function Home() {
    return (
        <Box>
            <StatusBar barStyle="dark-content" />
            <NavBar/>
            <Text>Ini adalah halaman Rumah</Text>
            
        </Box>
    )
}