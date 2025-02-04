import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    // width: 100vh;
    /* width: 100%; */
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    background-color: #000005;
`;

export const Title = styled.text`
    font-size: 18px;
    font-weight: bold;

    color: #fff;
`;

export const Text = styled.text`
    font-size: 16px;

    color: #fff;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    /* background-color: green; */
`;

export const MenuLink = styled(Link)`
    margin-right: 15px;
    text-decoration: none;
`;

export const ItemIcon = styled.img`
    width: 15px;
    height: 15px;

    margin: 0 5px;

    /* background-color: red; */
`;
