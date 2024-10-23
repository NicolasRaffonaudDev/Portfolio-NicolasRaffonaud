import './FadeInWrapper.css';

const FadeInWrapper = ({ children, animationClass = "fade-in", delay = 0 }) => {
    const style = {
        animationDelay: `${delay}s`,
    };
  return (
    <div className={animationClass} style={style}>
        {children}
    </div>
  );
};

export default FadeInWrapper;