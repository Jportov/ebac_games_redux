import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import ProductList from "../../components/ProductList";


export interface GalleryItemProps  {
        type: 'video' | 'image'
        url: string
    }

 export type Game = {

        id: number
        name: string
        description: string
        release_Date?: string
        prices: {
                discount?: number
                old?: number
                current?: number
        }
        details: {
                category: string
                system: string
                developer: string
                publisher: string
                languages: string
        }
        media: {
                thumbnail: string
                cover: string
                gallery: GalleryItemProps[]


        }
 }
 const Home = () => {
        const [promocoes, setPromocoes] = useState<Game[]>([])
        const [emBreve, setEmBreve] = useState<Game[]>([])
                useEffect(() => {
                                fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes').then((res) => res.json()).then((res) => setPromocoes(res))   }, [])
        return  (

                <>
                        <Banner />
                        <ProductList title="Promoções" background="grey" games={promocoes} />
                        <ProductList title="Em breve" background="black" games={emBreve} />
                </>
                
                )
}

export default Home