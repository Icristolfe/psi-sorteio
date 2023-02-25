import styled from 'styled-components'


export const Container = styled.div`
    color: #000 ;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const InputContainer = styled.div `
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 600px) {
    gap: 10px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    height: 8rem;
    gap: 10px;
    width: 100%;
    font-size: 16px;

  }

    input {
        width: 15rem;
        height:  40px;
        border: none;
        border-radius: 10px;
        padding-left: 15px;

    @media (max-width: 600px) {
    width: 40%;
  }

  @media (max-width: 400px) {
    width: 60%;
  }
    }

    button {
    width: 10rem;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    background: #202A4A;
    color: #E3E3E3;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

    @media (max-width: 600px) {
    width: 35%;
  }

  @media (max-width: 400px) {
    width: 60%;
  }
    }
`

export const FraseContainer = styled.div`
    background-color: #191970;
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 25px;
    margin-bottom: 10px;
    border-radius: 10px;
    color: #E3E3E3;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding:  10px;
    font-size: 18px;
    font-weight: 600;
  


    div {
        display: flex;
        gap: 20px;
    }
`

export const ContainerItems = styled.div `
    margin: 50px 0 ;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr;
  }

`

export const SortButton = styled.button `
    background: #202A4A;
    color: #e3e3e3;
    width: 10rem;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
    opacity: 0.8
        }

    &:active {
    opacity: 0.6;
        }

        @media (max-width: 400px) {
    width: 60%;
  }

`

export const EditContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 15rem;
        height:  40px;
        border: none;
        border-radius: 10px;
        padding-left: 15px;
        margin-bottom: 20px;
    }

    button {
    background: #202A4A;
    color: #e3e3e3;
    width: 10rem;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
    opacity: 0.8
        }

    &:active {
    opacity: 0.6;
        }
    }
`

export const SortContainer = styled.div `
    background-color: #191970;
    width: 40%;
    height: 253px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    margin-bottom: 10px;
    border-radius: 10px;
    color: #E3E3E3;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding:  10px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 50px;
    position: fixed;
    text-shadow: 5px 6px 2px #000;



    @media (max-width: 600px) {
            width: 90%;
  }

    div {
        display: flex;
        gap: 10px;
    }
`

export const ButtonsContainer = styled.button `
        background: #202A4A;
        color: #e3e3e3;
        width: 6rem;
        height: 2rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.8
        }

        &:active {
            opacity: 0.6;
        }

`

export const H1 = styled.h1`
    color: #e3e3e3;
    margin-bottom: 50px;

    @media (max-width: 600px) {
    font-size: 18px;
  }
`