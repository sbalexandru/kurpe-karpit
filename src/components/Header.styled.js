import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  margin: 0 auto;
  min-height: 10rem;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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
    background: #000000ca;
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
    display: block;
    margin: 1% 0% 0% 0%;
    font-size: 6rem;
    font-weight: 900;
    color: #0bcbcc;
    span {
      color: #f18ce1;
    }
  }
`;

export const BtnSection = styled.div`
  display: none;
  &.active {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 20%;
  }
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;
  /* border: 1px solid red; */
  margin: 10px;
  img {
    width: 50px;
    height: 50px;
  }
  .hiden.active {
    display: none;
  }
  .home {
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }
`;
