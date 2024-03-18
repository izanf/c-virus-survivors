'use client';
import { useRouter } from 'next/navigation';

import Tag from '../components/Tag';

interface ICardProps {
  title: string
  downloadUrl: string
  quantity: string
  metricLabel: string
  growth?: number
}

export default function Card({ title, downloadUrl, quantity, growth, metricLabel }: ICardProps) {
  const router = useRouter()
  
  const handleDownload = (url: string) => {
    console.log('download!')
    router.push(url)
  }

  return (
    <div className="bg-white rounded-xl border-2 border-whiteSmoke text-violentViolet">
      <div className="p-6">
        <h2 className="mb-6 font-semibold">{title}</h2>
        <div>
          <p className="inline-block font-medium text-3xl flex items-center">
            {quantity}
            {growth && <Tag isPositive={growth > 0}>{growth}%</Tag>}
          </p>
          <span className="block text-xs mt-2">{metricLabel}</span>
        </div>
      </div>
      <div className="border-t-2 border-whiteSmoke px-4 py-2">
        <button className="font-semibold text-xs p-2" onClick={() => handleDownload(downloadUrl)}>Download Report</button>
      </div>
    </div>
  );
};
