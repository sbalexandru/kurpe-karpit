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
    @media (max-width: 460px) {
      font-size: 3rem;
    }
  }
`;

export const BtnSection = styled.div`
  display: none;
  &.active {
    display: flex;
    color: #ffffff;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    @media (max-width: 360px) {
      display: none;
    }
  }
  &.drop-logo {
    display: none;
    @media (max-width: 360px) {
      display: block;
    }
  }
  @media (max-width: 900px) {
    display: none !important;
  }
`;

export const Button = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px;
  img {
    width: 50px;
    height: 50px;
  }
  .hiden.active {
    display: none !important;
  }
  .home {
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }
`;

export const MeniuDropdown = styled.div`
  display: none;
  @media (max-width: 900px) {
    color: #2f5ef3;
    padding: 20px 30px;
    font-size: 2rem;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.2rem;
    height: 3rem;
    border: 2px dashed #0bcbcc;
    border-radius: 5px;
    background-color: #000000ca;
    transition-duration: 0.4s;
    z-index: 999999;
    position: absolute;
    top: 25%;
    left: 30px;
    &.hiden {
      display: none !important;
    }
  }
`;

export const DropDownWrap = styled.div`
  position: absolute;
  top: 108%;

  border: 2px dashed #f18ce1;
  background-color: #000000ca;
  overflow: hidden;
  z-index: 999;
  border-radius: 5px;
  .hiden.active {
    display: none !important;
  }
`;
