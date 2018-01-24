import * as React from 'react';
import { Layout, Menu, Breadcrumb, Card, Row, Col, List, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

import './App.css';
import { SKILLS } from './data/skills';
import { EXPERIENCE } from './data/experience';

const headshotPicture = require('./img/selfie.jpg');

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', zIndex: 10000 }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="0"><a href="#about">About</a></Menu.Item>
            <Menu.Item key="1"><a href="#experience">Experience</a></Menu.Item>
            <Menu.Item key="2"><a href="#projects">Projects</a></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Portfolio</Breadcrumb.Item>
            <Breadcrumb.Item><a id="about">About</a></Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={16}>
            <Col xs={{ span: 8, offset: 8 }} lg={{ span: 4, offset: 0 }}>
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
            <Col xs={{ span: 24, offset: 0 }} lg={{ span: 20, offset: 0 }}>
              <Row gutter={16}>
                <Col xs={{ span: 12, offset: 6 }} lg={{ span: 8, offset: 0 }}>
                  <Card title="Education" bordered={true} style={{ width: '100%' }}>
                    <List.Item>
                      <List.Item.Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="B.S. in Computer Science, Magna Cum Laude (May 2017)"
                        description="The City College of New York - CUNY"
                      />
                    </List.Item>
                  </Card>
                </Col>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 16, offset: 0 }}>
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
                  <Col span={12} offset={6}>
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

        </Content>

        <Footer style={{ textAlign: 'center' }}>
          &copy; MD R Islam 2018 | Based off of Ant Design
    </Footer>
      </Layout >
    );
  }
}

export default App;
