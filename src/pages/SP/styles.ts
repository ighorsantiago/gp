import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    padding: 50px;
    /* background-color: orange; */

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const Title = styled.text`
    font-size: 18px;
    font-weight: bold;

    text-align: center;

    color: #fff;
`;

export const Component = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;

    padding: 100px;

    background-color: #273483;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const FiltersBox = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    margin: 50px 0;
    // padding: 100px;

    /* background-color: black; */
`;

export const FilterTitle = styled.text`
    font-size: 14px;
    font-weight: bold;
`;

export const Filter = styled.div`
    justify-content: center;
    align-items: center;

    padding: 5px;

    margin: 0 5px;
    
    background-color: black;
`;

export const FilterText = styled.text`
    font-size: 12px;

    color: white;
`;

export const CardBox = styled.ul`
    flex: 1;
    display: flex;

    justify-content: center;
    align-items: center;

    list-style-type: none;


    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    width: 200px;
    height: 400px;

    border-radius: 5px;
    border-width: 0;

    margin: 10px;

    color: white;

    opacity: 0.3;

    background-color: gray;
`;

export const CardLink = styled(Link)`
    
`;

export const BtnText = styled.text`
    font-size: 18px;
    font-weight: bold;

    text-align: center;

    color: #fff;
`;
