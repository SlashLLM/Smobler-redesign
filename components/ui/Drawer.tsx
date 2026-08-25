'use client';

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  eyebrow?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  eyebrow,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Panel (480px max width on Pure White surface) */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-[480px] h-full overflow-y-auto z-10 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
        style={{
          borderLeft: '1px solid var(--line-light)',
          borderTop: '4px solid var(--sun-500)',
          /* Slide-over sits flush to the right edge — round the leading side only. */
          borderRadius: 'var(--radius-panel) 0 0 var(--radius-panel)',
        }}
      >
        <div>
          {/* Header & Close Action */}
          <div className="flex items-start justify-between pb-6 mb-6 border-b border-[var(--line-light)]">
            <div>
              {eyebrow && (
                <div className="text-label text-[var(--sun-700)] mb-1 font-mono font-bold">
                  ▸ {eyebrow}
                </div>
              )}
              {title && (
                <h3
                  id="drawer-title"
                  className="text-h3 font-display font-bold text-[var(--ink)]"
                >
                  {title}
                </h3>
              )}
            </div>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 text-[var(--ink-mute)] hover:text-[var(--ink)] hover:bg-[var(--snowfield)] transition-colors cursor-pointer border border-[var(--line-light)]"
              style={{ borderRadius: 'var(--radius-control)' }}
              aria-label="Close panel"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="space-y-6">{children}</div>
        </div>

        {/* Footer info */}
        <div className="pt-8 mt-8 border-t border-[var(--line-light)] flex items-center justify-between text-label text-[var(--ink-mute)]">
          <span>SMOBLER STUDIO ROSTER</span>
          <span className="font-mono text-[10px]">ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};
