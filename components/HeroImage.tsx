import { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  margin: 20px 0;
`

export const HeroImage: FC = () => {
  return (
    <Wrapper>
      <Image src="/HomepagePhoto.jpg" />
    </Wrapper>
  )
}
