import React from 'react'
import { useHistory } from 'react-router-dom'
import IcBack from '../Icons/IcBack'
import { Container } from './style'

export const BtnBack = () => {
    const history = useHistory()
    return (
        <Container onClick={() => history.goBack()} className="BtnBack tw-fixed tw-rounded-r-full tw-py-3 tw-pl-6 tw-pr-10 tw-border  ">
            <IcBack color='#ccc' size={30}/>
        </Container>
    )
}
