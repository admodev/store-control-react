import "./App.css";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import CanvasJSReact from "./lib/canvasjs.react";

function App() {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    title: {
      text: "Sales",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "January", y: 30 },
          { label: "February", y: 10 },
          { label: "March", y: 25 },
          { label: "April", y: 20 },
          { label: "May", y: 38 },
        ],
      },
    ],
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Store Control</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#features">Employees</Nav.Link>
          <Nav.Link href="#pricing">Logout</Nav.Link>
          <Navbar.Text className="ml-5">
            Signed in as: <a href="#profile">Employee One</a>
          </Navbar.Text>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>

      <div className="Chart">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
}

export default App;
