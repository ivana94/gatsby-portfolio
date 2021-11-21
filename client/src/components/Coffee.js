import React from "react";
import styled, { keyframes } from "styled-components";

const coffeeShake = keyframes`
    40% {
        transform: rotate(5deg)
    }
    80% {
      transform: rotate(-5deg); 
    }
`;

const CoffeeContainer = styled.div`
    &:hover {
        animation: ${coffeeShake} 2s infinite;
    }
`;

const Cup = styled.div`
    z-index: 1;
`;

const CupBody = styled.div`
    margin-bottom: 10px;
    width: 100px;
    height: 66px;
    border-radius: 0 0 150px 150px;
    background-color: #ffbf00;
    margin: auto;
    display: inline-block;
    overflow: hidden;
    z-index: 1;
`;

const Steam = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: #000;
    margin-top: -85px;
    z-index: 0;
    opacity: 0;
`;

const steam1 = keyframes`
  0% {
      transform: translateY(0) translateX(0) scale(0.25); 
      opacity: 0.2;
    }
  100% {
      transform: translateY(-200px) translateX(-20px) scale(1); 
      opacity: 0;
    }
`;

const steam2 = keyframes`
  0% {
      transform: translateY(0) translateX(0) scale(0.25); 
      opacity: 0.2;
    }
  100% {
      transform: translateY(-200px) translateX(20px) scale(1); 
      opacity: 0;
}`;

const Steam1 = styled(Steam)`
    animation: ${steam1} 4s ease-out infinite;
`;

const Steam2 = styled(Steam)`
    animation: ${steam2} 4s ease-out 0.5s infinite;
`;

const CupShade = styled.div`
    position: relative;
    width: 115px;
    height: 225px;
    background-color: #e5a800;
    display: inline-block;
    transform: rotate(50deg);
    z-index: 1;
`;

const Coffee = () => {
    return (
        <>
            <CoffeeContainer>
                <Steam1></Steam1>
                <Steam2></Steam2>
                <Cup>
                    <CupBody>
                        <CupShade></CupShade>
                    </CupBody>
                </Cup>
            </CoffeeContainer>
        </>
    );
};

export default Coffee;
