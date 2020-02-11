/**
 *
 * PriceTracker
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import queryString from 'query-string';

import { makeSelectorPID, makeSelectorOpt, makeSelectRepos } from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Load } from './actions';

export function PriceTracker({ repos, onLoad, location }) {
  useInjectReducer({ key: 'PriceTracker', reducer });
  useInjectSaga({ key: 'PriceTracker', saga });
  const { pid, opt } = queryString.parse(location.search);

  useEffect(() => onLoad(pid, opt), []);
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
          data={repos.prices}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Chart>
    </div>
  );
}

PriceTracker.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onLoad: PropTypes.func,
  pid: PropTypes.string,
  opt: PropTypes.string,
  match: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  pid: makeSelectorPID(),
  opt: makeSelectorOpt(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: (pid, opt) => {
      dispatch(Load(pid, opt));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PriceTracker);

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
  font-size: 9pt;
  padding: 1px;
  min-width: 120px;
  text-align: right;
  float: right;
  margin-top: 17px;
  margin-right: 10px;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;
