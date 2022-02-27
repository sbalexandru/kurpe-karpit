import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  margin: 0 auto;
  min-height: 10rem;
  position: fixed;
  top: 0;
  transition: all 0.5s;
  text-align: center;
  width: 100%;
  z-index: 999;
  &.active {
    transition: all 0.5s;
    border: 3px solid #2129f7;
    border-radius: 5px;
    border-style: dashed;
    background: #2a2a2aca;
  }
`;

// export const Container = styled.div`
//   text-align: center;
//   width: 96%;
//   margin: auto;
//   padding: 1rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

export const Title = styled.h2`
  display: none;
  &.active {
    margin: 1% 0% 0% 0%;
    font-size: 6rem;
    font-weight: 900;
    color: #0bcbcc;
    display: block;
    span {
      color: #f18ce1;
    }
  }
`;
