import React, { useState } from "react";
import { Layout } from "../components/Layout";
import styled, { css } from "styled-components";

const generateConfettiExplosionAnimation = () => {
    let styles = "";

    for (let i = 0; i < 100; i += 1) {
        styles += `i:nth-of-type(${i}) {
            transform: translate3d(
                ${generateRandomNumber(800) - 100}px,
                ${generateRandomNumber(500) - 100}px,
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

const Confetti = styled.span`
    position: absolute;

    i {
        position: absolute;
        display: block;
        left: -75px;
        /* top: 10px; */
        margin-left: 15%;
        width: 7px;
        height: 9px;
        opacity: 1;
    }

    ${generateConfettiExplosionAnimation()};
`;

const Main = () => {
    const [confettiActive, setConfettiActive] = useState(false);
    const triggerConfetti = () => {
        setConfettiActive(true);
    };

    return (
        <Layout>
            <div className="text-6xl font-light">
                Hello! I'm&nbsp;
                <span onMouseOver={triggerConfetti} className="text-pink-600">
                    Ivana
                </span>
                {confettiActive && (
                    <Confetti onAnimationEnd={() => setConfettiActive(false)}>
                        {[...new Array(100)].map((_, index) => (
                            <i key={index}></i>
                        ))}
                    </Confetti>
                )}
                &nbsp;and I'm an American software engineer based in NYC. I love
                coding in JavaScript and building interactive interfaces with{" "}
                <strong>React</strong>,<strong>Vue</strong>,{" "}
                <strong>Node</strong>, and more. I also enjoy teaching and
                mentoring others.
            </div>
        </Layout>
    );
};

export default Main;
