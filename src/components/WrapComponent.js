import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import ModalComponent from './ModalComponent.js';

const WrapComponent = () => {

    //모달 상태관리
    const [modal, setModal]= useState({
        isShow:false,
        title:''
    });

    //모달 닫기 함수
    const modalCloseFn=()=>{
        setModal({...modal, isShow:false});
    }

    //모달 열기 함수
    const modalOpenFn=(tit)=>{
        setModal({...modal,isShow:true, title:tit});
    }

    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent modalOpenFn={modalOpenFn} />
            <FooterComponent/>
            <ModalComponent modal={modal} modalCloseFn={modalCloseFn} />
        </div>
    );
};

export default WrapComponent;