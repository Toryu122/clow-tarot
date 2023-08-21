// ============ React, React Router ============
import React from 'react'
import { Link } from 'react-router-dom'

// ============ Layout and Style ============
import { Row, Col, Button } from 'antd'
import classNames from 'classnames/bind'

// ============ Assets ============
import styles from './Home.module.scss'
import ClowBook from '~/assets/images/ClowCard/Clow_Card_Book - Front.png'
import SakuraBook from '~/assets/images/SakuraCard/Sakura_Card_Book - Front.png'

const cx = classNames.bind(styles)

const Home = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    &nbsp;
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={6}>
                    <Link to="/clow">
                        <img className={cx('book')} src={ClowBook} alt="" />
                    </Link>
                </Col>
                <Col span={6}>
                    <Link to="/sakura">
                        <img className={cx('book')} src={SakuraBook} alt="" />
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default Home