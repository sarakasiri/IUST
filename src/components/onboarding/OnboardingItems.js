import { ClassNames } from "@emotion/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import classes from './styles/Onboarding.module.scss';

const OnboardingItems = ({ item }) => {
    return (
        <>
            <div className={classes.onboardingItems}>
                <div></div>
                <div className={classes.title}>{item.title}</div>
                <div className={classes.forSub}>{item.forSub}</div>
                <LazyLoadImage className={classes.onboardingImg} src={item.image} />
                <div className={classes.description}>{item.description}</div>
            </div>
        </>
    );
};

export default OnboardingItems;