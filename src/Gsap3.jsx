import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DebugPanel from './DebugPanel';
import { useState } from 'react';
import _ from 'lodash';
import GSDevTools from 'gsap-trial/GSDevTools';

gsap.registerPlugin(useGSAP, ScrollTrigger, GSDevTools);

const DEFAULT_ANIMATION = {
  duration: 1,
  y: 50,
};

export const Gsap3 = () => {
  const [animationConfigs, setAnimationConfigs] = useState(() => {
    const saved = localStorage.getItem('gsapDebugConfig');
    if (saved) {
      return JSON.parse(saved);
    }
    return _.range(1, 9).reduce(
      (acc, i) => ({
        ...acc,
        [`t${i}`]: { ...DEFAULT_ANIMATION },
      }),
      {}
    );
  });

  const [selectedText, setSelectedText] = useState('t1');

  useGSAP(() => {
    const ani = gsap.timeline();
    Object.entries(animationConfigs).forEach(([key, config]) => {
      ani.from(
        `#section .${key}`,
        {
          autoAlpha: 0,
          duration: config.duration,
          y: config.y,
        },
        '+=1'
      );
    });

    ScrollTrigger.create({
      animation: ani,
      trigger: '#section',
      start: 'top top',
      end: '+=6000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      markers: true,
    });

    GSDevTools.create({ animation: ani });
  });

  const handleConfigChange = (field, value) => {
    setAnimationConfigs((prev) => ({
      ...prev,
      [selectedText]: {
        ...prev[selectedText],
        [field]: Number(value),
      },
    }));
  };

  const handleSave = () => {
    localStorage.setItem('gsapDebugConfig', JSON.stringify(animationConfigs));
  };

  return (
    <main style={main}>
      <section style={parallaxItems} id='section'>
        <div style={textWrapper}>
          <p className={'parallax__item__text t1'} style={parallaxItemText}>
            {'인생은 즐겁게,'}
          </p>
          <p className={'parallax__item__text t2'} style={parallaxItemText}>
            {'배움은 끊임없이, '}
          </p>
          <p className={'parallax__item__text t3'} style={parallaxItemText}>
            {'케어는 세심하게 '}
          </p>
        </div>
        <div style={textWrapper}>
          <p className={'parallax__item__text t4'} style={parallaxItemText}>
            {'시간이 흐를수록 빛나는 '}
          </p>
          <p className={'parallax__item__text t5'} style={parallaxItemText}>
            {'당신의 가치를 '}
          </p>
        </div>
        <div style={textWrapper}>
          <p className={'parallax__item__text t6'} style={parallaxItemText}>
            {'40,000명이 선택한 '}
          </p>
          <p className={'parallax__item__text t7'} style={parallaxItemText}>
            {'하이퍼 클럽에서 '}
          </p>
          <p className={'parallax__item__text t8'} style={parallaxItemText}>
            {'경험해보세요. '}
          </p>
        </div>
      </section>
      <DebugPanel
        selectedText={selectedText}
        animationConfigs={animationConfigs}
        onConfigChange={handleConfigChange}
        onTextSelect={setSelectedText}
        onSave={handleSave}
      />
    </main>
  );
};

const main = {
  overflow: 'hidden',
};

const parallaxItems = {
  width: '100%',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '10px',
};

const textWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
};

const parallaxItemText = {
  fontSize: '2vw',
  backgroundColor: '#111',
};
