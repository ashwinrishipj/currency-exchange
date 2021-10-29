
import "./dashboard.css";
import SideBar from "./Navbar/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import DashBoardHeader from "./Navbar/DashBoardHeader";
import DashBoardNavigation from "./Navbar/DashBoardNavigation";

function Dashboard() {
    return (
        <div>
            <div className="dashboard bg-dark min-vh-100">
                <Container fluid="true">
                    <DashBoardHeader />
                    <Row style={{ marginLeft: "0", marginRight: "0" }}>
                        <Col lg={2} className="mt-4">
                            <SideBar />
                        </Col>
                        <Col lg={10} className="mt-4 text-white" style={{ paddingLeft: "0", paddingRight: "0", height: "200%" }}>
                            <DashBoardNavigation />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Dashboard;