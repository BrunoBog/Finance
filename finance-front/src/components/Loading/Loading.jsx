import React from 'react';
import ReactLoading from 'react-loading';

const Loading = (prop) => {
    const {type, color } = prop

    const list = ["balls","bars","bubbles","cubes","cylon","spin","spinningBubbles","spokes"]
    
    let ftype = type ?? list[Math.floor(Math.random() * list.length)]

    return (
        <ReactLoading type={ftype} color={color ?? '#6EF9F5'}  />
    )
}

export default Loading