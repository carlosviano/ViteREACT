import Card from '../../components/Card/Card'
import './All.css'
import image from '../../components/Card/images/hola.jpg'
import image2 from '../../components/Card/images/adios.jpg'


export default function All(){

    return(
        <div className='allMainContainer'>
         <Card i={image} i2={image2} altText={image} title={'Single Stitched Monroe County Tee - 1990s'} size={'Size: Large'} price={'$55.00'}  />
          </div>
    )
}