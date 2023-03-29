import React, { useState } from 'react';
import { ChevronRight } from "icons";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./button";
import { Typography } from "./Typography";
import { Modal } from 'antd';

type Props = {
  image: {
    path: string;
    width: number;
    height: number;
  };
  title: string;
  desc: string;
  buttonText: string;
  onClick: boolean
};

export const ContactModal: FC<Props> = ({
  image,
  title,
  desc,
  buttonText,
  onClick,
}) => {
  const { path, width, height } = image;
  const [open, setOpen] = useState(false);
  return (
    <Modal
        title="Modal 500px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>{title}</p>
        <p>{desc}</p>
        <p>{buttonText}</p>
      </Modal>
  );
};
