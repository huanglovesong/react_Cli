/**
 * Created by panca on 16/8/15.
 */

import React from 'react';

class login extends React.Component {
  componentWillMount() {
  }
  download = () => {
    window.location.href = 'http://oa.cdn.hengkx.com/vd/win/%E5%89%8D%E7%AB%AF%E5%8F%AF%E8%A7%86%E5%8C%96%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0%20Setup%201.0.0-rc.1.exe';
  }
  toGithub = () => {
    window.location.href = 'https://github.com/FuluUE/vd';
  }
  render() {
    return (
      <div className="main">
        登录11123
      </div>
    );
  }
}

export default login;
