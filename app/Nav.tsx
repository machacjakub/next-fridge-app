
export const Nav = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return (
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ width: '25%', textAlign: 'center' }}>
              22
            </td>
            <td style={{ width: '50%', textAlign: 'center' }}>
              <h1>
                {day}.{month}.{year}
              </h1>
            </td>
            <td style={{ width: '25%', textAlign: 'center' }}>
              11
            </td>
          </tr>
        </tbody>
      </table>
    );
  }