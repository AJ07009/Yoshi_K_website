"use client"
import React from 'react';
import PropTypes from "prop-types";
import { css } from "styled-components";

const Slider = ({
    translate,
    transition,
    width,
    children,
    ...wrapperProps
}) => (
    <div
        css={css`
        transform: translateX(-${translate}px);
        transition: transform ease-out ${transition}s;
        height: 100%;
        width: ${width}px;
        display: flex;
        `}
    {...wrapperProps}
>
        {children}
    </div>
);

Slider.propTypes = {
    translate: PropTypes.number,
    transition: PropTypes.number,
    width: PropTypes.number,
    children: PropTypes.node,
    wrapperProps: PropTypes.object
};

export default Slider
