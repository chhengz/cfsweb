import React from 'react'
import { useTranslation } from 'react-i18next';

const VIDEO_ID_URL = "TydfT1uF9_M?si=PVxxgODRjntIk5Wp";
const VIDEO_TITLE = "IoT Project Demo";

const Demo = () => {
  const { t } = useTranslation();
  return (
    <div className='mx-auto max-w-2xl text-center '>
      <div className="max-w-3xl w-full  rounded-2xl px-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">{t('demo_title')}</h1>
        <p className="text-gray-700 mb-6">
          {t('demo_description')}
        </p>
        <div className="aspect-w-16 aspect-h-9 w-full mb-6">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${VIDEO_ID_URL}`}
            title={VIDEO_TITLE}
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-500 text-sm">{t('demo_technologies')}</p>
      </div>
    </div>
  )
}

export default Demo