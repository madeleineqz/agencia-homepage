import img1 from '../assets/images/picosa.png'
import img2 from '../assets/images/cereal.png'
import img3 from '../assets/images/salsa.png'

import { Article } from "./Article"

export const ArticlesContainer = () => {
  return (
    <section className="mt-6 sm:flex md:flex-wrap gap-10">
               
    <Article
    img={img1}
    number='01'
    title='Diseña ilustraciones'
    text='Usa la herramienta pluma para crear lineas rectas y curvas que puedas editar'
     />
    <Article
    img={img2}
    number='02'
    title='Añade texto a tu diseño'
    text='Usa la herramienta pluma para crear lineas la herramienta texto '
     />
    <Article
    img={img3}
    number='03'
    title='Crea diseños de cualquier tamaño'
    text='Cambia el tamaño de tus diseños para que sean tan grandes o pequeños como quieras crea stikers'
     />
    </section>
  )
}


