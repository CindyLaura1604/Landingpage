function App() {
  return (
    <div>
      
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#4B0082" }}>
        <div className="container">
    
          <a className="navbar-brand" href="#home">Trilha Tech</a>
        </div>
      </nav>
      <div id="carouselExample" className="carousel slide my-5">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./Jovem com estilo casual e tecnologia.png" className="d-block w-100" alt="Persona" style={{ height: "400px", backgroundColor: "#ddd" }} />
          </div>

          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="..." style={{ height: "400px", backgroundColor: "#ddd" }} />
          </div>

          <div className="carousel-item">
            <img src="" className="d-block w-100" alt="..." style={{ height: "400px", backgroundColor: "#ddd" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <div className="container text-center mb-5">
        <p>
          O Trilha Tech é uma plataforma gamificada que ajuda estudantes a
          identificar suas afinidades e escolher carreiras na área de tecnologia.
        </p>
      </div>

      <div className="container text-center my-5">
        <h1>Descubra seu potencial em Tecnologia!</h1>
        <button className="btn btn-primary btn-lg" style={{ backgroundColor: "#4B0082", border: "none" }}>
          Começar agora
        </button>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card benefit-card">
              <div className="card-body">
                <h5 className="card-title">Testes Vocacionais</h5>
                <p className="card-text">
                  Descubra suas afinidades com base no modelo RIASEC adaptado para tecnologia.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card benefit-card">
              <div className="card-body">
                <h5 className="card-title">Missões Gamificadas</h5>
                <p className="card-text">
                  Resolva desafios práticos e acumule pontos enquanto aprende.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card benefit-card">
              <div className="card-body">
                <h5 className="card-title">Perfil Tech</h5>
                <p className="card-text">
                  Acompanhe sua evolução e receba recomendações de carreiras compatíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-light text-center py-3" style={{ backgroundColor: "#4B0082" }}>
        <p>© 2026 Trilha Tech - CEDUP Perfeito Manoel de Aguiar</p>
      </footer>
    </div>
  );
}

export default App;
