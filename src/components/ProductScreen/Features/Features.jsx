import React from 'react'
import PropTypes from 'prop-types'
import Paragraphs from '../../Paragraphs/Paragraphs'
import { Title } from './style'

const Features = ({ data }) => {
    return (
        <div className="Features tw-relative">
            <Title className="tw-absolute" >
                <Paragraphs className="tw-tracking-widest" uppercase family='universe' size='6xl'>
                    Especificaciones
                </Paragraphs>
            </Title>

            <div className="tw-flex">
                {
                    data.map(i => {
                        return <div className="tw-mx-5">
                            <Paragraphs uppercase family='extrabold' size='xs' className="tw-text-grey-400 tw-mb-2">{i.name}</Paragraphs>
                            <Paragraphs uppercase size='3xl' className="tw-text-black-700" family='universe' italic>{i.value}</Paragraphs>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

Features.propTypes = {
    data: PropTypes.array
}

Features.defaultProps = {
    data: []
}

export default Features
