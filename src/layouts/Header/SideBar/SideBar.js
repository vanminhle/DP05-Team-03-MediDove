import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
  const Home = <NavLink to='/'>Home</NavLink>;
  const Department = <NavLink to='/department'>Department </NavLink>;
  const Doctors = <NavLink to='/doctor'>Doctors </NavLink>;
  return (
    <>
      <div>
        <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Collapsible
              trigger={Home}
              triggerTagName='div'
              triggerOpenedClassName='icon_close'
              triggerClassName='iconAdd'
              open={false}
            >
              <ul className='sidebar_sub_menu text-white mt-3'>
                <li>
                  <NavLink to='/'>Home style 1</NavLink>
                </li>
                <li>
                  <NavLink to=''>Home style 2</NavLink>
                </li>
                <li>
                  <NavLink to=''>Home style 3</NavLink>
                </li>
                <li>
                  <NavLink to=''>Home style 4</NavLink>
                </li>
                <li>
                  <NavLink to=''>Home style 5</NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Department}
              triggerTagName='div'
              triggerOpenedClassName='icon_close'
              triggerClassName='iconAdd'
              open={false}
            >
              <ul className='sidebar_sub_menu text-white mt-3'>
                <li>
                  <NavLink to='/department'>Services 01</NavLink>
                </li>
                <li>
                  <NavLink to=''>Services 02</NavLink>
                </li>
                <li>
                  <NavLink to='/department/department_detail'>Services Details</NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Doctors}
              triggerTagName='div'
              triggerOpenedClassName='icon_close'
              triggerClassName='iconAdd'
              open={false}
            >
              <ul className='sidebar_sub_menu text-white mt-3'>
                <li>
                  <NavLink to='/doctor'>Doctors 01</NavLink>
                </li>
                <li>
                  <NavLink to=''>Doctors 02</NavLink>
                </li>
                <li>
                  <NavLink to='/doctor/doctor_detail'>Doctors Details</NavLink>
                </li>
              </ul>
            </Collapsible>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
