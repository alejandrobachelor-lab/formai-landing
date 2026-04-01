import FormClient from './FormClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FormPage({ params }: PageProps) {
  const { id } = await params;
  
  return <FormClient formId={id} />;
}
