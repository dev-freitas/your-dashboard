import React from 'react'
import { StyledMain } from '../styled/Main.styled'
import ImgUploadMemories from './ImgUploadMemories'
import MemoriesList from './MemoriesList'

const Memories = () => {
  return (
    <StyledMain>
        <h1 className='text-2xl font-bold py-4'>Your Memories</h1>
        <ImgUploadMemories />
        <MemoriesList />
    </StyledMain>
  )
}

export default Memories
