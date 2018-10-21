import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

        const transformdIngredients = Object.keys(props.ingredients)
                .map(igKey => {
                    return [...Array(props.ingredients[igKey])].map((_, i) => {
                        return <BurgerIngredient id={igKey + i} type = {igKey} />;
                    });
                });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformdIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;