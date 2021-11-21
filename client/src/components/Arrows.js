import React from "react";
import { Link } from "gatsby";

export const Arrows = ({ previous, next }) => {
    return (
        <div className="container mb-12">
            {previous && (
                <div className="float-left text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#6b7280"
                        className="w-5 inline-block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        />
                    </svg>
                    <Link to={`/blog/${previous.slug.current}`}>
                        &nbsp; previous post
                    </Link>
                </div>
            )}
            {next && (
                <div className="float-right text-gray-500">
                    <Link to={`/blog/${next.slug.current}`}>
                        next post &nbsp;
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#6b7280"
                        className="w-5 inline-block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};
