import Card from './Card';
import { StyledPortfolio } from './styles';
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledPortfolio>
        <Card />
      </StyledPortfolio>
    </motion.div>
  );
}

export default Portfolio;
