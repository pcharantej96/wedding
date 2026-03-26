import { motion, AnimatePresence } from 'framer-motion'

export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
          style={{ backgroundColor: 'rgba(61, 10, 19, 0.9)', backdropFilter: 'blur(10px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={alt || 'Wedding invitation card'}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="bg-champagne rounded-lg p-12 text-center">
                <p className="text-maroon font-heading text-2xl">Invitation Card</p>
                <p className="text-maroon/60 mt-2">Place your invitation card image here</p>
              </div>
            )}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 bg-gold text-maroon-dark rounded-full flex items-center justify-center font-bold text-lg shadow-lg hover:scale-110 transition-transform cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
