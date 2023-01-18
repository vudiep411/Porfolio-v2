import styled, { keyframes } from 'styled-components'

const matrix = keyframes`
from { background-position: 0 0; }
to { background-position: 0 100%; }
`;

const fall = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(450%); }
`;

export const Matrix = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  animation: ${matrix} 50s linear infinite;
`;

export const Char = styled.span`
color: green;
font-family: "Courier New", monospace;
animation: ${fall} 4s linear infinite;
animation-delay: ${props => props.animationDelay};
position: absolute;
top: ${props => props.top}%;
left: ${props => props.left}%;
`;
