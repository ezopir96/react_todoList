import Styled from 'styled-components'
import './Buttons.css'

const Button: any = Styled.button<any>`
background: ${ props => props.isDanger ? '#f96565': '#ccc' };
border: 1px solid #413f3f;
color: #000;
border-radius: 0 0.35rem 0.35rem 0;
padding: 4px 18px;
cursor: pointer;
height: 3.125rem;
&:active {
  background-color: #666;
}
`



export default Button
