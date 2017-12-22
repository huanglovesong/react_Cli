/**
 * Created by zeng on 2016/5/9.
 */
import Entry from './Entry';
import { AppContainer } from 'react-hot-loader';

const React = require('react');
const ReactDOM = require('react-dom');

const render = (Component) => {
  // Perf.start();
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
    ,
    document.getElementById('content')
  );
  // Perf.stop();
  // const measurements = Perf.getLastMeasurements();
  // Perf.printInclusive(measurements);
  // Perf.printExclusive(measurements);
  // Perf.printWasted(measurements);
  // Perf.printOperations(measurements);
};

render(Entry);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NewApp = Entry;
    render(NewApp);
  });
}
