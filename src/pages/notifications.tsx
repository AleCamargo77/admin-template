import Layout from "@/components/template/Layout";

import useAppData from "@/data/hook/useAppData";

export default function Notifications() {
  const ctx = useAppData();
  return (
    <div>
      <Layout
        title="Notificaçöes"
        subtitle="Aqui vocë irá gerenciar suas notificaçöes"
      >
        <h3> {ctx.noame}</h3>
      </Layout>
    </div>
  );
}
