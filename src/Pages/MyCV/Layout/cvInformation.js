// import classnames from 'classnames';
import {
  ArrowRightOutlined,
  EnvironmentOutlined, GlobalOutlined, MailOutlined, PhoneOutlined, DownloadOutlined
} from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { INDUSTRY_KNOWLEDGE_DATA, LANGUAGE_DATA, SOCICAL_DATA } from '../../../Constants/cvInfo';
import blenderIc from '../../../Images/Pages/CVs/blender.svg';
import bookIc from '../../../Images/Pages/CVs/book.svg';
import gamingIc from '../../../Images/Pages/CVs/game-pad.svg';
import avatarIc from '../../../Images/Pages/CVs/myAvatar.jpg';
import moviesIc from '../../../Images/Pages/CVs/play-button.svg';
import searchIc from '../../../Images/Pages/CVs/search.svg';
import soccerIc from '../../../Images/Pages/CVs/soccer.svg';
import writtingIc from '../../../Images/Pages/CVs/writing.svg';
import InfoRow from './infoRow';
import PropTypes from 'prop-types';
import trietCVPDF from '../../../Assets/triet-cv-2.pdf';

const HOBBIES_ARR1 = [
  {
    title: 'Reading',
    icon: bookIc,
  },
  {
    title: 'Movies',
    icon: moviesIc,
  },
  {
    title: 'Soccer',
    icon: soccerIc,
  },
  {
    title: 'Science',
    icon: searchIc,
  },
];
const HOBBIES_ARR2 = [
  {
    title: 'Gaming',
    icon: gamingIc,
  },
  {
    title: '3D design',
    icon: blenderIc,
  },
  {
    title: 'Writting',
    icon: writtingIc,
  },
  {
    title: '',
    icon: null,
  },
];
const GENERAL_INFO = [
  {
    icon: <MailOutlined />,
    title: 'tttriet1997@gmail.com',
  },
  {
    icon: <PhoneOutlined />,
    title: '(+84) 819 541 897',
  },
  {
    icon: <GlobalOutlined />,
    title: 'Cover letter',
    type: 'LINK',
    link: 'https://docs.google.com/document/d/1a9HtgPif980QKMZ1JJcqLew-G0wQ9vl-4cIF00RRV0E/edit?usp=sharing',
  },
  {
    icon: <EnvironmentOutlined />,
    title: 'District Tan Binh, Hochiminh city',
  },
];

const CVInformation = (props) => {
  const showHeader = () => (
    <div className='my-cv-header'>
      <img src={avatarIc} className='my-cv-avatar' alt='Avatar img' />

      <div className='my-cv-names'>
        <div className='my-cv-lastname'>
          <span>Truong Thanh</span>
        </div>
        <div className='my-cv-firstname'>
          <span>Triet</span>
        </div>
        <div className='my-cv-role'>
          <span>Front-end developer</span>
        </div>
      </div>
    </div>
  );

  const showGeneralInfo = () => (
    GENERAL_INFO.map((x, i) => (
      <InfoRow
        className={i === 0 ? 'mt24' : 'mt16'}
        key={i}
        icon={x.icon}
        title={x.title}
        type={x?.type}
        link={x?.link || ''}
      />
    ))
  );

  const showIndustryKnowledge = () => (
    <div className='my-cv-body'>
      <div className='my-cv-body-title'>
        <span>Industry Knowledge</span>
      </div>

      {INDUSTRY_KNOWLEDGE_DATA.map((x, i) => (
        <div key={i} className='my-cv-body-content'>
          <span className='a-dot'>●</span>
          <span>{x}</span>
        </div>
      ))}
    </div>
  );

  const showLanguages = () => (
    <div className='my-cv-body'>
      <div className='my-cv-body-title'>
        <span>Languages</span>
      </div>

      {LANGUAGE_DATA.map((x, i) => (
        <div key={i} className='my-cv-body-content'>
          <span>{x}</span>
        </div>
      ))}
    </div>
  );

  const showSocial = () => (
    <div className='my-cv-body'>
      <div className='my-cv-body-title'>
        <span>Social</span>
      </div>

      <div className='f-col w-max-content'>
        {SOCICAL_DATA.map((x, i) => (
          <a href={x.value} key={i} target=' ' className='my-cv-body-social'>
            {x.title}
          </a>
        ))}
      </div>
    </div>
  );

  const hobbiesArr = (arr = []) => arr.map((x, i) => (
    <div key={i} className='my-cv-hobbies'>
      {x.icon && (
        <img
          src={x.icon}
          alt='Hobbies icon'
          className='my-cv-hobbies-icon'
        />
      )}
      <div className='my-cv-hobbies-title'>
        <span>{x.title}</span>
      </div>
    </div>
  ));

  const showHobbies = () => (
    <div className='my-cv-body'>
      <div className='my-cv-body-title'>
        <span>Hobbies</span>
      </div>

      <div className='my-cv-body-hobbies-wrapper'>
        {hobbiesArr(HOBBIES_ARR1)}
      </div>

      <div className='my-cv-body-hobbies-wrapper'>
        {hobbiesArr(HOBBIES_ARR2)}
      </div>

    </div>
  );

  return (
    <div className='my-cv-left'>
      {showHeader()}
      {showGeneralInfo()}
      {showIndustryKnowledge()}
      {showLanguages()}
      {showSocial()}
      {showHobbies()}

      {/* <a href='../' target="_blank" rel="noopener noreferrer" download>
   <Button>
      <i className="fas fa-download"/>
      Download File
   </Button>
</a> */}

      <a href={trietCVPDF} target="_blank" rel="noopener noreferrer" download className='under-none'>
        <Button
          block
          className='cv-info-more-inf-btn'
          type='ghost'
          icon={<DownloadOutlined />}
        >
          Download CV
        </Button>
      </a>

      <Button
        block
        type='ghost'
        className='cv-info-more-inf-btn'
        onClick={props.onClickDetailCV}
      >
        More information
        <ArrowRightOutlined />
      </Button>

      <a href='https://drive.google.com/drive/folders/1KZrjmMOqL3ueAmbPtwpWLVo5zEU9QLcS?usp=sharing' target=' '
        className='under-none' >
        <Button
          block
          type='ghost'
          className='cv-info-more-inf-btn'
        >
          Photos of me and my friends
        </Button>
      </a>

    </div>
  );
};

CVInformation.defaultProps = {
  onClickDetailCV: () => { }
};
CVInformation.propTypes = {
  onClickDetailCV: PropTypes.func,
};

export default CVInformation;
