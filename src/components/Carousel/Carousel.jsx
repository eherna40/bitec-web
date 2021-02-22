import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider, Slide, DotGroup , Image} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Group } from './style';

const Carousel =    ({images}) => {

    console.log(images)
    return (
            <CarouselProvider
                naturalSlideWidth={80}
                naturalSlideHeight={55}
                totalSlides={images.length}
                className="tw-p-20"
            style={{
                height: 'calc(100% - 120px)',
                overflow: 'hidden'
            }}
                
            >
                <Slider >
                    {
                        images.map(i => <Slide  index={i.id_image}>
                            <Image src={i.url} />
                        </Slide>
)
                    }
                </Slider>
                
                   
                <Group className="tw-flex tw-items-center tw-justify-center">
                <DotGroup className='custom-dots' />
             
                   
                   </Group>
                             
            </CarouselProvider>
    )
}

Carousel.propTypes = {
    images: PropTypes.array
}

Carousel.defaultProps = {
    images: []
}

export default Carousel
