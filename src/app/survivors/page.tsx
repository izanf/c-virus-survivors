'use client';
import { useState } from 'react';
import useSWR from 'swr';

import Input from '../components/Input';
import Select from '../components/Select';
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Modal from "../components/Modal";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function SurvivorsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSWR('/api/survivors', fetcher);

  return (
    <main>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Input label="Full Name of Survivor" placeholder="Full Name" />
        <Select label="Status" options={[{ uid: '1', label: 'Healthy' }, { uid: '2', label: 'Infected' }]} />
      </Modal>
      <section className="container mx-auto my-16">
        <div className="mb-8 flex justify-between">
          <div>
            <h1 className="text-xl font-medium text-violentViolet">List of Survivors</h1>
            <h2 className="text-sm text-comet">You have 1205 healthy survivors</h2>
          </div>
          <div>
            <Button onClick={() => setIsOpen(true)}>Add Survivor</Button>
          </div>
        </div>
        <table className="table-auto border-collapse border border-whiteSmoke bg-white w-full">
          <thead className="bg-whiteSmokeSecondary text-sm text-spunPearl">
            <tr>
              <th className="text-left px-6 py-3 font-medium text-xs">Name</th>
              <th className="text-left px-6 py-3 font-medium text-xs">Status</th>
              <th className="text-left px-6 py-3 font-medium text-xs">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(({ uid, name, avatarUrl,  }: any) => (
              <tr className="border border-whiteSmoke" key={uid}>
                <td className="flex items-center px-6 py-3">
                  <Avatar src={avatarUrl} />
                  <span className="ml-3 text-violentViolet font-semibold">{name}</span>
                </td>
                <td className="px-6 py-3">Healthy</td>
                <td className="px-6 py-3 text-comet">May 14, 2023</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className="px-6 py-3">
                <p className="text-sm font-medium text-comet">
                  Showing <span className="font-semibold text-haiti">1</span> to <span className="font-semibold text-haiti">5</span> of <span className="font-semibold text-haiti">100</span> Results
                </p>
              </td>
              <td className="px-6 py-3 flex gap-4 justify-end">
                <Button>Previous</Button>
                <Button>Next</Button>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  )
}
