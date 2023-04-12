import React from 'react'
import styled from 'styled-components'

const Header = ({onSearchChange}) => {
    return (
        <React.Fragment>
            <Wrapper>
            <header>
                <section>
                    <h1>Search Images</h1>
                    <input type="search" placeholder='Type to Search Images' onChange={onSearchChange}/>
                </section>
            </header>
            </Wrapper>
        </React.Fragment>
    )
}

const Wrapper = styled.section`
margin-bottom: 3rem;
section{
    display: grid;
    align-items: center;
    justify-content: center;
}
`

export default Header