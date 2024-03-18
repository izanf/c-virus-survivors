import Card from './reports/Card';

export default function ReportsPage() {
  return (
    <main>
      <section className="container mx-auto my-16">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-violentViolet">Reports</h1>
          <h2 className="text-sm text-comet">Your camp has grown +5% this month</h2>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Card
            title="Number of Healthy Survivors"
            downloadUrl="#"
            quantity="1,205"
            growth={5}
            metricLabel="Last 30 days"
          />
          <Card
            title="Number of Infected Survivors"
            downloadUrl="#"
            quantity="39"
            growth={-12}
            metricLabel="Last 30 days"
          />
          <Card
            title="Average Resource Allocation"
            downloadUrl="#"
            quantity="Food"
            metricLabel="10 days worth"
          />
        </div>
      </section>
    </main>
  );
}
