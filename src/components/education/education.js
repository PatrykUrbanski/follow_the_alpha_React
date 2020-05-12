
import React from 'react';
import Swiper from 'react-id-swiper';
const MutipleSlidesPerView = () => {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '3',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        }
    }

    return (
        <>
        <div className={"educationSection"}>
            <div className={"educationSection__content container"}>
                <Swiper {...params}>
                    <div className={"swipeCard"}><img src={"../images/screen1.png"}/></div>
                    <div className={"swipeCard"}><img src={"../images/manWhoSoldved.jpg"}/></div>
                    <div className={"swipeCard"}><img src={"../images/principles.jpg"}/></div>
                    <div className={"swipeCard"}><img src={"../images/reminLafevre.jpeg"}/></div>
                    <div className={"swipeCard"}><img src={"../images/deliveringAlpha.jpg"}/></div>
                    <div className={"swipeCard"}><img src={"../images/tradingZone.jpg"}/></div>
                    <div className={"swipeCard"}><img src={"../images/screen1.png"}/></div>
                    <div className={"swipeCard"}><img src={"../images/screen1.png"}/></div>
                    <div className={"swipeCard"}><img src={"../images/screen1.png"}/></div>

                </Swiper>
            </div>
        </div>
        </>

    )
};
export default MutipleSlidesPerView;