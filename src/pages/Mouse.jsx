import { useEffect, useRef } from "react";
import "../styles/Mouse.css"
function Mouse() {
  const blobRef = useRef(null);

  // current & target positions
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      if (!blobRef.current) return;

      // smooth interpolation
      pos.current.x = lerp(pos.current.x, target.current.x, 0.08);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.08);

      blobRef.current.style.transform = `
        translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
        translate(-50%, -50%)
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="mouse-blob" ref={blobRef} />;
}

export default Mouse;
