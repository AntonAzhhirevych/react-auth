import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 90%;
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

export default StyledLabel;
