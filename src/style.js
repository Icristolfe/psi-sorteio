import styled from 'styled-components'


export const Container = styled.div`
    background: rgb(0,48,255);
    background: radial-gradient(circle, rgba(0,48,255,1) 0%, rgba(32,42,74,1) 100%);
    height: 100vh;
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

    input {
        width: 300px;
        height:  40px;
        border: none;
        border-radius: 10px;
        padding-left: 15px;
    }

    button {
    width: 150px;
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

`

export const SortButton = styled.button `
    background: #202A4A;
    color: #e3e3e3;
    width: 29%;
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

`

export const EditContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    input{
        width: 60%;
        height:  40px;
        border: none;
        border-radius: 10px;
        padding-left: 15px;
        margin-bottom: 20px;
    }

    button {
    background: #202A4A;
    color: #e3e3e3;
    width: 70%;
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
    width: 29%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    margin-top: 50px;

    div {
        display: flex;

        gap: 10px;
    }
`

export const ButtonsContainer = styled.button `
        background: #202A4A;
        color: #e3e3e3;
        width: 100px;
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
    
`

export const H1 = styled.h1`
    color: #e3e3e3;
    margin-bottom: 50px;
`