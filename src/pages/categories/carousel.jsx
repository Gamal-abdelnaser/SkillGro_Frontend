import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import { Button, Stack, Text } from '@chakra-ui/react';
import icon1 from'../../assets/icons/curve.png'
import icon2 from'../../assets/icons/needs.png'
import icon3 from'../../assets/icons/planning.png'
import icon4 from'../../assets/icons/social-media-marketing.png'
import icon5 from'../../assets/icons/stats.png'
import icon6 from'../../assets/icons/ui-design.png'
import icon7 from'../../assets/icons/web-programming.png'
// import star from'../assets/icons/cat_star.svg'
import { Link } from 'react-router-dom';

function useVisibleItems(containerRef, itemMinWidth = 200) {
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const containerWidth = entry.contentRect.width;
        const newVisibleItems = Math.max(1, Math.floor(containerWidth / itemMinWidth));
        setVisibleItems(newVisibleItems);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef, itemMinWidth]);

  return visibleItems;
}

function Carousel() {
  const containerRef = useRef(null);
  const categories = [
    { icon: icon2, name: 'App Design', count: 18 },
    { icon: icon1, name: 'Graphic Design', count: 22 },
    { icon: icon5, name: 'Finance', count: 41 },
    { icon: icon7, name: 'Development', count: 29 },
    { icon: icon4, name: 'Marketing', count: 31 },
    { icon: icon3, name: 'Life Style', count: 23 },
    { icon: icon6, name: 'Management', count: 19 },
  ];

  const itemsToShow = useVisibleItems(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create an extended array with duplicated items for infinite scroll effect
  const extendedCategories = [...categories.slice(-itemsToShow), ...categories, ...categories.slice(0, itemsToShow)];

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex <= 0) {
      setCurrentIndex(categories.length);
    } else if (currentIndex >= categories.length + itemsToShow) {
      setCurrentIndex(itemsToShow);
    }
  };

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Initialize the carousel to show the first set of actual items
  useEffect(() => {
    setCurrentIndex(itemsToShow);
  }, [itemsToShow]);

  return (
    <Stack px={'20px'} minW={'300px'}  className="   bg-[#f7f7f9]  h-[300px] px-6 rounded-[500px] flex items-center justify-center ">
      <div ref={containerRef} className="relative  w-[90%]" style={{ paddingRight: '30px', paddingLeft: '30px' }}>
        <div className="overflow-hidden">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-300 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCategories.map((category, index) => (
              <Stack
                key={index}
                className="flex-none px-4"
                style={{ width: `${100 / itemsToShow}%` }}
                as={Link}
                to={'/all-courses'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="flex flex-col items-center">
                  <div
                    style={{ border: '1px solid #C9C9DD',color: '#fff', position:'relative',transition:'.5s' }}
                    className="w-40 h-40 p-8 rounded-full  shadow-sm flex items-center justify-center mb-3 hover:bg-[#5751e1] "
                  >
                    <div
                      className='star'
                      color='#fff'
                    ></div>
                    <img src={category.icon} className='p-9 w-[45%]'  />
                    
                  </div>
                  <Text fontSize={'20px'} mt={'10px'} fontWeight={'600'} className="text-[#161439] font-bold text-[30px] text-center">{category.name}</Text>
                  <span className="text-gray-500 text-sm">({category.count})</span>
                </div>
              </Stack>
            ))}
          </div>
        </div>

        <Button
          style={{ backgroundColor: '#ffc224' , border: '1px solid #000'}}
          onClick={prev}
          // className="absolute left-0 top-1/2 border-2 border-black -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#ffc224] rounded-full flex items-center justify-center shadow-lg hover:bg-[#ffc224] transition-colors"
          position="absolute"
          left="0"
          top="50%"
          border="2px"
          borderColor="black"
          transform="translateY(-50%) translateX(-50%)"
          w="10"
          h="10"
          bg="#ffc224"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition={'.5s'}
          
          aria-label="Previous"
          boxShadow="-4px 3px 0px #000" p="4" borderRadius={"30px"}
          _hover={{ bg: '#ffc224', boxShadow: "0px 0px 0px #000", color: '#000', }}
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </Button>
      
        <Button
          style={{ backgroundColor: '#ffc224', border: '1px solid #000' }}
          onClick={next}
          position={'absolute'}
          // className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-[#ffc224] rounded-full flex items-center justify-center shadow-lg hover:bg-[#ffc224] transition-colors"
          right="0"
          top="50%"
          transform="translateY(-50%) translateX(50%)"
          w="10"
          h="10"
          bg="#ffc224"
          rounded="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition={'.5s'}
          
          aria-label="Next"
          boxShadow="4px 3px 0px #000" p="4" borderRadius={"30px"}
          _hover={{ bg: '#ffc224', boxShadow: "0px 0px 0px #000", color: '#000', }}
        >
          <ChevronRight className="w-6 h-6 text-black " />
        </Button>
      </div>
    </Stack>
  );
}

export default Carousel;