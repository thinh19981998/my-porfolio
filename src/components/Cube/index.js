import React from 'react';
import styled from '@emotion/styled';
import './index.css';
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaGitAlt,
  FaNodeJs,
  FaJsSquare,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const CubeSpinner = styled(motion.div)`
  margin: 20px auto;
  animation-name: spincube;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 12s;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 100px);

  div {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background: rgba(200, 200, 200, 0.4);
    text-align: center;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px 0px lightyellow;
  }

  .face1 {
    transform: translateZ(100px);
    color: #dd0031;
  }
  .face2 {
    transform: rotateY(90deg) translateZ(100px);
    color: #f06529;
  }
  .face3 {
    transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
    color: #28a4d9;
  }
  .face4 {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
    color: #5ed4f4;
  }
  .face5 {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
    color: #efd81d;
  }
  .face6 {
    transform: rotateX(-90deg) translateZ(100px);
    color: #ec4d28;
  }
`;

const Cube = () => {
  return (
    <CubeSpinner>
      <div className='face1'>
        <FaNodeJs color='#7fc728' />
      </div>
      <div className='face2'>
        <FaHtml5 color='#F06529' />
      </div>
      <div className='face3'>
        <FaCss3 color='#28A4D9' />
      </div>
      <div className='face4'>
        <FaReact color='#5ED4F4' />
      </div>
      <div className='face5'>
        <FaJsSquare color='#EFD81D' />
      </div>
      <div className='face6'>
        <FaGitAlt color='#EC4D28' />
      </div>
    </CubeSpinner>
  );
};

export default Cube;
