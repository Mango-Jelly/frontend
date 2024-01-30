'use client';

import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import { ScriptType } from '../types/ScriptType';
import style from './scrollbar.module.css';

type Props = {
  scriptInfo: ScriptType;
};

export default function ScenarioDialog({ scriptInfo }: Props) {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const handleAccordionClick = (sequenceNum: number) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === sequenceNum ? null : sequenceNum
    );
  };

  const bottomButtonClass =
    'text-3xl text-center rounded-2xl w-64 p-6 m-2 shadow';

  return (
    <div className='relative flex flex-col bg-white/80 w-[62%] h-[88%] m-2 p-8'>
      <div
        className='relative w-full h-5/6 overflow-y-scroll'
        id={style.scroll}
        // data-accordion='collapse'
      >
        {scriptInfo.scene.map((value, key) => {
          return (
            <div key={key}>
              <AccordionSection
                sequence={value.sequence}
                title={value.title}
                isOpen={openSection === value.sequence}
                onClick={() => handleAccordionClick(value.sequence)}
              >
                <div className='rounded-b-xl bg-arrow px-8 pb-8'>
                  <div className='bg-white p-4'>
                    {value.dialogs.map((dialogValue, dialogKey) => {
                      return (
                        <div key={dialogKey} className='flex items-center'>
                          <div className='shrink-0 bg-gray-200 rounded-full size-12 m-2'>
                            {dialogValue.img}
                          </div>
                          <p className='text-xl'>
                            {`${dialogValue.role}: ${dialogValue.dialog}`}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AccordionSection>
            </div>
          );
        })}
      </div>

      <div className='absolute bottom-8 right-12 flex'>
        <button className={`${bottomButtonClass} bg-arrow`}>취소</button>
        <button
          className={`${bottomButtonClass} bg-main text-white font-semibold`}
        >
          연극 선택
        </button>
      </div>
    </div>
  );
}