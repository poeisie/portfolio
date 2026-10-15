import React, { useRef } from 'react';

// Janela retrô: barra de título listrada + conteúdo.
// Com `draggable`, dá para arrastar pela barra (só com mouse; no toque fica parada).
const Window = ({ title, children, className = '', bodyClassName = '', draggable = false, as: Tag = 'div', ...rest }) => {
  const ref = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const onPointerDown = (e) => {
    if (!draggable || e.pointerType !== 'mouse' || e.button !== 0) return;
    const el = ref.current;
    const start = { x: e.clientX - offset.current.x, y: e.clientY - offset.current.y };
    el.classList.add('is-dragging');

    const move = (ev) => {
      offset.current = { x: ev.clientX - start.x, y: ev.clientY - start.y };
      el.style.translate = `${offset.current.x}px ${offset.current.y}px`;
    };
    const up = () => {
      el.classList.remove('is-dragging');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <Tag ref={ref} className={`window ${draggable ? 'window--draggable' : ''} ${className}`} {...rest}>
      <div className="window-bar" onPointerDown={onPointerDown}>
        <span className="window-close" aria-hidden="true" />
        <span className="window-title">{title}</span>
      </div>
      <div className={`window-body ${bodyClassName}`}>{children}</div>
    </Tag>
  );
};

export default Window;
