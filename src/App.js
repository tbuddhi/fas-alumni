import './App.scss';

import Layout from './components/Layout';
import Landing from './components/Landing';

function App() {
  return (
    <div>
      <Layout>
        <div className="content-wrapper">
          <Landing />
        </div>
      </Layout>
    </div>
  );
}

export default App;
