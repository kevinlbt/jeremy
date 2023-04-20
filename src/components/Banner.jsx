import styled from "styled-components"

const BannerSection = styled.section`
    ${(props) => 
    `background-image: url(${props.isDataImg});`}
`
  
export default function Banner ({data}) {


    return <BannerSection isDataImg={data.image} className="banner flex flex-col justify-center">
                <div className="flex flex-col justify-center ml-10">
                    <h2><strong>{data.channel}</strong></h2>
                    <p>{data.description}</p>
                    <a href={data.youtube} >Voir la chaîne</a> 
                </div>
            </BannerSection>
}