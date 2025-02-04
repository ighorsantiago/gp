import styled from "styled-components";

export const Container = styled.li`
    float: left;
    position: relative;

    margin: 20px;
`;

export const Image = styled.img`
    width: 400px;
    height: 400px;

    border-radius: 10px;
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    left: 2vh;
    bottom: 2vh;
`;

export const Name = styled.text`
    font-size: 16px;
    font-weight: bold;

    color: orange;
`;

export const Address = styled.text`
    font-size: 14px;
    font-weight: bold;

    color: orange;
`;
