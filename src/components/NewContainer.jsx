import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px]">
    <h1 className="text-SoftOrange tex-4x1 font-bold">New</h1>
    <NewArticle
    title='Crea logotipos perzonalizados'
    text=' Utiliza efectos en 3d, degradados y texto para diseños unicos' />
    <NewArticle
    title='Diseña ilustraciones nitidas'
    text='Combina lineas formas y colores para increibles ilustraciones' />
    <NewArticle
    title='Textos y graficos para ser tendencia'
    text='Comunica tu diseño de forma simple y visual con las fuentes perfectas' 
    />
    
    </aside>
  )
}
