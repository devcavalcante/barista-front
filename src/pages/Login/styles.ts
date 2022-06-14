import styled from 'styled-components'

export const Container = styled.div`
  max-width: 75rem;
  padding: 1.5rem 2rem;
  margin: 0 auto;

  height: 100vh;
  display: flex;

  @media (max-width: 550px) {
    padding: 1rem;
  }

  @media (max-width: 370px) {
    padding: 1rem;
    height: initial;
  }
`

export const ContainerSignUp = styled.div`
  margin: auto 0;
  gap: 4rem;
  display: flex;

  @media (max-width: 1200px) {
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    img {
      display: none;
      opacity: 0;
    }
  }
`

export const CardSignUp = styled.div`
  background: #ffffff;
  padding: 1.5rem 2.5rem;
  border-radius: 0.5rem;
  max-width: 31.875rem;

  h1 {
    color: var(--primary-color);
    font-size: 2.5rem;
    line-height: 3.375rem;
    font-weight: 700;

    margin-bottom: 0.375rem;
  }

  button {
    background: var(--primary-color);
    color: var(--background-color);
    font-weight: 700;
    width: 100%;
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

  @media (max-width: 1024px) {
    padding: 0.75rem 2.5rem;

    h1 {
      line-height: initial;
    }
  }

  @media (max-width: 550px) {
    padding: 1rem;
  }
  hr {
    margin-top: 1.563rem;
  }

  form {
    margin-top: 4rem;
  }
`

export const Button = styled.a`
  margin-top: 19rem;
  color: #e1e1e6 !important;
  background-color: var(--primary-color);
  padding: 0.938rem 2.188rem;
  border-radius: 6.25rem;

  @media (max-width: 550px) {
    padding: 0.838rem 0.5rem;
  }
`