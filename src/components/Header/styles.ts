import styled from 'styled-components';

export const Container = styled.div `
  max-width: 66rem;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #1A1A1A;
    font-size: 2.25rem;
    margin-right: 4.75rem;
  }

  @media (max-width: 550px){
    width: 100vw;
    padding: 1.2rem 2rem;
    
    h1 {
      font-size: 1.563rem;
      margin-right: 1rem;
    }
  }
`;

export const Separator = styled.div`
  border-bottom: 0.063rem solid #DCE2E6;
  max-width: 100vw;
`;

export const Section = styled.nav`
  display: flex;
  align-items: center;

  a, button {
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    color: var(--text-secondary-color);

    & + a {
      margin-left: 2.5rem;
    }

    @media (max-width: 550px){
      & + a {
        margin-left: 0.5rem;
      }
    }
  }

  img {
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
    border: 0.156rem solid var(--primary-color);
    object-fit: cover;

    @media (max-width: 550px){
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const Button = styled.a`
  color: #E1E1E6 !important;
  background-color: var(--primary-color);
  padding: 0.938rem 2.188rem;
  border-radius: 6.25rem;

  @media (max-width: 550px){
    padding: 0.838rem 0.5rem
  }
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;

  p {
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  button {
    font-weight: 500;
    font-size: 0.875rem;
    background: none;
    border: none;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 550px){
    margin-right: 0.8rem;

    p {
      font-size: 0.875rem;
      text-align: end;
    }

    button {
      font-size: 0.813rem;
    }
  }
`;
