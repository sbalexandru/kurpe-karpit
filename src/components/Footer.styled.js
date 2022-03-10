import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 12rem;
  border: 3px solid #2129f7;
  border-radius: 5px;
  border-style: dashed;
  background-color: black;
`;

export const Creator = styled.div`
  color: #ffffff;
  position: absolute;
  /* bottom: 0; */
  font-size: 2rem;
  right: 2%;
  text-align: right;
  h2 {
    font-family: "Estonia", cursive;
    /* font-family: "Diplomata SC", cursive; */
    font-size: 3rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
