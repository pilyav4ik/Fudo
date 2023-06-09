import Header from "../components/screens/header/Header"
import Offer from "../components/screens/offer/Offer"
import Popular from "../components/screens/popular/Popular"


export default function Home() {

    const name = process.env.NEXT_PUBLIC_SITE_NAME

    return (
        <>
            <Header />
            <Offer />
            <Popular />

            {name}
        </>
    )
}