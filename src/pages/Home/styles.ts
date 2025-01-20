import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    // background-color: orange;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const Text = styled.text`
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

export const Logo = styled.img`
    width: 100px;
    height: 100px;
`;