import { 
  Outlet,} from 'react-router-dom';

const Root = () => {
  
  return (
    <>
        <Outlet/> 
        {/* /\ this is where the children will load */}
    </>
  );
};

export default Root;
