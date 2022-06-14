import styled from "styled-components";

export const Container = styled.a`
  width: 16rem;
  background: #ffffff;
  border-radius: 1.25rem;
  border: 0.063rem solid #DCE2E6;
  text-decoration: none;
  color: black;

  img {
    width: 16rem;
    height: 13.063rem;
    object-fit: cover;
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
  }
`;

export const Evaluation = styled.div `
  width: 3.5rem;
  height: 5.188rem;
  background: var(--primary-color);
  border-radius: 0.625rem;
  margin-left: 1.5rem;
  transform: translateY(-1.188rem);
  position: absolute;
  display: flex;
  row-gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
  }

  p {
    color: var(--background-color);
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

export const Main = styled.div`
  padding: 1.063rem 1.188rem;

  h1 {
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.563rem;
    margin-bottom: 0.563rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--text-secondary-color)
  }
`; 