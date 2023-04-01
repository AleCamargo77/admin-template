import Title from "./Title";

interface Headeprops {
  title: string;
  subtitle: string;
}

export default function Header(props: Headeprops) {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  );
}
