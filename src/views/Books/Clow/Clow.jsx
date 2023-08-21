// ============ React, React Router ============
import React from 'react'
import { Link } from 'react-router-dom'

// ============ Layout and Style ============
import { Row, Col, Button } from 'antd'
import classNames from 'classnames/bind'

// ============ Assets ============
import styles from './Clow.module.scss'

const cx = classNames.bind(styles)

const Clow = () => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <Link to='/'>
                        <Button type='primary'>
                            Go back
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    Clow
                </Col>
            </Row>
        </>
    )
}

export default Clow