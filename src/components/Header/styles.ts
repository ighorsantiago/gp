import styled from 'styled-components';

// export type BtnVariant = 'primary' | 'secondary' | 'danger' | 'success';

// interface BtnContainerProps {
//     variant: BtnVariant;
// }

// const btnVariants = {
//     primary: 'purple',
//     secondary: 'orange',
//     danger: 'red',
//     success: 'green',
// }

export const Container = styled.div`
    // width: 100vh;
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    // background-color: #fff;
`;

export const Text = styled.text`
    font-size: 18px;
    font-weight: bold;

    color: #fff;
`;

// export const Btn = styled.button<BtnContainerProps>`
//     width: 100px;
//     height: 40px;
    
//     ${props => {
//         return css`
//             backgrouond-color: ${btnVariants[props.variant]}
//         `
//     }}

//     background-color: ${props => props.theme.primary}
// `;
