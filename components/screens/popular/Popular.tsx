import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { BsFillHeartFill, BsCartPlus } from 'react-icons/bs'
import style from './Popular.module.sass'
import Image from "next/image"

import pizza from "../../../public/pizza-1.avif"


const Popular = () => {

    return (
        <>
            <Container className={style.popular_grid + " mt-8"}>
                <div className={style.popular}>
                    <span>Our menu</span>
                    <h1>our popular dishes</h1>
                    <div className={style.desc + 'p2'}>Best cooks and best delivery guys all at your service. <br /> Hot food will reach you in 60 minutes.</div>
                </div>


                <Row xs={1} md={3} className={'g-4 '}>
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col className='p-4' key={idx}>
                            <Card className='border border-0'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className={style.new + " rounded-3"}>New</div>
                                    <div className={style.like}><Button><BsFillHeartFill /></Button></div>
                                </div>
                                <Image
                                    src={pizza}
                                    alt=""
                                    className="img-fluid"

                                />
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='popular-info'>
                                        <div className={style.name}>Rice Bow</div>
                                        <div className={style.desc}>Delicios Rice</div>
                                        <div className={style.price}>$10</div>
                                    </div>
                                    <div className={style.cart + " align-items-left align-self-end"}><Button><BsCartPlus /></Button></div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col className='all-menu-button text-center'>
                        <Button className="btn-danger rounded-3">See All Menu <span> &#62;</span></Button>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Popular