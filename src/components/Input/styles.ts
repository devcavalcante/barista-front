import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.938rem;

  label {
    color: var(--primary-color);
    font-size: 1.125rem;
    font-weight: 500;

    line-height: 1.875rem;
    margin-bottom: 0.313rem;
  }

  input {
    border: 0.063rem solid var(--color-border);
    border-radius: 0.625rem;
    padding: 0.625rem;
    font-size: 1.125rem;
    font-weight: 500;
    transition: 0.2s;

    &:focus {
      transition: 0.2s;
      border: 0.063rem solid var(--primary-color);
    }
  }
  
`