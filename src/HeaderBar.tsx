import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import './styles/header.css';
const { Header } = Layout;

const headerBar = () => (
    <Header>
    <Menu
        className="top-menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
    >
        <Menu.Item key="home" className="pull-right">
            <Icon type="home" />
            Anicha
        </Menu.Item>
        <Menu.Item key="mal" className="pull-right">
            <Icon type="logout" />
            <a className="to-mal" href="https://myanimelist.net/forum/?topicid=1696289" target="_blank">To MyAnimeList</a>
        </Menu.Item>
        <span className="subtitle">mal anime challenge helper</span>
    </Menu>
</Header>
);

export default headerBar;