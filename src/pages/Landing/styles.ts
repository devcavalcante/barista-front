import styled from 'styled-components';

export const Container = styled.div `
  max-width: 66rem;
  padding: 1.5rem 2rem;
  margin: 0 auto;
`;

export const Banner = styled.div`
  margin-top: 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 14.625rem;

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3.375rem;
    margin-bottom: 0.875rem;
  }

  p {
    font-size: 1.25rem;
    color: var(--text-secondary-color);
    line-height: 1.875rem;
  }
  
  form {
    width: 100%;
    height: 48px;
    display: flex;

    margin-top: 5.438rem;

    input {
      border: 0.063rem solid var(--color-border);
      border-radius: 0.625rem;
      padding: 0.625rem;
      width: 75%;
      height: 100%;
      font-size: 1.125rem;
      font-weight: 700;
    }

    button {
      background-color: var(--primary-color);
      padding: 0.938rem 1.563rem;
      border-radius: 0.625rem;
      border: none;
      cursor: pointer;
      margin-left: 1.25rem;

      color: var(--background-color);
      font-weight: 700;
      font-size: 1rem;
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        filter: brightness(1.5);
      }
    }

    @media (max-width: 550px){
      margin-top: 2rem;
      flex-direction: column; 

      height: initial;

      input {
        width: 100%
      }

      button {
        margin-left: 0;
        margin-top: 0.5rem;
        align-self: flex-end;
      }
    }
  }

  @media (max-width: 950px){
    justify-content: center;
    
    img {
      display: none;
      opacity: 0;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 5rem;
  justify-content: space-evenly;
  margin-top: 5.5rem;
  row-gap: 3.75rem;
`;
