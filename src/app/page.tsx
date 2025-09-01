import GreetingButton from "@/app/component/GreetingButton"

export default function Home() {
  const name : string= "Faisal Mubarok";

  const names : string[] = ["jhon", "jane", "albert"];

  return (
    <div className="">
      <p className="text-white">Hello {name}</p>

      {names.map((name, i) => (
      <p key={i}>Hello {name}</p>
      ))}

      
      <GreetingButton name={name} />
      {names.map((name, i) => (
        <GreetingButton key={i} name={name} />
      ))}
    </div>
  );
}
