import React from "react";

const Sidebar = ({ references }) => {
  const [render, setRender] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const [indexHeaderRef, , , , , footerRef] = references;

  const powerOnDot = (reference) => {
    if (!reference) return;

    const { top, height } = reference.getBoundingClientRect();

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      return reference.id === footerRef.current.id ? "text-success" : "";
    }

    return (top <= 50 && top >= (height - 50) * -1 && "text-success") || "";
  };

  const scrollIntoView = (Section, extraTop = 0) => {
    window.scrollTo({
      behavior: "smooth",
      top: Section.getBoundingClientRect().top + window.pageYOffset - extraTop,
    });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setRender(Math.random());

      indexHeaderRef.current &&
        setIsVisible(indexHeaderRef.current.getBoundingClientRect().top < -150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [render, indexHeaderRef]);

  return (
    <div className={isVisible ? "show-sidebar" : "hidden"}>
      <ul className="dotted-sidebar">
        {references.map((reference, key) => (
          <li
            key={key}
            className={`clickable ${powerOnDot(reference.current)}`}
            onClick={() => scrollIntoView(reference.current)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
