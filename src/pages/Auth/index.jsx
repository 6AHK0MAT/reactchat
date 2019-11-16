import React from 'react';
import {Input} from "antd";
import {Block, Button} from "../../components";
import './Auth.scss';

const Auth = () => (
    <section className='auth'>
        <div className="auth__content">
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>

            </div>
            <Block>
                <Input placeholder={213}/>
                <Button type='primary' size='large'>Это кнопка</Button>
            </Block>

        </div>

    </section>
);

export default Auth;
