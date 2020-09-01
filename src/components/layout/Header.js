import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Heading, Box } from '@chakra-ui/core'

export default function Header() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            style={headerStyle}
        >
            <Flex align="center" mr={5} >
                <Heading as="h1" size="lg" flex="10">
                    Todo App
                </Heading>
            </Flex>

            <Box
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
            >
                <Link style={linkStyle} to='/'>Home</Link>
                <Link style={linkStyle} to='/about'>About</Link>
            </Box>
        </Flex>
    );
}

const headerStyle = {
    padding: "1.5em",
    paddingBottom: "2em",
    marginBottom: "0.5em",
    color: 'white',
    backgroundImage: "linear-gradient(to bottom, #0040b8, #0059ff)",
    borderRadius: "0px 0px 25px 25px"
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    marginRight: '1em'
}