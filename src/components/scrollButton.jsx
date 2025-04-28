import { Button } from '@chakra-ui/react';
import { ArrowUp } from 'lucide-react';
import { FaAngleUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={handleScrollTop}
      position="fixed"
      bottom="30px"
      right="10px"
      borderRadius="full"
      boxShadow="lg"
      zIndex="999"
      w={'40px'}
      bg={'#5751e1'}
      color={'#fff'}
      transition={'.3s'}
      _hover={{ bg:'#ffc224',color:'#000'}}
    >
     
      <FaAngleUp size={20} />
    </Button>
  );
}

export default ScrollToTopButton;