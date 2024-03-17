import Card from './reports/Card/Card';

export default function Home() {
  return (
    <main>
      <section className="container mx-auto my-16">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-violentViolet">Reports</h1>
          <h2 className="text-sm text-comet">Your camp has grown <span className="text-oceanGreen">+5%</span> this month</h2>
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
