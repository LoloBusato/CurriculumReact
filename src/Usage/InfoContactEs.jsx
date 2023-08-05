import React from 'react'
import { ContactoInfo } from '../Functions/ContactoInfo'
import { Titles } from '../Functions/Titles'


const objInfoContacto = [
    {info: " +54 9 11 6125 2839", img1: "fa-solid", img2: "fa-phone", href: "https://api.whatsapp.com/send?phone=541161252839"},
    {info: " lorenzobusato07@gmail.com", img1: "fa-solid", img2: "fa-envelope", href: "mailto: lorenzobusato07@gmail.com"},
    {info: " Buenos Aires, Argentina", img1: "fa-solid", img2: "fa-location-dot", href: "https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6158238,-58.4332985"},
    {info: " lolobusato.github.io/ LorenzoBusato/indexEn", img1: "fa-solid", img2: "fa-globe", href: "https://lolobusato.github.io/LorenzoBusato/indexEn"}
  ];

export const InfoContactEs = () => {
  return (
    <div id="parrafo-2" className='mt-4'>
          <Titles text="CONTACTO" />
          {objInfoContacto.map(({ info, img1, img2, href }) => <ContactoInfo info={info} img1={img1} img2={img2} href={href} />)}
      </div>
  )
}
