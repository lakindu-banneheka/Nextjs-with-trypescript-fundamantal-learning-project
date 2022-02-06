import { CloseOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/store';
import { cat, getACat } from '../../features/catsSlice';
import { header } from '../../hooks/header';
import { imageLoader } from '../../hooks/ImageHooks';
// import { useAppSelector } from '../../../store/store';
import DefaultLayout from '../../Layout/DefaultLayout';

interface ICatPageProps {
    
};

const CatPage: FC<ICatPageProps> = () => {
    const dispatch = useDispatch();
    const catSelector = useAppSelector(state => state.cats.cat)
    const [cat,setcat] = useState<cat>(catSelector); 
    const router = useRouter();
    const { id } = router.query;

    useLayoutEffect(() => {
        if(id && typeof id !== 'object'){
            dispatch(getACat(id));
        }
    },[dispatch,id]);

    useLayoutEffect(()=>{
        setcat(catSelector)
    },[catSelector]);

    const onClickCloseBtn = () => {
        router.push('/cats')
    }
    const catPageHeader = {...header, title: (cat.name !== "" ? cat.name : 'error')}
    return ( <>
        <DefaultLayout nav header={catPageHeader} >
            <div style={{margin: '20px 20px 30px 50px'}} >
                <div style={{display:'flex', justifyContent:'end', margin:'0px 0px 20px 0px'}} >
                    <Button onClick={onClickCloseBtn} type='default' shape="circle" icon={<CloseOutlined />} size={'middle'} />
                </div>
                {cat.name !== "" 
                    ?<Row justify='center' gutter={3} >
                        <Col span={8}>
                            { cat.image.url !== '' ? <Image src={cat.image.url} alt={cat.image.alt} loader={imageLoader} width={400} height={600} unoptimized  /> : <>{"Img can't load"}</>}
                        </Col>
                        <Col span={12} >
                            <Content>
                                <h1>{cat.name}</h1>
                                <p>{cat.description}</p>
                            </Content>
                        </Col>
                    </Row>
                    :<>error | 404</>
                }
            </div>
        </DefaultLayout>
        </>
    );
};

export default CatPage;