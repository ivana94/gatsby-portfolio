import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
    margin: 5vh 0 10vh 0;
    display: flex;
`;

export const Header = ({ siteTitle, siteDescription }) => (
    <HeaderStyles>
        <Link to="/">
            <h1 className="font-mono text-2xl tracking-wide">{siteTitle}</h1>
        </Link>
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
            <Link to="/about">
                <h3 className="font-mono text-xl tracking-wide mx-5 hover:underline">
                    about
                </h3>
            </Link>
        </nav>
    </HeaderStyles>
);
