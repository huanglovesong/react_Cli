/**
 * Created by panca on 16/8/15.
 */

import React from 'react';
import ReactCSStransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';
import Particles from 'react-particles-js';
import LazyLoad from 'react-lazyload';
import './index.less';

class Index extends React.Component {
  componentWillMount() {
  }
  download = () => {
    window.location.href = 'http://oa.cdn.hengkx.com/vd/win/%E5%89%8D%E7%AB%AF%E5%8F%AF%E8%A7%86%E5%8C%96%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0%20Setup%201.0.0-rc.1.exe';
  }
  toGithub = () => {
    // window.location.href = 'https://github.com/FuluUE/vd';
    browserHistory.push('/Login');
  }
  render() {
    const src = "../img/logo.png";

    const params = {
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.3,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 50,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: '#b8a3e6',
          opacity: 0.1,
          width: 2
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      }
    };
    return (
      <div className="main">
        <Particles
          style={{
            zIndex: '1',
            position: 'absolute',
            top: '0px',
            left: '0px'
          }}
          height="498px"
          params={params}
        />
        <div className="top-back">
          <div className="content">
            <div className="logo">
              <div className="left"></div>
              <div className="right">
                <span className="github" onClick={this.toGithub}>Github</span>
                <span className="doc">帮助文档</span>
              </div>
            </div>
            <div className="center">
              <div className="left"></div>
              <div className="right">
                <div className="title">
                  前端可视化开发平台
                </div>
                <p>Front-end visual development platform</p>
                <div className="title-bottom">
                  <p>致力于打造简单、高效的前端开发平台</p>
                </div>
                <div className="download" onClick={this.download}>
                  <span></span>立即下载
                </div>
                <div className="version"><span>更新日期：2017-07-17</span></div>
                <div className="version"><span>版本号：v1.0.0-rc.1</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-even">
          <div className="addcenter">
            <div className="left">
              <p>React 技术栈</p>
              <span>适用 Webpack 2, Babel 6, React 15, React Router 4, Redux 3, Redux Saga, Axios, Ant Design 2 技术栈项目</span>
            </div>
            <div className="right line-zero">
            </div>
          </div>
        </div>
        <div className="line-odd">
          <div className="addcenter">
            <div className="left line-one">
            </div>
            <div className="right">
              <p>自动更新</p>
              <span>总能使用最新的、全部的功能，且是免费的。</span>
            </div>
          </div>
        </div>
        <div className="line-even">
          <div className="addcenter">
            <div className="left">
              <p>双重开发模式</p>
              <span>可视化开发模式和命令行开发模式（高级），总有一款适合你。</span>
            </div>
            <div className="right line-two">
            </div>
          </div>
        </div>
        <div className="line-odd">
          <div className="addcenter">
            <div className="left line-three">
            </div>
            <div className="right">
              <p>规范化开发</p>
              <span>约定优化配置，让你享受无感知的编码规范化。</span>
            </div>
          </div>
        </div>
        <div className="line-even">
          <div className="addcenter">
            <div className="left">
              <p>组件化管理</p>
              <span>高可复用性的代码管理方式，创建、导入、搜索组件，你值得拥有。</span>
            </div>
            <div className="right line-four">
            </div>
          </div>
        </div>
        <div className="line-odd">
          <div className="addcenter">
            <div className="left line-five">
            </div>
            <div className="right">
              <p>项目样板</p>
              <span>自定义配置，规范而不失灵活。</span>
            </div>
          </div>
        </div>
        <div className="line-even">
          <div className="addcenter">
            <div className="left">
              <p> 实时调试</p>
              <span>还在不停的切换屏幕，按 F5？试试热加载吧。</span>
            </div>
            <div className="right line-six">
            </div>
          </div>
        </div>
        <div className="line-odd">
          <div className="addcenter">
            <div className="left line-seven">
            </div>
            <div className="right">
              <p>一键部署</p>
              <span>远程登录？FTP？不，一个按钮轻松搞定。</span>
            </div>
          </div>
        </div>
        <div className="line-even">
          <div className="addcenter">
            <div className="left">
              <p> 代码片段</p>
              <span>还在为代码写的不够好发愁？来看看最佳实践。</span>
            </div>
            <div className="right line-eight">
            </div>
          </div>
        </div>
        <div className="line-odd">
          <div className="addcenter">
            <div className="left line-nine">
            </div>
            <div className="right">
              <p>远程代理模式</p>
              <span>拦截请求，随机响应，脱离后端开发。</span>
            </div>
          </div>
        </div>
        {/*
                    < div className="line-odd">
                    <div className="addcenter">
                    <div className="left line-one">
                    </div>
                    <div className="right">
                        <p>新技术引领</p>
                        <span>集成react+redux nodejs webpack等新技术开发的平台，解决开发者开始对技术不太熟悉不好上手的问题，可以更好的把关注点放在业务上。</span>
                    </div>
                </div>
            </div>
            <div className="line-even">
                <div className="addcenter">
                    <div className="left">
                        <p>自定义协作平台</p>
                        <span>统一配置入口，相同的代码格式，能高效的解决开发效率低和质量不能保证的问题，代码可复用性和后期可维护性强。直接导入已有组件或创建新组建，平台内可以进行搜索组件、查看组件详情、编辑组建信息、删除组件等功能、操作简单易上手。</span>
                    </div>
                    <div className="right line-two">
                    </div>
                </div>
            </div>
            <div className="line-odd">
                <div className="addcenter">
                    <div className="left line-three">
                    </div>
                    <div className="right">
                        <p>解决技术普及难度</p>
                        <span>新思想、技术框架普及难度大、相关人员接受或理解程度因人而异、缺少相对简单的方案。</span>
                    </div>
                </div>
            </div>
            <div className="line-even">
                <div className="addcenter">
                    <div className="left">
                        <p>精力投放到业务上</p>
                        <span>前端可视化解决用户因为搭建麻烦、复杂、代码不规范等造成的工作效率低、性能差、代码不规范的问题，可以让用户将精力更多的放在业务之上。</span>
                    </div>
                    <div className="right line-four">
                    </div>
                </div>
            </div>
            <div className="line-odd">
                <div className="addcenter">
                    <div className="left line-five">
                    </div>
                    <div className="right">
                        <p>统一的规范</p>
                        <span>解决不同人对技术不同的适应能力，在这个平台可以更多的通过平台进行技术框架的搭建，能更多的将精力放到项目业务中，大大的增加了开发效率，也有了统一的代码规范易于进行维护。</span>
                    </div>
                </div>
            </div>
                   */}
        <div className="bottom">
          <div className="bottomContent">简单、好用的前端开发平台</div>
          <div className="bottomVersion">v1.0.0-rc.1</div>
          <div className="download" onClick={this.download}>立即下载</div>
        </div>
        <div className="copyRight">
          © 2017 福禄网络 UED 保留所有权利
                </div>
      </div>
    );
  }
}

export default Index;
