import { Box, Text, Button } from "native-base"
import { useState } from "react"

const FullButton = ({
    children,
    innerProps,
    outerProps,
    textProps,
    onPress,
}) => {
    return (
        <Box {...outerProps} px="10" w="300">
            <Button
                onPress={onPress}
                {...innerProps}
                py="4"
                bg="#4c892c"
                _pressed={{ opacity: 0.2}}
                rounded="full"
            >
                <Text
                    {...textProps}
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                    fontSize="17"
                >
                    {children}
                </Text>
            </Button>
        </Box>
    )
}

export default FullButton
