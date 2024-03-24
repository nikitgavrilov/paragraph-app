import styles from "./Page.module.scss";

const technologyList = [
  { id: 0, title: "Next JS" },
  { id: 1, title: "TypeScript" },
  { id: 2, title: "Redux Toolkit" },
  { id: 3, title: "RTK Query" },
  { id: 4, title: "Tailwind CSS" },
  { id: 5, title: "SCSS" },
];

const HomePage = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl mb-3">Welcome on Paragraph application!</h1>
      <h2 className="text-xl">Technologies used to create this application:</h2>
      <ul>
        {technologyList.map((item) => (
          <li className="text-lg">
            {item.id + 1}. {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
