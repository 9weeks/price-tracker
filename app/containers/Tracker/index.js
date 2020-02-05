/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import { makeSelectorPID } from './selectors';

import reducer from './reducer';
import saga from './saga';

import messages from './messages';
import { loadRepos } from '../App/actions';

const key = 'traker';

export function Tracker({ repos, pid, onClickPrice }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (pid && pid.trim().length > 0) onClickPrice('cj-bibigo-dumpling');
  }, []);
  return (
    <div>
      <Example onClick={() => onClickPrice('cj-bibigo-dumpling')}>
        cj-bibigo-dumpling
      </Example>
      <Example>cj bingo2</Example>
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
          data={repos}
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

Tracker.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onClickPrice: PropTypes.func,
  pid: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  pid: makeSelectorPID(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onClickPrice: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
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
)(Tracker);

const Example = styled.div`
  padding: 10px;
  display: inline-block;
  text-align: left;
  cursor: pointer;
  color: silver;
`;

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
