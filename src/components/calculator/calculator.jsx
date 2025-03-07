import React from 'react';
import './calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Data } from '../../utils/Data';
import { BarChart } from '../barchart/barchart';
import Chart from "chart.js/auto";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { OtherUsersData } from '../../utils/otherData';

export default function Calculator() {
  const [activeGraph, setActiveGraph] = useState('myGraph');
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    step1Input: '',
    step2Input: ''
  });

  // Chart data configurations
  const myChartData = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  };

  const otherUsersChartData = {
    labels: OtherUsersData.map((data) => data.year),
    datasets: [
      {
        label: "Other Users Gained",
        data: OtherUsersData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  };

  // Carousel handlers
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const goToNext = () => setActiveIndex(activeIndex + 1);
  const goToPrev = () => setActiveIndex(activeIndex - 1);

  // Form handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', formData);
  };

  return (
    <div className="containerCalc">
      <h1 className='heading'>Emissions Calculator</h1>
      
      <div className="calc">
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          interval={null}
        >
          {/* Step 1 */}
          <Carousel.Item>
            <Form>
              <Form.Group controlId="formStep1">
                <Form.Label className='q1'>Step 1: Input your first value</Form.Label>
                <Form.Control
                  type="text"
                  name="step1Input"
                  value={formData.step1Input}
                  onChange={handleChange}
                  placeholder="Enter a value"
                  className="qinput"
                />
              </Form.Group>
              <Button variant="primary" onClick={goToNext}>
                Next
              </Button>
            </Form>
          </Carousel.Item>

          {/* Step 2 */}
          <Carousel.Item>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formStep2">
                <Form.Label className='q1'>Step 2: Input your second value</Form.Label>
                <Form.Control
                  type="text"
                  name="step2Input"
                  value={formData.step2Input}
                  onChange={handleChange}
                  placeholder="Enter another value"
                  className="qinput"
                />
              </Form.Group>
              <div>
                <Button variant="secondary" onClick={goToPrev}>
                  Previous
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="graph">
        <BarChart chartData={activeGraph === 'myGraph' ? myChartData : otherUsersChartData} />
        
        <div className="graphButtons">
          <Button 
            variant="primary"
            type="button"
            onClick={() => setActiveGraph('myGraph')}
            className={activeGraph === 'myGraph' ? 'active' : ''}
          >
            My Graph
          </Button>
          <Button 
            variant="primary" 
            type="button"
            onClick={() => setActiveGraph('otherUsers')}
            className={activeGraph === 'otherUsers' ? 'active' : ''}
          >
            Other Users
          </Button>
        </div>
      </div>
    </div>
  );
}