import React from 'react';
import ReactLoading from 'react-loading';

const Loading = (prop) => {
    const {type, color, height, width } = prop

    const list = ["balls","bars","bubbles","cubes","cylon","spin","spinningBubbles","spokes"]
    
    let ftype = type ?? list[Math.round( Math.random( 0,list.length-1))]

    return (
        <ReactLoading type={ftype} color={color ?? '#fff'}  />
    )
}

export default Loading