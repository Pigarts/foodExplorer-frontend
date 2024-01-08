import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;

    span {
        text-align: center;
        width: 100%;
        height: 40px;
        padding: 10px;

        color: ${({ theme }) => theme.COLORS.Light_100};
        font-family: Poppins;
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;

        transition: opacity 0.3s, height 0.3s;
        opacity: 0;
        height: 0;

        background-color: ${({ colorOption, theme  }) => {
             switch (colorOption) {
                case "bad":
                    return theme.COLORS.Tomato_200; // Substitua "Option1" pela sua cor desejada
                case "nice":
                    return theme.COLORS.Mint_100; // Substitua "Option2" pela sua cor desejada
                default:
                    return theme.COLORS.Tomato_200;
            }
        }};
    }

    &.show {
        span {
            opacity: 1;
            height: 40px;
        }
    }
`;
