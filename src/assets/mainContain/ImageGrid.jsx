import React from 'react'
import styled from 'styled-components';

const ImageGrid = ({ APIData }) => {
  let filteredAPIData = [];

  return (
    <Wrapper>
      <React.Fragment>
      <section>
        {filteredAPIData = APIData.map(num => <img src={num.largeImageURL} alt="Failed to Load" key={num.id} />)}
      </section>
    </React.Fragment>
    </Wrapper>
  )
}

const Wrapper = styled.section`

section{
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
 border-radius: 8px;
  border: 1px solid white;
  padding: 5px; 
}

img{
  width: 25rem;
  height: 25rem;
  border-radius: 4px;
  will-change: filter;
  transition: filter 300ms;
}

img:hover{
  filter: drop-shadow(0 0 2em #61dafbaa);
  scale: 1.3;
  z-index: 100;
  transition: 0.4s;
}

@media (max-width: 1270px) {
  section{
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
  }
}

@media (max-width: 860px) {
  section{
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
  }
}

  
`
export default ImageGrid