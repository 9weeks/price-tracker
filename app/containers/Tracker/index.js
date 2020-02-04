/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import messages from './messages';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Page C', uv: 700, pv: 2400, amt: 2400 },
];

export default function Traker() {
  return (
    <div>
      <Gnb>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        <More>more</More>
      </Gnb>
      <Lowlike>
        <Low>
          <FormattedMessage {...messages.lowestprice} />
        </Low>
        <Like>
          <FormattedMessage {...messages.like} />
        </Like>
      </Lowlike>
      <Chart>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Chart>
    </div>
  );
}

const Chart = styled.div`
  width: 610px;
  padding-top: 50px;
  margin: 0 auto;
  text-align: center;
`;

const Lowlike = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: center;
`;
const Low = styled.div`
  display: inline-block;
  height: 60px;
  width: 300px;
  background: rgb(238, 241, 246);
  border-radius: 10px;
  padding: 20px;
  color: rgb(14, 173, 81);
`;

const Like = styled.div`
  display: inline-block;
  height: 60px;
  width: 300px;
  background-color: #f8dcd3;
  border-radius: 10px;
  padding: 20px;
  color: rgb(253, 104, 2);
  margin-left: 10px;
`;

const Gnb = styled.div`
  padding: 1px;
  min-width: 120px;
  height: 60px;
  border-top: solid 5px Orange;
  background: rgb(238, 241, 246);
  color: Orange;
`;

const Title = styled.div`
  padding: 1px;
  min-width: 120px;
  text-align: right;
  float: left;
  margin-top: 13px;
`;

const More = styled.div`
  padding: 1px;
  min-width: 120px;
  text-align: right;
  float: right;
  margin-top: 13px;
  margin-right: 10px;
`;
