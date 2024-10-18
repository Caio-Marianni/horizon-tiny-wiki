import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface ParallaxProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed: number;
}

const ParallaxImage: React.FC<ParallaxProps> = ({ src, alt, width, height, speed }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const handleScroll = () => {
            setOffsetY(window.scrollY);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ transform: `translateY(${offsetY * (speed / 10)}px)` }}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

const ParallaxPage: React.FC = () => {
  return (
    <div>
      <ParallaxImage src="/background/layerMountain.webp" alt="Mountain" width={1920} height={1080} speed={5} />
      <ParallaxImage src="/background/layerThree.webp" alt="Three" width={1920} height={1080} speed={10} />
      <ParallaxImage src="/background/layerMachine.webp" alt="Machine" width={1920} height={1080} speed={15} />
    </div>
  );
};

export default ParallaxPage;
