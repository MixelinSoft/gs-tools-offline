import { Link } from 'react-router-dom';
import styles from './ToolBox.module.css';
import tools from '../../../data/tools';
import ToolCard from './ToolCard/ToolCard';

const ToolBox = (props) => {
  const localization = 'ua';
  return (
    <div>
      {tools.map((tool) => (
        <ToolCard />
      ))}
      <Link to='/report-generator'>tese</Link>
    </div>
  );
};

export default ToolBox;
