import React, {Children, cloneElement, useEffect, useRef, useState} from 'react';
import "./Carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


// const PAGE_ON_SCREEN = 7
// const width = 182

// const MyCarousel = ({children}) => {
//
//     const [pages, setPages] = useState([])
//     const [offset, setOffset] = useState(0)
//
//     const handleLeftArrowClick = () => {
//         setOffset((currentOffset) => {
//             const newOffset = currentOffset + width
//             return Math.min(newOffset, 0)
//         })
//     }
//
//     const handleRightArrowClick = () => {
//         setOffset((currentOffset) => {
//             const newOffset = currentOffset - width
//
//             const maxOffset = -(width * (pages.length - PAGE_ON_SCREEN))
//
//             return Math.max(newOffset, maxOffset)
//         })
//     }
//
//     useEffect(() => {
//         setPages(
//             Children.map(children, child => {
//                 return cloneElement(child, {
//                     style: {
//                         height: '100%',
//                         minWidth: `${width}`,
//                         maxWidth: `${width}`,
//                     }
//                 })
//             })
//         )
//     }, [])
//
//     return (
//         <div className="main-container">
//             <FontAwesomeIcon className="arrow" onClick={handleLeftArrowClick} icon={faChevronLeft} />
//             <div className="window">
//                 <div className="all-pages-container"
//                      style={{
//                          transitionDuration: `${transitionDuration}ms`,
//                          transform: `translateX(${offset}px)`,
//                      }}
//                 >
//                     {pages}
//                 </div>
//             </div>
//             <FontAwesomeIcon className="arrow" onClick={handleRightArrowClick} icon={faChevronRight} />
//         </div>
//     );
// };
//
// export default MyCarousel;

const MyCarousel = (props) => {
    const {children, show, infiniteLoop} = props

    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
    const [length, setLength] = useState(children.length)

    const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
        setIsRepeating(infiniteLoop && children.length > show)
    }, [children, infiniteLoop, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    (isRepeating || currentIndex > 0) &&
                    <FontAwesomeIcon className="left-arrow" onClick={prev} icon={faChevronLeft} />
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / show)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {
                            (length > show && isRepeating) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (length > show && isRepeating) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {
                    (isRepeating || currentIndex < (length - show)) &&
                    <FontAwesomeIcon className="right-arrow" onClick={next} icon={faChevronRight} />
                }
            </div>
        </div>
    )
}

export default MyCarousel;

