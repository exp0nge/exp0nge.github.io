import * as React from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col, List, Avatar, Icon } from 'antd';
const { Sider, Content, Footer } = Layout;
const { Meta } = Card;

import './App.css';
import { SKILLS } from './data/skills';
import { EXPERIENCE } from './data/experience';
import { PROJECTS } from './data/projects';

const headshotPicture = require('./img/selfie.jpg');
const IconText = ({ type, text, link }: { type: string, text: string, link: string }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} onClick={() => { window.location.href = link; }} />
    <a href={link}>{text}</a>
  </span>
);

const pagination = {
  pageSize: 10,
  current: 1,
  total: PROJECTS.length,
  // onChange: (() => {  }),
};

class App extends React.Component {
  state = {
    contentMarginLeft: 200
  };

  sidebarCollapsed = (collapsed: boolean) => {
    if (collapsed) {
      this.setState({
        contentMarginLeft: 0
      });
    } else {
      this.setState({
        contentMarginLeft: 200
      });
    }
  }

  render() {

    const { contentMarginLeft } = this.state;

    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
          onCollapse={this.sidebarCollapsed}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="0"><a href="#about">About</a></Menu.Item>
            <Menu.Item key="1"><a href="#experience">Experience</a></Menu.Item>
            <Menu.Item key="2"><a href="#projects">Projects</a></Menu.Item>
            <Menu.Item key="3">
              <a
                href="https://raw.githubusercontent.com/exp0nge/exp0nge.github.io/develop/public/MD_R_Islam_Resume.pdf"
              >
                Resume
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: contentMarginLeft }}>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Portfolio</Breadcrumb.Item>
              <Breadcrumb.Item><a id="about">About</a></Breadcrumb.Item>
            </Breadcrumb>
            <Row gutter={16}>
              <Col xs={{ span: 8 }} lg={{ span: 8, offset: 0 }}>
                <Card
                  hoverable={false}
                  style={{ width: '100%' }}
                  cover={<img alt="example" src={headshotPicture} />}
                >
                  <Meta
                    title="MD R. Islam"
                    description="Software Engineer @ IBM"
                  />
                </Card>
              </Col>
              <Col xs={{ span: 16 }} lg={{ span: 16, offset: 0 }}>
                <Card title="Education" bordered={true} style={{ width: '100%' }}>
                  <List.Item>
                    <List.Item.Meta
                      // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title="B.S. in Computer Science, Magna Cum Laude"
                      description={['The City College of New York - CUNY', 
                      <br key="eduBr" />, 
                      'May 2017']}
                    />
                  </List.Item>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }}>
                <Card title="Technical Skills" bordered={true} style={{ width: '100%' }}>
                  <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
                    itemLayout="horizontal"
                    dataSource={SKILLS}
                    renderItem={(item: { [index: string]: string }) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={item.img} />}
                          title={item.name}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </Content>

          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Portfolio</Breadcrumb.Item>
              <Breadcrumb.Item><a id="experience">Experience</a></Breadcrumb.Item>
            </Breadcrumb>
            {
              EXPERIENCE.map((item, i) =>
                <div key={i}>
                  <Row>
                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                      <Card
                        title={item.position +
                          ' @ ' +
                          item.company +
                          ' / ' +
                          item.location}
                        bordered={false}
                        style={{ width: '100%' }}
                        extra={item.startDate + ' - ' + item.endDate}
                      >
                        {item.description.map((itemDescription, descId) =>
                          <p key={descId}>- {itemDescription}</p>
                        )}
                      </Card>
                    </Col>
                  </Row>
                  <div style={{ marginBottom: 16 }} />
                </div>
              )
            }

          </Content>

          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Portfolio</Breadcrumb.Item>
              <Breadcrumb.Item><a id="projects">Projects</a></Breadcrumb.Item>
            </Breadcrumb>

            <Row gutter={16}>
              <Col xs={{ span: 24, offset: 0 }} lg={{ span: 16, offset: 4 }}>
                <Card title="Projects" bordered={true} style={{ width: '100%' }}>
                  <List
                    itemLayout="vertical"
                    size="large"
                    pagination={pagination}
                    dataSource={PROJECTS}
                    renderItem={(item: { [index: string]: string }) => (
                      <List.Item
                        key={item.title}
                        actions={[<IconText type="arrow-right" text="Visit" key={item.title} link={item.link} />]}
                        extra={<img
                          width={150}
                          height={150}
                          alt="logo"
                          src={item.href}
                        />}
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.avatar} />}
                          title={<a href={item.href}>{item.title}</a>}
                          description={item.description}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            &copy; MD R Islam 2018 | Based off of Ant Design
      </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
