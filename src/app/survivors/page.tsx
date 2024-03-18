'use client';
import { useState } from 'react';
import useSWR from 'swr';

import Input from '../components/Input';
import Select from '../components/Select';
import Button from "../components/Button";
import Modal from "../components/Modal";
import Table from "./Table";

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
       <Table data={data} />
      </section>
    </main>
  )
}
