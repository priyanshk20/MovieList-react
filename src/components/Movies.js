import React from 'react'
import Card from './Card'


const Movies = () => {

    const movies = [
        {
            name:"Money Heist",
            place:"A NETFLIX Original",
            img: "https://wallpapercave.com/wp/wp6201564.jpg",
            link:"https://www.netflix.com/in/title/80192098",
        },
        {
            name:"Friends",
            place:"A NETFLIX Original",
            img: "https://i.pinimg.com/736x/a0/70/b6/a070b684e47e4d5c8a94302b269e574a.jpg",
            link:"https://www.netflix.com/in/title/70153404",
        },
        {
            name:"Andhadhun",
            place:"A NETFLIX Original",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/96245c69898165.5b96482709d56.jpg",
            link:"https://www.netflix.com/in/title/81039381",
        },
        {
            name:"The Family Man",
            place:"Amazon Prime Original",
            img: "https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_.jpg",
            link:"https://www.primevideo.com/detail/The-Family-Man/0H3DDB4KBJFNDCKKLHNRLRLVKQ",
        },
        {
            name:"Breaking Bad",
            place:"A NETFLIX Original",
            img: "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR116,0,630,1200_AL_.jpg",
            link:"https://www.netflix.com/in/title/70143836",
        },
        {
            name:"The Shawshank Redemption",
            place:"A NETFLIX Original",
            img: "https://vistapointe.net/images/the-shawshank-redemption-wallpaper-18.jpg",
            link:"https://www.netflix.com/in/title/70005379",
        }
    
    ]
    return (
        
            movies.map(movie => <Card imgsrc = {movie.img} sname = {movie.name} place = {movie.place} link = {movie.link} /> )
    )
}

export default Movies