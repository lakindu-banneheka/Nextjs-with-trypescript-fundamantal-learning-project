import React, { FC, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import { useDispatch } from 'react-redux';
import { cat, getCats } from '../../features/catsSlice';
import { useAppSelector } from '../../store/store';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row, Space } from 'antd';
import DefaultLayout from '../../Layout/DefaultLayout';
import { header } from '../../hooks/header';

interface ICatsProps {
    
};

const Cats: FC<ICatsProps> = () => {
    const catsPageHead = { ...header, title: 'Cats'}
    const dispatch = useDispatch();
    const catsSelector = useAppSelector(state => state.cats.cats)
    const [catList,setcatList] = useState<cat[]>(catsSelector); 
    
    useEffect(() => {
        dispatch(getCats());
    },[dispatch]);

    useEffect(()=>{
        setcatList(catsSelector)
    },[catsSelector]);

    return ( 
        <>
            <DefaultLayout nav header={catsPageHead} >
                <Row justify='center' >
                    <Col span={23} >
                        <Content style={{margin:'30px 0px'}} > 
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='center' >
                                        {catList.map((cat) => {
                                            return <div key={cat.id} >
                                                <Col className="gutter-row" span={6} >
                                                    <Card
                                                        id={cat.id}
                                                        name={cat.name}
                                                        phone={cat.phone} 
                                                        email={cat.email}
                                                        image={cat.image}
                                                    />
                                                </Col>
                                            </div>
                                        })}
                                </Row>
                        </Content>
                    </Col>
                </Row>
            </DefaultLayout>
        </>
    );
};

export default Cats;