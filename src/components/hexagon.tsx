import React from 'react'
import styled from 'styled-components'
import Wheat from '../assets/images/wheat.png'
import Brick from '../assets/images/brick.png'
import Desert from '../assets/images/desert.png'
import Rock from '../assets/images/rock.png'
import Wood from '../assets/images/wood.png'
import Sheep from '../assets/images/sheep.png'
import { Space } from '../interfaces/space'

interface Props {
  space: Space
}

const Hexagon = ({ space }: Props) => {
  const images = { Wheat, Brick, Desert, Rock, Wood, Sheep };

  return (
    <HexagonContainer className='hexagon'>
      <img src={images[space.type]} />
    </HexagonContainer>
  )
}

export default Hexagon

const HexagonContainer = styled.div`
  height: 160px;
  width: 138.564px;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;