import React, { Fragment } from 'react';

export const StartBattle = ( props ) => {

    const clicked = event => {
      event.preventDefault();
      props.onClicked();
    };
    return(
    <Fragment>
        <button class="battle-btn" onClick={clicked}>Start Battle</button>
    </Fragment>
    )
};
