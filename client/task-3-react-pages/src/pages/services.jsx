
function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Explore the services we provide to our customers.</p>

      <table className="services-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web Development</td>
            <td>Responsive website design</td>
            <td>Available</td>
          </tr>

          <tr>
            <td>UI Design</td>
            <td>User-friendly interfaces</td>
            <td>Available</td>
          </tr>

          <tr>
            <td>Data Analysis</td>
            <td>Data insights and reporting</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Services;
