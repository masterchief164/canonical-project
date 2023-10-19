import React from 'react'
import "./Card.scss"

export default function Card({ data }) {
    function getFormattedDate(date) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    return (
        <div className="p-card card">
            <div className='content'>
                <div className="p-card__inner">
                    CLOUD AND SERVER
                </div>
                <hr />
                <img className="p-card__image image" src={data.featured_media} alt='media-img' />
                <div className="p-card__inner">
                    <h3><a href={data.link}>{data.title.rendered}</a></h3>
                </div>
            </div>
            <div className='footer'>
                <div className='author'>By <a href={data._embedded.author[0].link} target='_blank' rel='noreferrer'>{data._embedded.author[0].name}</a> on {getFormattedDate(new Date(data.date))}</div>
                <hr />
                <div className="p-card__inner">
                    Article
                </div>
            </div>
        </div>
    )
}
