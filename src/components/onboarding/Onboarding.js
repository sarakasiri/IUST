import React, { useState, useRef, useEffect } from 'react';

import classes from './styles/Onboarding.module.scss';
import OnboardingItems from './OnboardingItems';

import { FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, IconButton } from '@mui/material';
import Button from '@mui/material/Button';

import { FiberManualRecordRounded } from '@material-ui/icons';



const Onboarding = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const items = [
        {
            title: "welcome to IUST ",
            forSub: "For submission you must undergo the following steps",
            image: require("../../assets/images/first-slide.png"),
            description: "Signup"
        },
        {
            title: "welcome to IUST ",
            forSub: "For submission you must undergo the following steps",
            image: require("../../assets/images/second-slide.png"),
            description: "fill in the forms and upload your documents"
        },
        {
            title: "welcome to IUST ",
            forSub: "For submission you must undergo the following steps",
            image: require("../../assets/images/third-slide.png"),
            description: "Wait for the answers to come"
        },
    ]

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1
        }
        setActiveIndex(newIndex)
    }

    return (
        <div className={classes.container}>

            <div className={classes.slideShow}>
                <div
                    className={classes.inner}
                    style={{ transform: `translate:(-${activeIndex * 100}%)` }}
                >
                    <OnboardingItems item={items[activeIndex]} />
                </div>
            </div>
            <div className={classes.slideShowBtn}>
                {items.map((item, index) => {
                    return (
                        <IconButton onClick={() => { updateIndex(index) }} className={classes.indicatorButtons}>
                            <FiberManualRecordRounded className={classes.button} fontSize='small' />
                        </IconButton>
                    )
                })}
            </div>


        </div >
    );
};

export default Onboarding;

