import imageMobile from '../assets/images/mobile.jpg'
import imageDesktop from '../assets/images/desktop.jpg'

export const MainArticle = () => {
  return (
    <section className='mb-12'>
      <picture>
        <source media="(max-width: 640px)" srcSet={imageMobile}/>
        <source media="(min-width: 641px)" srcSet={imageDesktop}/>
        <img src={imageMobile} alt="Art principal" />
      </picture>
      <div className='sm:flex'>
      <div className='flex-1 py-6'>
      <h2 className='text-[68px] font-bold sm:text[58px] leading-none'>El Futuro del Diseño con IA</h2>
      </div>
      <div className='flex-1 pt-9'>
      <p className='text-[13px] mb-10 sm:text-[15px]'>El futuro del diseño grafico es emocionante y lleno de posibilidades gracias a la AI. A medida que se vuelve mas sofisticada y existe acceso a  diferentes herramietas</p>
      <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue'>Read more</button>
      </div>

      </div>
      
      
    </section>
  )
}
