import styled from "styled-components";

export const WhellContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: yellow;
`;

export const SofaContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: red;
`;

export const KarpitContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: green;
`;

export const Box = styled.div`
  width: 80%;
  /* height: 600px; */
  /* overflow: hidden; */
  /* margin */
  background-color: pink;
  border: 2px solid grey;
  margin: 20px auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: x-large;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const TextBox = styled.div`
  width: 40%;
`;

export const ImageBox = styled.div`
  width: 50%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: stretch;
`;

export const Image = styled.img`
  width: 90%;
  padding: 20px;
`;
