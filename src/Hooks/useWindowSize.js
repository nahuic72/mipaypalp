import { useState, useEffect } from 'react'

/**
 * get width and height of current viewport
 * @returns {number, number}
 */
function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

/**
 * add resize listener function
 * @returns {number, number}
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
