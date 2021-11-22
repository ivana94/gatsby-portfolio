import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Coffee from "../components/Coffee";

const HeaderStyles = styled.header`
    margin: 0vh 0 10vh 0;
    display: flex;
    align-items: center;
    position: relative;
`;

export const Header = () => (
    <HeaderStyles>
        <div>
            <Link to="/">
                <Coffee></Coffee>
            </Link>
        </div>
        <nav className="flex flex-row-reverse w-full">
            <Link to="/projects">
                <h3 className="font-mono text-xl tracking-wide mx-5 hover:underline">
                    projects
                </h3>
            </Link>
            <Link to="/blog">
                <h3 className="font-mono text-xl tracking-wide mx-5 hover:underline">
                    blog
                </h3>
            </Link>
            {/* <Link to="/about">
                <h3 className="font-mono text-xl tracking-wide mx-5 hover:underline">
                    about
                </h3>
            </Link> */}
        </nav>
    </HeaderStyles>
);
