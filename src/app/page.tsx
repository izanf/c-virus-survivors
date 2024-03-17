import Card from './reports/Card/Card';

export default function ReportsPage() {
  return (
    <main>
      <section className="container mx-auto my-16">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-violentViolet">List of Survivors</h1>
          <h2 className="text-sm text-comet">You have 1205 healthy survivors</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
