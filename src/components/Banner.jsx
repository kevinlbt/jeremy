import styled from "styled-components"
import { simpleParallax } from '../utils/Parallax'

simpleParallax('banner', 2);

const BannerSection = styled.section`
    ${(props) => 
    `background-image: url(${props.isDataImg});`}
`

export default function Banner ({data}) {

    return <BannerSection isDataImg={data.image} className="banner flex flex-col justify-center">
                <div className="flex flex-col justify-center ml-10">
                    <h2  className="slide1"><strong>{data.channel}</strong></h2>
                    <p className="slide2">{data.description}</p>
                    <a className="slide3" href={data.youtube} >Voir la chaîne</a> 
                </div>
            </BannerSection>
}
