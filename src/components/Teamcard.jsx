import React from "react";

const Teamcard = ({ imageSrc, imageAltText, name, title, height, width, mobileHeight, mobileWidth }) => {
    return (
        <>
            <div className={`md:h-${height} md:w-${width} h-${mobileHeight} h-${mobileWidth} text-center mx-auto`}>
                <img className="mb-4 mx-auto" src={`/${imageSrc}`} alt={imageAltText} />
                <h3 className="text-2xl font-semibold">{name}</h3>
                <h4 className="text-lg font-normal">{title}</h4>
            </div>
        </>
    )
}

export default Teamcard;