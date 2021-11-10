import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const About = ({ data }) => {
    return (
        <>
            <Layout>
                <div className="container flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap md:flex-1 lg:flex-1">
                    <h1>About me</h1>
                </div>
            </Layout>
        </>
    );
};

export default About;
