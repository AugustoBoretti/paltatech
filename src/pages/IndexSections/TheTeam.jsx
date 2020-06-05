/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardBody,
  Table,
} from "reactstrap";

class TheTeam extends React.Component {
  render() {
    return (
      <>
        <div className="section section-basic">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h1 className="title">
                  The <br />
                  <strong className="text-danger">TEAM</strong>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                    <h4 className="title">Alan Kurc</h4>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Make
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          An
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/mike.jpeg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">UX Designer</h3>
                    <Table className="tablesorter" responsive>
                      <tbody>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-atom" /> Skills
                          </td>
                          <td className="text-right">UI | UX | Creativity</td>
                        </tr>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-user-run" /> Hobbies
                          </td>
                          <td className="text-right">Photography</td>
                        </tr>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-chart-bar-32" /> Level
                          </td>
                          <td className="text-right">• • •</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                    <h4 className="title">Augusto Boretti</h4>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Make
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          An
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/christian.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Team Lead</h3>
                    <Table className="tablesorter" responsive>
                      <tbody>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-atom" /> Skills
                          </td>
                          <td className="text-right">Leadership</td>
                        </tr>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-user-run" /> Hobbies
                          </td>
                          <td className="text-right">Skiing, Chess</td>
                        </tr>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-chart-bar-32" /> Level
                          </td>
                          <td className="text-right">• • • • •</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <div className="card-image">
                    <h4 className="title">Alejandro Tidele</h4>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        className="btn-icon"
                        color="link"
                        data-toggle="dropdown"
                        type="button"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                      </DropdownToggle>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Make
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          An
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQF5tBVxbUxQ4g/profile-displayphoto-shrink_400_400/0?e=1596672000&v=beta&t=d_Es6rJPeegbjDX6pFOfQk73W_6S23_2NkiQrBymU64"
                      />
                    </a>
                  </div>
                  <CardBody>
                    <hr className="line-primary" />
                    <h3 className="job-title">Software Developer</h3>
                    <Table className="tablesorter" responsive>
                      <tbody>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-atom" /> Skills
                          </td>
                          <td className="text-right">
                            Clean coder | Customer focus
                          </td>
                        </tr>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-user-run" /> Hobbies
                          </td>
                          <td className="text-right">Reading, Writing</td>
                        </tr>
                        <tr>
                          <td className="text-left">
                            <i className="tim-icons icon-chart-bar-32" /> Level
                          </td>
                          <td className="text-right">• • • •</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default TheTeam;
