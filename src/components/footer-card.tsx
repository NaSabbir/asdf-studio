import React, { useState } from 'react';
import { ChevronRight } from "icons";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./button";
import { Typography } from "./Typography";
import { Input, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faCopy } from '@fortawesome/free-solid-svg-icons';

type Props = {
  image: {
    path: string;
    width: number;
    height: number;
  };
  title: string;
  desc: string;
  buttonText: string;
  type: string;
};

export const FooterCard: FC<Props> = ({
  image,
  title,
  desc,
  buttonText = "",
  type,
}) => {
  const { path, width, height } = image;
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [openThankyouCard, setOpenThankyouCard] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [emptyName, setemptyName] = useState(false);
  const [emptyEmail, setemptyEmail] = useState(false);
  const [emptyMessage, setemptyMessage] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [show, setShow] = useState(false);

  const onclickHandel = () => {
    name === '' ? setemptyName(true) : setemptyName(false)
    email === '' ? setemptyEmail(true) :setemptyEmail(false)
    message === '' ? setemptyMessage(true) : setemptyMessage(false)
    name === '' || email === '' || message === '' ? null : 
    (setMessageModalOpen(false), 
    setOpenThankyouCard(true)
    )
  }
  const handleCancel = () => {
    setOpenThankyouCard(false),
    setMessageModalOpen(false),
    setContactModalOpen(false)
  };
  const handleChange = (event: any) => {
    event.target.id === "name" ? setName(event.target.value) : 
    event.target.id === "email" ? setEmail(event.target.value) : 
    event.target.id === "company" ? setCompany(event.target.value) :
    event.target.id === "message" ? setMessage(event.target.value) : null
  };
  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className="max-w-full sm:max-w-[285px] w-full flex flex-col items-center sm:items-center xl:items-start">
      <div className="h-[114px] ml-2 mb-2">
        <Image
          src={"/assets/landing/Footer/" + path}
          width={width}
          height={height}
          alt="image"
        />
      </div>

      <div className="flex flex-col sm:h-[125px] h-[116px]">
        <Typography
          variant="title2"
          classname="text-main-deepBlue text-center sm:items-center xl:text-start"
        >
          {title}
        </Typography>
        <Typography
          classname="text-main-deepBlue text-center sm:items-center xl:text-start"
          variant="title1"
        >
          {desc}
        </Typography>
      </div>
      <Button
        endIcon={<ChevronRight className="fill-main-blue -mt-1" />}
        variant="secondary"
        className="w-[225px] h-[45px] shadow-buttonShadow2 pt-1"
        typoVariant="title-semi"
        onClick={() => 
          type === "message" ? setMessageModalOpen(true) : type === "contact" ? setContactModalOpen(true) : window.open('https://calendly.com/airlystudio/meeting', '_blank') 
        }
      >
        {buttonText}
      </Button>

      {/* modal complte */}

      <Modal
        centered
        open={messageModalOpen}
        width={600}
        onCancel={handleCancel}
        closeIcon={<FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: 20 }}/>}
        footer={
          <Button
            typoVariant="title-semi-button"
            endIcon={<ChevronRight className="fill-white -mt-1"/>}
            className="w-full hover:bg-main-hoverOrange sm:w-[206px] h-[45px] shadow-buttonShadow4 pt-1"
            onClick={() => onclickHandel()}
          >
            submit
          </Button>
        }
      >
        <div className="ml-4 mb-2 flex gap-[17.5px] flex-wrap sm:flex-row">
          <Image
            src={"/assets/landing/Footer/" + path}
            width={70}
            height={70}
            alt="image"
          />
          <Typography
            variant="heading5"
            classname="text-main-deepBlue text-center pt-6"
          >
            {"Send a Message"}
          </Typography>
        </div>

        {/* form */}
        <div className="ml-2 mb-2 mt-10 flex gap-[5px] flex flex-col">
          <Typography
            variant="title3"
            classname="text-main-deepBlue text-start"
          >
            {"YOUR NAME"}
          </Typography>
          {
              emptyName ? <Typography
              variant="title3"
              classname="text-main-orange text-end"
            >
              {"REQUIRED"}
            </Typography> : null
            }
          <Input type="text" id="name" name="name" required onChange={handleChange} 
          className= {
            emptyName === false ? 
            "h-[45px] bg-main-textBox text-main-modalTitle rounded-[23px] pl-3 pr-3 font-semibold" : 
            "h-[45px] bg-main-textBox text-main-modalTitle rounded-[23px] pl-3 pr-3 font-semibold border-2 border-main-orange"
          }
          />
        </div>
        <div className="ml-2 mb-2 mt-6 flex gap-[5px] flex flex-col">
          <div className="flex flex-row justify-between">
            <Typography
              variant="title3"
              classname="text-main-deepBlue text-start"
            >
              {"EMAIL"}
            </Typography>
            {
              emptyEmail ? <Typography
              variant="title3"
              classname="text-main-orange text-end"
            >
              {"REQUIRED"}
            </Typography> : null
            }
          </div>
          <Input type="text" id="email" name="email" onChange={handleChange} 
          className= {
            emptyEmail === false ? 
            "h-[45px] bg-main-textBox text-main-modalTitle rounded-[23px] pl-3 pr-3 font-semibold" : 
            "h-[45px] bg-main-textBox text-main-modalTitle rounded-[23px] pl-3 pr-3 font-semibold border-2 border-main-orange"
          }
          />
        </div>
        <div className="ml-2 mb-2 mt-6 flex gap-[5px] flex flex-col">
        <div className="flex flex-row">
          <Typography
            variant="title3"
            classname="text-main-deepBlue text-start"
          >
            {"COMPANY"}
          </Typography>
          <Typography
            variant="title3"
            classname="text-main-modalTitleSecond text-start ml-1"
          >
            {"(OPTIONAL)"}
          </Typography>
          </div>
          <Input type="text" id="company" name="company" onChange={handleChange} className="h-[45px] bg-main-textBox text-main-modalTitle rounded-[23px] pl-3 pr-3 font-semibold"/>
        </div>
        <div className="ml-2 mb-4 mt-6 flex gap-[5px] flex flex-col">
          <Typography
            variant="title3"
            classname="text-main-deepBlue text-start"
          >
            {"MESSAGE"}
          </Typography>
          {
              emptyMessage ? <Typography
              variant="title3"
              classname="text-main-orange text-end"
            >
              {"REQUIRED"}
            </Typography> : null
            }
          <Input.TextArea autoSize={{ minRows: 7, maxRows: 7 }}  id="message" name="message" onChange={handleChange} 
          className= {
            emptyMessage === false ? 
            "text-[16px] pt-2 h-[200px] bg-main-textBox text-main-modalTitle rounded-[23px] pl-3 pr-3 font-sans" : 
            "text-[16px] pt-2 h-[200px] bg-main-textBox text-main-modalTitle rounded-[23px] pl-3 pr-3 font-sans border-2 border-main-orange"
          }
          />
        </div>
      </Modal>

      {/* contact modal */}

      <Modal
        centered
        open={contactModalOpen}
        width={400}
        onCancel={handleCancel}
        closeIcon={<FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: 20 }}/>}
        footer={null}
      >
        <div className="ml-2 mb-4 flex gap-[17.5px]">
          <Image
            src={"/assets/landing/Footer/" + path}
            width={189}
            height={113}
            alt="image"
          />
        </div>
        <div className="ml-2 mb-4 mt-6 flex gap-[5px] flex flex-row justify-between">
        <Typography
            variant="heading5"
            classname="text-main-deepBlue text-center pt-6"
          >
            {"Email"}
        </Typography>
        {
          show === false  ?
            <Typography
              variant="label1"
              classname="text-main-orange text-center mt-7"
            >
              {copySuccess}
            </Typography>
          : null
        }
        </div>
        <div className="ml-2 mb-2 mt-4 flex gap-[5px] flex flex-col">
          <div className="h-[45px] bg-main-lightestBlue rounded-[23px] border-2 border-main-lightBlue flex justify-between pr-3 pt-2">
            <Typography
              variant="title4"
              classname="text-main-deepBlue text-center pl-5"
              >
                {"hello@airlystudio.com"}
            </Typography>

            <FontAwesomeIcon onClick={() => {copyToClipBoard('hello@airlystudio.com'),
            setTimeout(() => {
              setShow(true)
              }, 1500), setShow(false) }
            } 
            icon={faCopy} style={{ fontSize: 20, color: "#f97066", cursor: 'pointer' }}/>
          </div>
        </div>
        <div className="ml-2 mb-2 mt-4 flex gap-[5px] flex flex-col">
          <div className='-ml-8 -mr-6 border-[1px] border-main-textBox'></div>
          <Typography
              variant="heading5"
              classname="text-main-deepBlue pt-6"
            >
              {"Phone"}
          </Typography>
          <Typography
              variant="title5"
              classname="text-main-deepBlue pt-2"
            >
              Along with direct phone call,
              <span className="font-bold"> WhatsApp </span>
              and  
              <span className="font-bold"> Telegram </span>
              are also available
          </Typography>
          
          <div className="h-[45px] bg-main-lightestBlue rounded-[23px] border-2 border-main-lightBlue flex justify-between pr-3 pt-2 mt-2">
            <Typography
              variant="title5"
              classname="text-main-deepBlue text-center pl-5"
              >
                {"HR & Operations"}
            </Typography>
            <Typography
              variant="title4"
              classname="text-main-deepBlue text-center pl-5"
              >
                {"+880 18 9154 7896"}
            </Typography>
          </div>
          <div className="h-[45px] bg-main-lightestBlue rounded-[23px] border-2 border-main-lightBlue flex justify-between pr-3 pt-2 mt-2">
            <Typography
              variant="title5"
              classname="text-main-deepBlue text-center pl-5"
              >
                {"Dev Team"}
            </Typography>
            <Typography
              variant="title4"
              classname="text-main-deepBlue text-center pl-5"
              >
                {"+880 16 1699 2233"}
            </Typography>
          </div>
          <div className="h-[45px] bg-main-lightestBlue rounded-[23px] border-2 border-main-lightBlue flex justify-between pr-3 pt-2 mt-2">
            <Typography
              variant="title5"
              classname="text-main-deepBlue text-center pl-5"
              >
                {"Design Team"}
            </Typography>
            <Typography
              variant="title4"
              classname="text-main-deepBlue text-center pl-5"
              >
                {"+880 18 9154 7896"}
            </Typography>
          </div>
        </div>
      </Modal>

      {/* thank you modal */}

      <Modal
        centered
        open={openThankyouCard}
        width={400}
        onCancel={handleCancel}
        closeIcon={<FontAwesomeIcon icon={faCircleXmark} style={{ fontSize: 20 }}/>}
        footer={null}
      >
        <div className="ml-2 mb-2 mt-4 flex flex-wrap sm:flex-column justify-center">
          <Image
            src={"/assets/landing/SVG/hearth.svg"}
            width={105}
            className="justify-center"
            height={105}
            alt="hearth emoji"
          />
        </div>
        <div className="ml-2 mb-6 flex gap-[17.5px] flex-wrap sm:flex-column justify-center">
          <Typography
            variant="heading5"
            classname="text-main-deepBlue text-center sm:items-center xl:text-start"
          >
            {"Thank you!"}
          </Typography>
          <Typography
            variant="title3"
            classname="text-main-deepBlue text-center sm:items-center xl:text-start"
          >
            {"Thank you for sending us your message. We will get back to you as soon as possible."}
          </Typography>
          <Button
            typoVariant="title-semi-button"
            endIcon={<FontAwesomeIcon icon={faCheck} style={{ fontSize: 15, paddingBottom: 5 }}/>}
            className="w-full hover:bg-main-hoverOrange sm:w-[206px] h-[45px] shadow-buttonShadow4 pt-1"
            onClick={() => setOpenThankyouCard(false)}
          >
            okay
          </Button>
        </div>
      </Modal>
    </div>
  );
};
