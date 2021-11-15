import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import React from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp(prop: string): boolean {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

type SectionProps = {
  children: React.ReactNode
  delay: number
}

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
