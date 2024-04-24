import { createContext, useContext, useState, useEffect } from 'react'

const PhotosContext = createContext();

const PHOTO_API = [
    {
        imageUrl : `https://drscdn.500px.org/photo/1037646377/q%3D90_m%3D2048_k%3D1/v2?sig=5876b7f0d1b6d9a3e1d54cc3c1d3614178cf33f684bc473b072a91e1bf58464f`,
        imageTitle : `First slide label`,
        imageContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
    },
    {
        imageUrl : `https://drscdn.500px.org/photo/309515039/q%3D90_m%3D2048/v2?sig=d3a449571edd4de5619ba26d766b6127b077694a4b049e5609ed94f82970041f`,
        imageTitle : `Second slide label`,
        imageContent : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        imageUrl : `https://drscdn.500px.org/photo/278074815/q%3D90_m%3D2048/v2?sig=664d200dba6363e6137785b621253c5927d61a3e5403aa2c8ee5e56986c5ec95`,
        imageTitle : `Third slide label`,
        imageContent : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        imageUrl : `https://drscdn.500px.org/photo/1037646377/q%3D90_m%3D2048_k%3D1/v2?sig=5876b7f0d1b6d9a3e1d54cc3c1d3614178cf33f684bc473b072a91e1bf58464f`,
        imageTitle : `Fourth slide label`,
        imageContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
    },
    {
        imageUrl : `https://drscdn.500px.org/photo/309515039/q%3D90_m%3D2048/v2?sig=d3a449571edd4de5619ba26d766b6127b077694a4b049e5609ed94f82970041f`,
        imageTitle : `Fifth slide label`,
        imageContent : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
        imageUrl : `https://drscdn.500px.org/photo/278074815/q%3D90_m%3D2048/v2?sig=664d200dba6363e6137785b621253c5927d61a3e5403aa2c8ee5e56986c5ec95`,
        imageTitle : `Sixth slide label`,
        imageContent : `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
]

function PhotosProvider({children}){
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isHero, setIsHero] = useState([]);

    const handleScroll = () => {
        const scroll = window.scrollY > 200;
        setIsScrolled(scroll);
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    useEffect(()=>{
        async function fetchHero(){
            setIsLoading(true)
            try{
                // const res = await fetch(`${PHOTO_API}`)
                // const data = await res.json()
                const data = PHOTO_API;
                setIsHero(data)
                console.log(data)
                setIsLoading(false)
            }
            catch(error){
                console.log(error);
                setIsLoading(false);
            }
        }
        fetchHero();
    },[])

    return(
        <PhotosContext.Provider value={{
            isScrolled,
            isHero,
            isLoading,
        }}>
            {children}
        </PhotosContext.Provider>
    )
}

function usePhotos(){
    const context = useContext(PhotosContext);
    if(context === undefined) throw new Error('PhotosContext was used outside of the PhotosProvider');
    return context;
}

export {PhotosProvider, usePhotos}