
// import './App_copy.css';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const App = () => (
  <div className= "container">
    <div className= "flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
      <div>7</div>
      <div>8</div>
    </div>
    <Tabs defaultActiveKey="1" onChange={onChange} className= "tabs-container">
      <TabPane tab="Tab 1" key="1" >
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </div>
);

export default App;
