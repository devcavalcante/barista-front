import styled from 'styled-components'

export const Container = styled.div`
  max-width: 69rem;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  display: flex;

  @media (max-width: 550px) {
    padding: 1rem;
  }

  @media (max-width: 370px) {
    padding: 1rem;
    height: initial;
  }
`

export const DuplaLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
`

export const DuplaRight = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 1rem;
`

export const BarFormCreate = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #ffffff;
  padding: 1.5rem 2.5rem;
  border-radius: 0.5rem;

  h2, h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 500;

    margin: 2.938rem 0 1.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 0.75rem 2.5rem;

    h1 {
      line-height: initial;
    }
  }

  @media (max-width: 550px) {
    padding: 1rem;
  }

  form {
    margin-top: 2rem;
  }
`

export const HeaderTitleForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  h1 {
    color: var(--primary-color);
    font-size: 2.5rem;
    line-height: 3.375rem;
    font-weight: 700;

    margin-top: 2rem;
  }

  button {
    background: #D01823;
    color: var(--background-color);
    font-weight: 700;
    padding: 0.938rem 1rem;
    border-radius: 6.25rem;
    border: none;
    cursor: pointer;
    margin-top: 1.563rem;

    font-size: 1rem;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      filter: brightness(1.5);
    }
  }
`

export const ButtonForm = styled.div`
  display: flex;
  justify-content: center;
  
  margin: 2rem 0;

  button {
    background: var(--primary-color);
    color: var(--background-color);
    font-weight: 700;
    width: 50%;
    padding: 0.938rem 0;
    border-radius: 6.25rem;
    border: none;
    cursor: pointer;
    margin-top: 1.563rem;

    font-size: 1rem;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      filter: brightness(1.5);
    }
  }
`;

export const Services = styled.div`
  display: flex;
  column-gap: 2.813rem;

  margin-top: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.245rem;
  }
`

export const DuplaCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  margin-top: 1rem;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--primary-color);
    font-size: 1.125rem;
    font-weight: 500;

    line-height: 1.875rem;
    margin-bottom: 0.313rem;
  }

  textarea {
    border: 0.063rem solid var(--color-border);
    border-radius: 0.625rem;
    padding: 0.625rem;
    font-size: 1.125rem;
    font-weight: 500;
    transition: 0.2s;
    height: 6.25rem;

    &:focus {
      transition: 0.2s;
      border: 0.063rem solid var(--primary-color);
    }
  }
`;