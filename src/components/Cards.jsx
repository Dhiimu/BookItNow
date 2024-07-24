import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Cards = () => {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulated fetch request (replace with actual fetch call)
        const fetchData = async () => {
            try {
                // Assuming eventsJSON.json is placed in public folder
                const response = await fetch('data/eventsJSON.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                if (data && data.length > 0) {
                    setEventData(data);
                } else {
                    throw new Error('No events data available');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const PrevArrow = ({ onClick }) => (
        <button className="prev-arrow" onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </button>
    );

    const NextArrow = ({ onClick }) => (
        <button className="next-arrow" onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </button>
    );

    const sliderRef = useRef(null);

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    if (loading) return <p>Loading...</p>;

    if (!Array.isArray(eventData) || eventData.length === 0) {
        return <p>Error: Failed to load events</p>;
    }

    return (
        <section id="events" className="bg-white py-12">
            <div className="container mx-auto relative w-3/4">
                <h2 className="text-5xl font-bold mt-8 mb-6 text-center">Upcoming Events</h2>
                <div className="relative rounded-2xl  ">
                    <div class="absolute w-[50px] left-0 top-0 h-full bg-gradient-to-r from-gray-200 rounded-2xl  " ></div>
                    <Slider {...sliderSettings} ref={sliderRef}>
                        {eventData.map((event, index) => (
                            <div key={index} className= " rounded-2xl gap-10 h-[450px] py-10 px-8   ">
                                <img src={event.image} alt={event.title} className="rounded-lg h-44 w-full object-cover mb-4" />
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-900 mb-2">{event.date}</p>
                                <p className="text-gray-900 mb-4">{event.description}</p>
                                <a href={event.link} className="block bg-sky-700 hover:bg-sky-600 text-white text-center rounded-full font-bold py-2 px-4">Explore</a>
                            </div>
                        ))}
                    </Slider>
                    <div className="arrow-container absolute top-1/2 -left-12 transform -translate-y-1/2 z-10">
                        <PrevArrow onClick={handlePrevClick} />
                    </div>
                    <div className="arrow-container absolute top-1/2 -right-12 transform -translate-y-1/2 z-10">
                        <NextArrow onClick={handleNextClick} />
                    </div>
                    <div class="absolute w-[50px] right-0 top-0 h-full bg-gradient-to-l from-gray-200 rounded-2xl  " ></div>
                </div>
            </div>
        </section>
    );
};

export default Cards;