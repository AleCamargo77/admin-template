import LateralMenu from "./LateralMenu";

interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Layoyt(props: TitleProps) {
  return (
    <div>
      <h1 className={``}>{props.title}</h1>
      <h2 className={``}>{props.subtitle}</h2>
    </div>
  );
}
