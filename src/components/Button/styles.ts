import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.938rem;

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

  .secondary {
    background: var(--primary-light);
  }

  .new-object {
    background: var(--new-object);
  }
`