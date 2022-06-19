import styled from 'styled-components';

export const Container = styled.div`
  max-width: 69rem;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    padding: 1rem;
  }

  @media (max-width: 370px) {
    padding: 1rem;
    height: initial;
  }
`;

export const ButtonForm = styled.div`
  display: flex;
  justify-content: center;
  
  margin: 2rem 0;

  a {
    background: var(--primary-color);
    color: var(--background-color);
    font-weight: 700;
    padding: 0.938rem 4rem;
    border-radius: 6.25rem;
    border: none;
    cursor: pointer;
    margin-top: 1.563rem;
    text-decoration: none;

    font-size: 1rem;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      filter: brightness(1.5);
    }
  }
`;

export const Session = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 7.75rem;

  margin-bottom: 5.438rem;

`;

export const MainDetails = styled.div`
  h1 {
    font-size: 2.625rem;
    font-weight: 700;
    line-height: 3.375rem;

    margin-bottom: 0.75rem;
  }
`;

export const Location = styled.div`
  display: flex;
  column-gap: 0.625rem;
  align-items: center;

  margin-bottom: 2.5rem;;

  p {
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: var(--gray-600);
  }
`;

export const Services = styled.div`
  margin-bottom: 2.5rem;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

`;

export const Operation = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.875rem;

    margin-bottom: 1rem; 
  }
`;

export const Contact = styled.div`
  margin-top: 3.438rem;

  display: flex;
  column-gap: 2rem;
  align-items: center;

  a {
    font-size: 1.1rem;
    font-weight: 500;
    width: 17rem;
    height: 3.75rem;
    background: #04D361;
    color: var(--white);
    border: 0;
    border-radius: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: #04BF58;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.875rem;
    margin-bottom: 0;
    color: var(--gray-600);
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.875rem;
  }
  
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 8.625rem);
  gap: 0.5rem;
  margin-top: 2rem;
`

export const Card = styled.div`
  background: var(--white);
  border-radius: 0.625rem;
  height: 7.063rem;
  border: 1px solid var(--gray-300);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    color: var(--gray-600);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.875rem;
    letter-spacing: 0.05em;

    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.875rem;
  }
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  > div {
    display: flex;
    gap: 1.125rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.875rem;
    }
  }

  button {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    font-family: Roboto;
    color: var(--gray-600);
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      filter: brightness(1.5);
    }
  }
`;

export const Grade = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: var(--color-orange);
  }
`;

export const Evaluation = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;

  margin: 2rem 0 3rem;

`

export const ImgEvaluation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;

export const EvaluationDescription = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  column-gap: 2.5rem;

  > div {
    h2 {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.625rem;
      color: var(--gray-600);

      margin-bottom: 1.188rem;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.625rem;
      color: var(--gray-600);
    }
  }
`;