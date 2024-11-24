const DataTable = (props) => {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Designation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, i) => {
          return (
            <tr key={i}>
              <td>{value.name}</td>
              <td>{value.designation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
