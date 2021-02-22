import React, { useEffect } from 'react'
import Logo from '../components/Logo/Logo'
import Spinner from '../components/Spinner/Spinner'
import { useHistory } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
const SplashScreen = () => {
    const history = useHistory()
    useEffect(() => {
        history.push('/tablets')
    }, [])
    return (
        <Layout className="Splash tw-bg-black-900 tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-w-full">
            <Logo mode='light' size='large' />
            <Spinner />
        </Layout>

    )
}

export default SplashScreen
