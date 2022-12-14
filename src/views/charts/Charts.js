import React, {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
import Preventive from "../insights/preventiveFrame"
import {HashRouter as Router, Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'

const Charts = () => {
  const [data, setdata]=React.useState([]);
  const [p_data, setp_data]=React.useState([]);
  const [singlepatientid, setsinglepatientid] = useState('');
  const location = useLocation();
  var stat, flags;
  
  var url_p="https://datastudio.google.com/embed/reporting/c4611298-10ab-4b55-9625-33805ce06003/page/tEnnC?params=%7B%22df2%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580" + singlepatientid + "%22%7D"
  var url_c="https://datastudio.google.com/embed/reporting/16901bed-1e96-44c2-82c4-b92d4797b0ac/page/tEnnC?params=%7B%22df4%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580"+singlepatientid+"%22%7D"

  useEffect(() => {
		flags = location.search.split('^')[1];
		console.log(flags)
		let singlepatientid = location.search.split('=')[1];
		console.log('-----------------singleorderid--------------------------------------')
		console.log(singlepatientid)
		console.log('-------------------------------------------------------')
		setsinglepatientid(singlepatientid)

  },[])

  // const fetchQSDashboard = () => {
  //   var requestOptions = {
  //     method: 'GET'
  //   };

  //   fetch("https://cvzg49w5bc.execute-api.us-east-1.amazonaws.com/test-QS/qsresource-sample?mode=getUrl", requestOptions)
  //   .then((resp) => resp.json())
  //   .then((response) => {
  //     setdata(response.EmbedUrl)
  //     console.log(data)
  //   })
  //   .catch(error => console.log('error', error));
  // }

//   const fetchQSPrevData = () => {
//     var requestOptions = {
//       method: 'GET'
//     };

//     fetch("https://ev5we6ai81.execute-api.us-east-1.amazonaws.com/test-QS/anonymous-embed-sample2?mode=getUrl", requestOptions)
//     .then((resp) => resp.json())
//     .then((response) => {
//       setp_data(response.EmbedUrl)
//       console.log(p_data)
//     })
//     .catch(error => console.log('error', error));
//   }

//   useEffect(() => { 
//     fetchQSDashboard();
//     fetchQSPrevData();
//  },[])

//  console.log(data)
//  console.log(p_data)

  return (
    <Router>
    <CCardGroup columns className="cols-2">
      {/* <CCard>
        <CCardHeader>
          Bar Chart
          <DocsLink href="http://www.chartjs.org"/>
        </CCardHeader>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
              }
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard> */}
    {/* <a href="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/48be7a89-9b91-4b84-9154-545472a06a73/views/0e87f279-51a8-4e8d-83b6-42bcfe2d0d05" target="_blank">  */}
      <CCard>
        <a href={data} target="_blank">
          <CCardHeader style={{backgroundColor:'#0A2533', color:'white'}}>
          <h3 style={{ color:'white'}}>Continuous Care</h3>
          </CCardHeader>
        </a>
        <CCardBody style={{backgroundColor:'#0A2533', color:'white'}}>
        <Iframe width="420" height="251" src={url_c}/>
          {/* <CChartLine
            datasets={[
              {
                label: 'Oxygen',
                backgroundColor: 'rgb(252, 133, 13)',
                color: 'rgb(0,0,0)',
                data: [80, 89, 90, 88, 106, 87, 83]
              },
              {
                label: 'Temperature',
                backgroundColor: 'rgb(10, 135, 175)',
                color: 'white',
                data: [89, 80, 100, 105, 90, 96, 85]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
          /> */}
          
        </CCardBody>
      </CCard>

      <CCard>
        {/* <a href="/insights/preventivef" > */}
          <Link to={"/insights/preventive"}>
            <CCardHeader style={{backgroundColor:'#0A2533', color:'white'}}>
              <h3 style={{ color:'white'}}>Preventive Care</h3> 
            </CCardHeader>
          </Link> 
        {/* </a> */}
        <CCardBody style={{backgroundColor:'#0A2533', color:'white'}}>
        <Iframe width="420" height="251" src={url_p} frameborder="0" style="border:0" allowfullscreen/>
          {/* <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                ],
                data: [150, 200, 80]
              }
            ]}
            labels={['Low Risk', 'Medium Risk', 'High Risk']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          /> */}
        </CCardBody>
      </CCard>

      {/* <CCard>
        <CCardHeader>
          Doughnut Chart
        </CCardHeader>
        <CCardBody>
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10]
              }
            ]}
            labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard> */}

      {/* <CCard>
        <CCardHeader>
          Pie Chart
        </CCardHeader>
        <CCardBody>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10]
              }
            ]}
            labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard> */}

      {/* <CCard>
        <CCardHeader>
          Polar Area Chart
        </CCardHeader>
        <CCardBody>
          <CChartPolarArea
            datasets={[
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'rgba(179,181,198,1)',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'rgba(255,99,132,1)',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]}
            options={{
              aspectRatio: 1.5,
              tooltips: {
                enabled: true
              }
            }}
            labels={[
              'Eating', 'Drinking', 'Sleeping', 'Designing',
              'Coding', 'Cycling', 'Running'
            ]}
          />
        </CCardBody>
      </CCard> */}

      {/* <CCard>
         <CCardHeader>
          Radar Chart
        </CCardHeader>
        <CCardBody>
          <CChartRadar
            datasets={[
              {
                label: '2019',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                tooltipLabelColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: '2020',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                tooltipLabelColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]}
            options={{
              aspectRatio: 1.5,
              tooltips: {
                enabled: true
              }
            }}
            labels={[
              'Eating', 'Drinking', 'Sleeping', 'Designing',
              'Coding', 'Cycling', 'Running'
            ]}
          />
        </CCardBody> 
        <Iframe width="400" height="251" src="https://datastudio.google.com/embed/reporting/c4611298-10ab-4b55-9625-33805ce06003/page/tEnnC" frameborder="0" style="border:0" allowfullscreen/>
      </CCard> */}
    </CCardGroup>
    </Router>
  )
}

export default Charts
