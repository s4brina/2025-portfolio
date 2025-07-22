import React from "react";

const SectionWrapper = React.forwardRef(({ children, color, className = "" }, ref) => {
  return (
    <section
      ref={ref}
      className={className}
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </section>
  );
});

export default SectionWrapper;
