import style from "./Offer.module.sass"
import Image from "next/image"
import pizza from "../../../public/pizza-1.avif"
import customer from "../../../public/customer.png"
import { Button, Col, Container, Row } from "react-bootstrap"
import { BsFillStarFill } from "react-icons/bs"


const Offer = () => {
    return (
        <>
            <Container className="offer mt-8 mb-8">
                <Row>
                    <Col className="col-7 d-flex align-items-left justify-content-left">
                        <div className={style.boxflex}>
                            <Image
                                src={pizza}
                                alt=""
                                className="img-fluid"

                            />
                            <span className={style.boxcaption}>
                                <span className="badge rounded-4 bg-light d-inline-flex text-left"><Image
                                    src={customer}
                                    alt=""
                                    className="rounded-circle"
                                />
                                    <span className={style.rewiever_message}>
                                        <div>
                                            Sara Taylor
                                        </div>
                                        <i>
                                            Healthy and delicious pizza
                                        </i>
                                        <b className="stars">
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                        </b>
                                    </span>
                                </span>

                            </span>
                        </div>
                    </Col>
                    <Col className={'p-0 col-5 ' + style.special_offer + ' d-flex align-items-center'}>
                        <Col>
                            <div className={style.offer_block}>
                                <div className={style.discount}>-50%</div>
                                <div className={style.name}>Pizza Special Offer</div>
                            </div>

                            <div className={style.desc + 'p2'}>Best cooks and best delivery guys all at your service. Hot food will reach you in 60 minutes.</div>
                            <Button className="btn-danger rounded-3">See All Menu <span> &#62;</span></Button>

                        </Col>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Offer