function Portfolio() {
    return (
      <section>
        <h2 className="text-xl font-bold">Portfolio</h2>
        <p>Here are some of my projects:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded shadow">
            <h3>Project 1</h3>
            <p>Description of the project.</p>
            <a href="#" target="_blank">View Project</a>
          </div>
          <div className="p-4 border rounded shadow">
            <h3>Project 2</h3>
            <p>Description of the project.</p>
            <a href="#" target="_blank">View Project</a>
          </div>
          <div className="p-4 border rounded shadow">
            <h3>Project 3</h3>
            <p>Description of the project.</p>
            <a href="#" target="_blank">View Project</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Portfolio;
  