import Layout from "@/components/template/Layout";

import useAppData from "@/data/hook/useAppData";

export default function Notifications() {
  const { changeTheme } = useAppData();
  return (
    <div>
      <Layout
        title="Notificaçöes"
        subtitle="Aqui vocë irá gerenciar suas notificaçöes"
      >
        <button onClick={changeTheme}>Alternar Tema</button>
      </Layout>
    </div>
  );
}
