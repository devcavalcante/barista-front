import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    :root {
        --background-color: #F7F7F7;
        --primary-color: #1F2729;
        --primary-light: #464f51;
        --primary-dark: #000000;
        --text-secondary-color: #3E3E3E;
        --color-border: #B7B7B7;
        --gray-300: #DCE2E6;
        --gray-600: #4A4A4A;
        --white: #ffffff;
        --color-orange: #F25D27;
        --new-object: #008000;
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;
        
        --blue-light: #6933FF;
    
        --text-title: #363F5F;
        --text-body: #969CB3;
    
        --background: #F0F2F5;
        --shape: #FFFFFF;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        background: var(--background-color);
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
    a, button {
        cursor: pointer;
    }
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
    
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
    
        transition: filter 0.2s;
    
        &:hover{
            filter: brightness(0.8)
        }
    }
    
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed; //plaquinha de não permitido
    }
`;