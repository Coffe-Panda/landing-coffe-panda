import './navbar.css';
import { Menu, Button, Row, Col } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';


export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Row className="w-100">
        <Col xs={24} sm={12} md={6} lg={6}>
          <div className="navbar-brand">Coffee Panda</div>
        </Col>
        <Col xs={0} sm={12} md={18} lg={18} className="d-none d-sm-block">
         
        </Col>
        <Col xs={24} sm={0} className="d-block d-sm-none">
          <Button type="primary" onClick={toggleCollapsed} icon={<MenuOutlined />} />
          {!collapsed && (
            <Menu mode="horizontal" >
              <Menu.Item key="coffee">Café</Menu.Item>
              <Menu.Item key="tech-service">Servicio Técnico</Menu.Item>
              <Menu.Item key="barista-courses">Cursos de Barismo</Menu.Item>
            </Menu>
          )}
        </Col>
      </Row>
    </nav>
  );
};
