import { useEffect, useRef, useState } from "react";

// Custom hook for scroll-based animations
export const useScrollAnimation = (threshold = 0.1, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

// Hook for staggered animations
export const useStaggeredAnimation = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return { ref, isVisible };
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
};

// Reusable animated components
export const AnimatedSection: React.FC<{
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale";
  delay?: number;
  className?: string;
}> = ({ children, animation = "fadeUp", delay = 0, className = "" }) => {
  const { ref, isVisible } = useStaggeredAnimation(delay);

  const getAnimationClass = () => {
    switch (animation) {
      case "fadeLeft":
        return "scroll-reveal-left";
      case "fadeRight":
        return "scroll-reveal-right";
      case "scale":
        return "scroll-reveal-scale";
      default:
        return "scroll-reveal";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${
        isVisible ? "visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Apple-style card component
export const AppleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const { ref, isVisible } = useStaggeredAnimation(delay);

  return (
    <div
      ref={ref}
      className={`apple-card scroll-reveal ${
        isVisible ? "visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Floating element component
export const FloatingElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const { ref, isVisible } = useStaggeredAnimation(delay);

  return (
    <div
      ref={ref}
      className={`floating scroll-reveal-scale ${
        isVisible ? "visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Parallax background component
export const ParallaxBackground: React.FC<{
  backgroundImage?: string;
  speed?: number;
  className?: string;
  children?: React.ReactNode;
}> = ({ backgroundImage, speed = 0.5, className = "", children }) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div ref={ref} className={`parallax-section ${className}`}>
      {backgroundImage && (
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offset}px)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Staggered list component
export const StaggeredList: React.FC<{
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}> = ({ children, staggerDelay = 100, className = "" }) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          delay={index * staggerDelay}
          animation="fadeUp"
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

// Glass morphism card
export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const { ref, isVisible } = useStaggeredAnimation(delay);

  return (
    <div
      ref={ref}
      className={`glass-card p-6 scroll-reveal ${
        isVisible ? "visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Hero text animation component
export const HeroText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref}
      className={`scroll-reveal-scale ${
        isVisible ? "visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Custom scroll progress indicator
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
};

// Scroll progress bar component
export const ScrollProgressBar: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  const progress = useScrollProgress();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-1 bg-gray-200 z-50 ${className}`}
    >
      <div
        className="h-full bg-gradient-apple transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default {
  useScrollAnimation,
  useStaggeredAnimation,
  useParallax,
  AnimatedSection,
  AppleCard,
  FloatingElement,
  ParallaxBackground,
  StaggeredList,
  GlassCard,
  HeroText,
  useScrollProgress,
  ScrollProgressBar,
};
