import React from 'react'
import styled from 'styled-components';
import Key from '../Key';

const Wrapper = styled.div`
display:grid;
grid-auto-flow:column;
padding: 5%;
`;

const KeyIndicator = ({ state }) => {
    return <Wrapper>
        <Key disabled={true} label={'Caps Lock'} indicator={true} glow={state.isCapsLock} />
        <Key disabled={true} label={'Num Lock'} indicator={true} glow={state.isNumLock} />
    </Wrapper>

}

export default KeyIndicator;