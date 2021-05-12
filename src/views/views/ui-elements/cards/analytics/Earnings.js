import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const Earnings = ({ success }) => {
  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ['App', 'Service', 'Product'],
    stroke: { width: 0 },
    colors: ['#28c76f66', '#28c76f33', success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)} %`
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'App',
              formatter(w) {
                return '53%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }
    ]
  }

  return (
    <Card className='earnings-card'>
      <CardBody>
        <Row>
          <Col xs='6'>
            <CardTitle className='mb-1'>Ganhos</CardTitle>
            <div className='font-small-2'>Este Mês</div>
            <h5 className='mb-1'>$4055.56</h5>
            <CardText className='text-muted font-small-2'>
              <span className='font-weight-bolder'>68.2%</span>
              <span> mais ganhos que no mês passado.</span>
            </CardText>
          </Col>
          <Col xs='6'>
            <Chart options={options} series={[53, 16, 31]} type='donut' height={120} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Earnings