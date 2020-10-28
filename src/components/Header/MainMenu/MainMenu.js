import React, { Component } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined, UserOutlined } from '@ant-design/icons';

class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      current: 'home',
    };
  }
  
  handleClick(e) {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className="MainMenu">
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="blog" icon={<BookOutlined />}>
            BLOG
          </Menu.Item>
          <Menu.Item key="about" icon={<UserOutlined />}>
            ABOUT ME
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MainMenu;
