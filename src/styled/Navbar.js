import styled from 'styled-components';


export const Container = styled.div`
    background: #243148;
    position: fixed;
    width: 414px;
    height: 50px;
    left: 0px;
    top: 0px;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SearchContainer = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px ;
    padding-left: 1rem;
    

`

export const Input = styled.input`
    width: 200px;
    height: 30px;
    left: 19px;
    top: 30px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    color: white;

    background: rgba(0, 0, 0, 0.3);
/* Primary 3 / 800 */

    border: 1px solid #F27405;
    box-sizing: border-box;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`

export const ProfileImage = styled.div`
    display: flex;
    cursor: pointer;
    margin: 10px 10px;
`