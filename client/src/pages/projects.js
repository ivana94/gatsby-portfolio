import React from "react";
import { Layout } from "../components/Layout";

const About = () => {
    return (
        <>
            <Layout>
                <h1>
                    Hello! I'm Ivana{" "}
                    <span role="img" aria-label="emoji of a hand waving">
                        👋
                    </span>
                </h1>
            </Layout>
        </>
    );
};

export default About;
