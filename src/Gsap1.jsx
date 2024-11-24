import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);
import '../styles/gsap1.css';

export const Gsap1 = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  useGSAP(() => {
    // 기본 애니메이션
    gsap.to(box1.current, {
      x: 500,
      duration: 1,
      borderRadius: '50%',
      rotation: 360,
    });

    // trigger 기본
    gsap.to(box2.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: '50%',
      scrollTrigger: {
        trigger: box2.current,
      },
    });

    // toggle actions
    gsap.to(box3.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: '50%',
      scrollTrigger: {
        trigger: box3.current,
        //  애니메이션 시작, 끝, 애니메이션이 시작하고 화면에 보이지 않을 때, 애니메이션이 끝나고 화면에 보이지 않을 때 4가지로 설정
        toggleActions: 'play none reverse none',
      },
    });

    // start, end
    gsap.to(box4.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: '50%',
      scrollTrigger: {
        trigger: box4.current,
        start: 'top 50%',
        end: 'bottom 20%',
        toggleActions: 'play none reverse none',
        // markers: true,
      },
    });

    // scrub 이 속성은 스크롤을 내리면 같이 움직이게 설정
    gsap.to(box5.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: '50%',
      scrollTrigger: {
        trigger: box5.current,
        start: 'top 50%',
        end: 'bottom 20%',
        scrub: 1, // true, 0.5, 2...
        // markers: true,
      },
    });

    // pinning (고정)
    gsap.to(box6.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: '50%',
      scrollTrigger: {
        trigger: box6.current,
        start: 'top 50%',
        end: 'top 100px',
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    // toggleClass (클래스 추가)
    gsap.to(box7.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: '50%',
      scrollTrigger: {
        trigger: box7.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        toggleClass: 'active',
        markers: false,
        id: 'box7',
      },
    });

    // callback
    gsap.to(box8.current, {
      duration: 2,
      x: 500,
      rotation: 360,
      borderRadius: '50%',
      scrollTrigger: {
        trigger: box8.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        toggleClass: 'active',
        markers: false,
        id: 'box8',
        onUpdate: (self) => {
          console.log(self.progress);
        },
      },
    });
  });

  return (
    <main id='parallax__cont'>
      <section id='section1' className='parallax__item'>
        <span className='parallax__item__num'>01</span>
        <div className='parallax__item__img' ref={box1}></div>
      </section>

      <section id='section2' className='parallax__item'>
        <span className='parallax__item__num'>02</span>
        <div className='parallax__item__img' ref={box2}></div>
      </section>

      <section id='section3' className='parallax__item'>
        <span className='parallax__item__num'>03</span>
        <div className='parallax__item__img' ref={box3}></div>
      </section>

      <section id='section4' className='parallax__item'>
        <span className='parallax__item__num'>04</span>
        <div className='parallax__item__img' ref={box4}></div>
      </section>

      <section id='section5' className='parallax__item'>
        <span className='parallax__item__num'>05</span>
        <div className='parallax__item__img' ref={box5}></div>
      </section>

      <section id='section6' className='parallax__item'>
        <span className='parallax__item__num'>06</span>
        <div className='parallax__item__img' ref={box6}></div>
      </section>

      <section id='section7' className='parallax__item'>
        <span className='parallax__item__num'>07</span>
        <div className='parallax__item__img' ref={box7}></div>
      </section>

      <section id='section8' className='parallax__item'>
        <span className='parallax__item__num'>08</span>
        <div className='parallax__item__img' ref={box8}></div>
      </section>

      <section id='section9' className='parallax__item'>
        <span className='parallax__item__num'>09</span>
        <div className='parallax__item__img' ref={box9}></div>
      </section>
    </main>
  );
};
