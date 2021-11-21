import React from "react";
import { Layout } from "../components/Layout";
import styled, { css } from "styled-components";

const generateConfettiExplosionAnimation = () => {
    let styles = "";

    for (let i = 0; i < 100; i += 1) {
        styles += `i:nth-of-type(${i}) {
            transform: translate3d(
                ${generateRandomNumber(200) - 100}px,
                ${generateRandomNumber(50) - 100}px,
                0
            )
            rotate(${generateRandomNumber(360)}deg);
            background: hsla(${generateRandomNumber(360)}, 100%, 50%, 1);
            animation: confetti-explosion 700ms ease-in-out;
            opacity: 0;
        }
     `;
    }
    return css`
        ${styles}
    `;
};

const generateRandomNumber = (max) => Math.floor(Math.random() * max);

const H1Styles = styled.h1`
    cursor: pointer;
    font-size: 2rem;
    text-align: center;
`;

const Confetti = styled.div`
    position: absolute;

    i {
        position: absolute;
        display: block;
        left: 75%;
        top: 10px;
        width: 3px;
        height: 5px;
        opacity: 0;
    }
    &:hover {
        ${generateConfettiExplosionAnimation()};
    }
`;

const Main = () => {
    return (
        <Layout>
            <H1Styles>
                <Confetti>
                    Hello! I'm
                    <span className="text-4xl text-red"> Ivana</span>
                    {[...new Array(50)].map((_, index) => (
                        <i key={index}></i>
                    ))}
                </Confetti>
            </H1Styles>
        </Layout>
    );
};

export default Main;
