import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMergeState } from '../../Helpers/customHooks';

import { PAGE_MANAGER } from '../../Constants';
import CVDetails from './Layout/cvDetails';
import CVInformation from './Layout/cvInformation';
import Portfolio from './Portfolio';

const MyCV = () => {
  const navigate  = useNavigate();
  const [state, setState] = useMergeState({
    isShowDetails: false,
  });

  const { isShowDetails } = state;

  const onClickBack = () => {
    if (isShowDetails) {
      setState({ isShowDetails: false });
      return;
    }
    // history.push(PAGE_MANAGER.HOME);
    // history.goBack();
    navigate(PAGE_MANAGER.HOME)
  };

  const onClickDetailCV = () => {
    setState({ isShowDetails: true });
  };

  return (
    <div className='my-cv-wrapper custom-scrollbar'>
      <div className='my-cv-main'>

        {
          isShowDetails
            ? <Portfolio
            onClickBack={onClickBack}
            />
            : (
              <>
                <CVInformation
                onClickDetailCV={onClickDetailCV}
                />
                <CVDetails />
              </>
            )
        }

      </div>
    </div>
  );
};
MyCV.defaultProps = {
};
MyCV.propTypes = {
};
export default MyCV;
