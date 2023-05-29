import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

export const Nav = styled.nav`
background-color: #a19ff5;
display: flex;
gap:30px;
box-shadow: 1px 6px 8px grey;
margin-bottom: 30px`;

export const StyledNavLin = styled(NavLink)`

padding: 5px;
align-items: center;

padding: 20px;

&.active{
    color: #f7eb07;
    text-decoration: underline #f7eb07  ;
}
:hover:not(.active),
:focus-visible:not(.active){
    color :blue;
}
`;
