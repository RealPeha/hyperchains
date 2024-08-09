import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export const Collapse: React.FC<CollapseProps> = ({ children, isOpen }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            overflow: 'hidden',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
