import React, { useEffect } from "react";
import { Button } from 'antd';
import request from '../../utils/request';
import { getGisView } from '../../service';
import './index.less';

const Home = () => {
  useEffect(() => {
    getGisInfo(); // 获取车辆Gis定位
  });

  const getGisInfo = async () => {
    const res = await request(getGisView);
    console.log('res', res);
  }

  return (
    <div className="container">
      <Button type="primary">homePage</Button>
    </div>
  );
}

export default Home;