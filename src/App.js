import DataTable from "./Components/DataTable";
import UseEffectHook from "./Components/UseEffectHook";
export const App = () => {
  const table1 = [
    { name: "Vikas", designation: "Engineer" },
    { name: "Vihaan", designation: "Doctor" },
    { name: "Vilas", designation: "Pilot" },
  ];
  return (
    <>
      <div className="App">
        <DataTable data={table1} />
        <UseEffectHook />
      </div>
    </>
  );
};
