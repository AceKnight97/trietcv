import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useMergeState } from '../../Helpers/customHooks';

import CVInformation from './Layout/cvInformation';
import CVDetails from './Layout/cvDetails';
import Portfolio from './Portfolio';
import { PAGE_MANAGER } from '../../Constants';

const MyCV = () => {
  const history = useHistory();
  const [state, setState] = useMergeState({
    isShowDetails: false,
  });

  const { isShowDetails } = state;

  const onClickBack = () => {
    if (isShowDetails) {
      setState({ isShowDetails: false });
      return;
    }
    history.push(PAGE_MANAGER.HOME);
    // history.goBack();
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
