
import React from "react";
import styled from "styled-components";

/* Avatar
 *
 * TODO: add component description
 */
const Avatar = (props) => {
  return <StyledAvatar src={props.image} />
};

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export default Avatar;
