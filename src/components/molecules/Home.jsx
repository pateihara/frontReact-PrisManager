import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
} from "mdb-react-ui-kit";
import {
  BsAirplaneFill,
  BsPeopleFill,
  BsCartFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card cardBlue">
          <div className="card-inner">
            <h6>Total de vendas</h6>
            <BsCartFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card cardYellow">
          <div className="card-inner">
            <h6>Vendas semanais</h6>
            <BsCartFill className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card cardGreen">
          <div className="card-inner">
            <h6>Pacotes</h6>
            <BsAirplaneFill className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card cardRed">
          <div className="card-inner">
            <h6>Clientes</h6>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>
      <MDBRow>
        <MDBCol size="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>dados do cliente</MDBCardTitle>
              <div className="charts">
                <ResponsiveContainer width="200%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol size="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>dados do cliente</MDBCardTitle>
              <div className="charts">
                <ResponsiveContainer width="200%" height="100%">
                  <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </main>
  );
}

export default Home;
