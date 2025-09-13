import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Video from 'yet-another-react-lightbox/plugins/video';

function GaleriaCompeticoesLightbox({ open, onClose }) {
  const slides = [
    { src: '/competicao1.jpg', alt: 'Competição 1' },
    { src: '/competicao2.jpg', alt: 'Competição 2' },
    { src: '/competicao3.jpg', alt: 'Competição 3' },
    {
      type: 'video',
      src: '/video-competicao.mp4',
      alt: 'Vídeo da competição',
      autoplay: true,
      controls: true,
      sources: [
        { src: '/video-competicao.mp4', type: 'video/mp4' }
      ]
    },

    // Adicione mais fotos/vídeos de competições
  ];
  return (
    <Lightbox open={open} close={onClose} slides={slides} plugins={[Video]} />
  );
}

function GaleriaTreinosLightbox({ open, onClose }) {
  const slides = [
    { src: '/treino1.jpg', alt: 'Treino 1' },
    { src: '/treino2.jpg', alt: 'Treino 2' },
    { src: '/treino3.jpg', alt: 'Treino 3' },
    { src: '/treino4.jpg', alt: 'Treino 4' },
    { src: '/treino5.jpg', alt: 'Treino 5' },
    { src: '/treino6.jpg', alt: 'Treino 6' },
    { src: '/treino7.jpg', alt: 'Treino 7' },
    { src: '/treino8.jpg', alt: 'Treino 8' },
    { src: '/treino9.jpg', alt: 'Treino 9' },
    { src: '/treino10.jpg', alt: 'Treino 10' },
    { src: '/treino11.jpg', alt: 'Treino 11' },
   
    {
      type: 'video',
      src: '/video-treino.mp4',
      alt: 'Vídeo do treino',
      autoplay: true,
      controls: true,
      sources: [
        { src: '/video-competicao.mp4', type: 'video/mp4' }
      ]
    },
    {
      type: 'video',
      src: '/video-treino1.mp4',
      alt: 'Vídeo do treino1',
      autoplay: true,
      controls: true,
      sources: [
        { src: '/video-treino1.mp4', type: 'video/mp4' }
      ]
    },
       {
      type: 'video',
      src: '/video-treino2.mp4',
      alt: 'Vídeo do treino2',
      autoplay: true,
      controls: true,
      sources: [
        { src: '/video-treino2.mp4', type: 'video/mp4' }
      ]
    },
    // Adicione mais fotos/vídeos de treinos
  ];
  return (
    <Lightbox open={open} close={onClose} slides={slides} plugins={[Video]} />
  );
}

// Componente de grid de alunos campeões
function AlunosCampeoes() {
  const [selecionado, setSelecionado] = React.useState(null);
  const alunos = [
    {
      nome: 'Izabelly Costa',
      faixa: 'Faixa Marrom',
      foto: '/izabelly.jpg',
      instagram: '@bellynhafreitas.bjj',
      titulos: [
        'Campeã BRASILEIRO JIU-JITSU CBJJ 2024 ',
        'Campeã BRASILEIRO NO GI JIU-JITSU CBJJ 2025 ',
        'Campeã OPEN FORTALEZA CBJJ 2025 '
      ]
    },
    {
      nome: 'Bruno Lima',
      faixa: 'Faixa Marrom',
      foto: '/bruno.jpg',
      instagram: '@brunolima.bjj',
      titulos: [
        'Campeão BRASILEIRO JIU-JITSU CBJJ 2024 ',
        'Campeã OPEN FORTALEZA CBJJ 2025 ',
        'Campeã OPEN FORTALEZA CBJJ 2025 '
      ]
    },
    {
      nome: 'Anderson Furtunato',
      faixa: 'Faixa Marrom',
      foto: '/anderson.jpg',
      instagram: '@anderson_furtunatobjj',
      titulos: [
        'Campeão Regional Master'
      ]
    },
    {
      nome: 'Venicios Silva',
      faixa: 'Faixa Marrom',
      foto: '/venicios.jpg',
      instagram: '@veniciossilva02',
      titulos: [
        'Terceiro AJP TOUR JIU-JITSU FORTALEZA 2025 ',
        'Campeã OPEN FORTALEZA CBJJ 2025 ',
        'Terceiro BRASILEIRO NO GI JIU-JITSU CBJJ 2025'      ]
    },
    {
      nome: 'Maria Beatriz',
      faixa: 'Faixa Azul',
      foto: '/beatriz.jpg',
      instagram: '@mabiisilva_bjj',
      titulos: [
        'Campeão ADCC OPEN NATAL 2023',
        'Terceiro AJP TOUR JIU-JITSU FORTALEZA 2024'
      ]
    },
    {
      nome: 'Gustavo Silva',
      faixa: 'Faixa Azul',
      foto: '/gustavo.jpg',
      instagram: '@gustavin__bjj',
      titulos: [
        'Campeão AJP TOUR JIU-JITSU FORTALEZA 2024 ',
        'Terceiro OPEN FORTALEZA CBJJ 2025 ',
        'Vice OPEN FORTALEZA CBJJ 2025'  
      ]
    }
  ];

  return (
    <div>
      <div className="alunos-campeoes-grid">
        {alunos.map((aluno, idx) => (
          <div className="aluno-card-grid" key={aluno.nome} onClick={() => setSelecionado(idx)} style={{cursor: 'pointer'}}>
            <img
              src={aluno.foto}
              alt={aluno.nome}
              className="aluno-foto"
            />
            <div>
              <strong>{aluno.nome}</strong>
              <div className="faixa">{aluno.faixa}</div>
              {aluno.instagram && (
                <div className="instagram-aluno">
                  <a
                    href={`https://instagram.com/${aluno.instagram.replace('@','')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <img src="/instagram.png" alt="Instagram" style={{width: '20px', height: '20px', marginRight: '6px'}} /> {aluno.instagram}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {selecionado !== null && (
        <div className="titulos-aluno-grid">
          <div className="titulos-aluno-modal-content">
            <img src={alunos[selecionado].foto} alt={alunos[selecionado].nome} className="aluno-foto-modal" />
            <div>
              <h3>
                {alunos[selecionado].nome} {' '}
                {(() => {
                  const titulos = alunos[selecionado].titulos.join(' ').toLowerCase();
                  if (titulos.includes('campeã') || titulos.includes('campeão')) return '🥇';
                  if (titulos.includes('vice')) return '🥈';
                  if (titulos.includes('terceiro')) return '🥉';
                  return '';
                })()}
                {' '} - Títulos
              </h3>
              <ul>
                {alunos[selecionado].titulos.map((titulo, i) => {
                  let emoji = '';
                  const t = titulo.toLowerCase();
                  if (t.includes('campeã') || t.includes('campeão')) emoji = '🥇';
                  else if (t.includes('vice')) emoji = '🥈';
                  else if (t.includes('terceiro')) emoji = '🥉';
                  return (
                    <li key={i}>{emoji} {titulo}</li>
                  );
                })}
              </ul>
              <button onClick={() => setSelecionado(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [tab, setTab] = React.useState('titulos');
  const [openCompeticoes, setOpenCompeticoes] = React.useState(false);
  const [openTreinos, setOpenTreinos] = React.useState(false);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <div>
      {/* Cabeçalho com efeito Parallax */}
      <header className="parallax-header">
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <img src="/logo.png" alt="Logo Escola de Lutas Italo Kimura" className="logo" style={{margin: '0 auto 16px auto'}} />
        <p className="subtitle">
          Tradição, disciplina e excelência nas artes marciais. Afiliados à Nova União, uma das academias mais respeitadas do mundo.
        </p>
      </div>
      </header>

      {/* Sobre o Professor */}
      <section className="about">
        <div className="about-text">
          <h2>Professor <span className="red">Italo Kimura</span></h2>
          <p>
            Com mais de duas décadas de experiência nas artes marciais, o Professor Italo Kimura é uma referência no Jiu-Jitsu brasileiro. Sua dedicação e paixão pela arte suave transformaram centenas de vidas ao longo de sua carreira.
          </p>
          <p>
            Afiliado à renomada equipe Nova União, uma das academias mais conceituadas do mundo no Jiu-Jitsu e MMA, traz para seus alunos não apenas técnica, mas também os valores fundamentais das artes marciais: disciplina, respeito e perseverança.
          </p>
          <div className="stats">
            <div>
              <span className="icon">🏆</span>
              <h3>15+</h3>
              <p>Anos de Experiência</p>
            </div>
            <div>
              <span className="icon">👥</span>
              <h3>300+</h3>
              <p>Alunos Formados</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/italokimura.jpg" alt="Professor Italo Kimura" />
          <div className="nova-uniao-card">
            <h4>Nova União</h4>
            <p>
              Filiada à Nova União, equipe que formou campeões mundiais como BJ Penn, José Aldo, Marlon Moraes e muitos outros. Uma tradição de excelência que se reflete em nosso ensino.
            </p>
          </div>
        </div>
      </section>

      {/* Modalidades Disponíveis */}
      <section className="modalidades">
        <h2>Modalidades <span className="red">Disponíveis</span></h2>
        <p>
          Oferecemos modalidades para todos os níveis e objetivos, desde iniciantes até competidores de elite.
        </p>
        <Slider {...sliderSettings}>
          <div className="modalidade-card">
            <img src="/jiujitsu.jpg" alt="Jiu-Jitsu Gi" />
            <h3>Jiu-Jitsu Gi</h3>
            <ul>
              <li>Segunda-feira: 11h - 18h</li>
              <li>Terça-feira: 20h</li>
              <li>Quarta-feira: 18h</li>
              <li>Quinta-feira: 11h</li>
            </ul>
            <p>
              Arte marcial brasileira focada em técnicas de solo, alavancas e estrangulamentos. Desenvolve disciplina, técnica e estratégia.
            </p>
          </div>
          <div className="modalidade-card">
            <img src="/mma.jpg" alt="MMA Cardio" />
            <h3>MMA Cardio</h3>
            <ul>
              <li>Segunda-feira: 17h</li>
              <li>Quarta-feira: 17h</li>
              <li>Sexta-feira: 17h</li>
            </ul>
            <p>
              Treinamento cardiovascular inspirado nas artes marciais mistas. Combina técnicas de striking, grappling e condicionamento físico.
            </p>
          </div>
          <div className="modalidade-card">
            <img src="/nogi.jpg" alt="Jiu-Jitsu NO GI" />
            <h3>Jiu-Jitsu NO GI</h3>
            <ul>
              <li>Terça-feira: 11h </li>
              <li>Quinta-feira: 20h</li>
            </ul>
            <p>
              O Jiu-Jítsu No-Gi é uma modalidade do jiu-jítsu brasileiro praticada sem kimono, usando apenas roupas de compressão. A ausência das lapelas e mangas torna as lutas mais rápidas e dinâmicas, com foco em controle direto do corpo e finalizações ágeis.
            </p>
          </div>
          <div className="modalidade-card">
            <img src="/kids.jpg" alt="Jiu-Jitsu Kids" />
            <h3>Jiu-Jitsu Kids</h3>
            <ul>
              <li>Terça-feira: 17h/18h</li>
              <li>Quinta-feira: 17h/18h</li>
              <li>17h (4 a 8 anos)</li>
              <li>18h (9 a 14 anos)</li>
            </ul>
            <p>
              O Jiu-Jítsu Kids é um esporte divertido e seguro, onde as crianças aprendem a se defender, fazer amigos e trabalhar em equipe. Ele ajuda no crescimento saudável, melhora a coordenação, aumenta a confiança e ensina valores como respeito, disciplina e foco.
            </p>
          </div>
        </Slider>
      </section>

      {/* Galeria & Conquistas */}
      <section className="galeria">
        <h2>Galeria & <span className="red">Conquistas</span></h2>
        <p>
          Conheça nossa história de sucessos, nossos alunos campeões e o ambiente de nossa academia.
        </p>
        <div className="galeria-buttons">
          <button className={tab === 'treinos' ? 'red' : ''} onClick={() => setTab('treinos')}>Treinos e Competições</button>
          <button className={tab === 'titulos' ? 'red' : ''} onClick={() => setTab('titulos')}>Títulos do Professor</button>
          <button className={tab === 'alunos' ? 'red' : ''} onClick={() => setTab('alunos')}>Alunos Campeões</button>
        </div>
{tab === 'treinos' && (
  <div className="galeria-img-vertical">
    <div style={{display: 'flex', gap: '32px', justifyContent: 'center'}}>
      <div className="card-galeria" onClick={() => setOpenCompeticoes(true)} style={{cursor: 'pointer'}}>
        <h3>Competições</h3>
        <img src="/competicao1.jpg" alt="Competições" style={{width: '100%', maxWidth: '220px', borderRadius: '12px'}} />
      </div>
      <div className="card-galeria" onClick={() => setOpenTreinos(true)} style={{cursor: 'pointer'}}>
        <h3>Treinos</h3>
        <img src="/treino1.jpg" alt="Treinos" style={{width: '100%', maxWidth: '220px', borderRadius: '12px'}} />
      </div>
    </div>
  {/* Lightbox Competições */}
  <GaleriaCompeticoesLightbox open={openCompeticoes} onClose={() => setOpenCompeticoes(false)} />
  {/* Lightbox Treinos */}
  <GaleriaTreinosLightbox open={openTreinos} onClose={() => setOpenTreinos(false)} />
  </div>
)}

{tab === 'titulos' && (
  <div className="titulos-professor-vertical">
    <div className="titulo-card-vertical">
      <img src="/professor1.jpg" alt="Professor Campeão Mundial IBJJF" className="titulo-foto" />
      <div>
        <strong>Campeão Mundial IBJJF</strong>
        <div className="ano blue">2018-2020</div>
        <div>Faixa Preta Adulto</div>
      </div>
    </div>
    <div className="titulo-card-vertical">
      <img src="/professor2.jpg" alt="Professor Campeão Pan-Americano" className="titulo-foto" />
      <div>
        <strong>Campeão Pan-Americano</strong>
        <div className="ano blue">2017-2019</div>
        <div>Absoluto</div>
      </div>
    </div>
    <div className="titulo-card-vertical">
      <img src="/professor3.jpg" alt="Professor Campeão Brasileiro" className="titulo-foto" />
      <div>
        <strong>Campeão Brasileiro</strong>
        <div className="ano blue">2015-2021</div>
        <div>Múltiplas Categorias</div>
      </div>
    </div>
    <div className="titulo-card-vertical">
      <img src="/professor4.jpg" alt="Nova União Team Captain" className="titulo-foto" />
      <div>
        <strong>Nova União Team Captain</strong>
        <div className="ano blue">2020-Atual</div>
        <div>Liderança Técnica</div>
      </div>
    </div>
  </div>
)}

        {tab === 'alunos' && (
          <AlunosCampeoes />
        )}

      </section>
      {/* Regras do Tatame */}
      <section className="regras">
        <h2>Regras do <span className="red">Tatame</span></h2>
        <p>
          Nosso dojo é um lugar de respeito, disciplina e crescimento mútuo. Conheça as regras que mantêm nosso ambiente seguro e harmonioso.
        </p>
        <div className="regras-cards">
          <div>
            <h4>Higiene e Vestimenta</h4>
            <ul>
              <li>Uso obrigatório do kimono (gi) limpo e em bom estado</li>
              <li>Unhas cortadas e limpas</li>
              <li>Banho obrigatório antes e após os treinos</li>
              <li>Não treinar com feridas abertas ou doenças contagiosas</li>
              <li>Cabelos longos devem estar presos</li>
            </ul>
          </div>
          <div>
            <h4>Disciplina e Respeito</h4>
            <ul>
              <li>Cumprimentar o professor e colegas ao entrar e sair do tatame</li>
              <li>Respeitar hierarquia de faixas e graduações</li>
              <li>Não conversar durante as explicações técnicas</li>
              <li>Manter postura respeitosa dentro e fora da academia</li>
              <li>Chegadas atrasadas devem aguardar autorização do professor</li>
            </ul>
          </div>
          <div>
            <h4>Segurança no Treino</h4>
            <ul>
              <li>Obedecer às orientações do professor em todos os momentos</li>
              <li>Treinar dentro dos seus limites físicos</li>
              <li>Comunicar imediatamente qualquer lesão ou desconforto</li>
              <li>Não aplicar técnicas não ensinadas pelo professor</li>
              <li>Cuidar da segurança do parceiro de treino</li>
            </ul>
          </div>
          <div>
            <h4>Conduta Geral</h4>
            <ul>
              <li>Manter o tatame sempre limpo e organizado</li>
              <li>Não usar celular durante as aulas</li>
              <li>Respeitar o espaço e pertences dos colegas</li>
              <li>Contribuir para um ambiente positivo e acolhedor</li>
              <li>Representar a academia com honra fora do tatame</li>
            </ul>
          </div>
        </div>
        <div className="oss">
          <h3>OSS!</h3>
          <p>
            "OSS" é mais que uma saudação - é uma filosofia de vida que representa perseverança, respeito e determinação. Ao seguir essas regras, você não apenas mantém a tradição das artes marciais, mas também desenvolve o caráter e a disciplina que levaremos para toda a vida.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section className="contato">
        <h2>Entre em <span className="red">Contato</span></h2>
        <p>
          Pronto para começar sua jornada nas artes marciais? Entre em contato conosco e agende sua aula experimental gratuita.
        </p>
        <div className="contato-info">
          <div className="contato-endereco-localizacao">
            <h4>Endereço</h4>
            <p>
              Av. Lúcio José de Menezes<br /> 
              Bairro Croata<br />
              Croatá - CE<br />
              CEP: 62870-000
            </p>
            {/* Localização da escola de lutas */}
            <div className="localizacao-escola" style={{margin: '24px 0'}}>
              <h4>Localização</h4>
              <iframe
                title="Localização Escola de Lutas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.40729341057425!2d-38.45513896855884!3d-4.169541589668464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8b91f45174f5f%3A0x6ef8017e01d9fdd!2sEscola%20De%20Lutas%20I.K!5e0!3m2!1spt-BR!2sbr!4v1757730669373!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{border:0, borderRadius: '12px'}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="contato-telefone-funcionamento-email">
            <h4>Contato</h4>
            <div className="contato-buttons">
              <button className="whatsapp">WhatsApp</button>
              <a href="https://www.instagram.com/escoladelutas.ik?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <button className="instagram">Instagram</button>
              </a>
            </div>
            <h4>Email</h4>
            <p>contato@italokimura.com.br<br />academia@italokimura.com.br</p>
            <h4>Funcionamento</h4>
            <table>
              <tr><td>Segunda-Feira</td><td>08h - 21h</td></tr>
              <tr><td>Terça-Feira</td><td>08h - 22h</td></tr>
              <tr><td>Quarta-Feira</td><td>08h - 21h</td></tr>
              <tr><td>Quinta-Feira</td><td>08h - 22h</td></tr>
              <tr><td>Sexta-Feira</td><td>08h - 21h</td></tr>
              <tr><td>Sábado</td><td>09h - 17h</td></tr>
              <tr><td>Domingo</td><td>Fechado</td></tr>
            </table>
          </div>
        </div>
      </section>

      {/* Rodapé novo formato */}
      <footer className="footer novo-footer" style={{background: '#181818', color: '#fff', textAlign: 'center', padding: '48px 0 0 0', width: '100%'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
          <img src="/logo2.png" alt="Logo Escola de Lutas" style={{width: '90px', marginBottom: '18px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
          <h2 style={{fontWeight: 'bold', margin: 0, textAlign: 'center'}}>ESCOLA DE LUTAS</h2>
          <h3 style={{color: '#e53935', fontWeight: 'bold', margin: '8px 0 18px 0', textAlign: 'center'}}>ITALO KIMURA</h3>
          <p style={{fontSize: '1.2rem', margin: '0 0 18px 0', lineHeight: '1.5', maxWidth: '900px', textAlign: 'center'}}>
            Formando campeões e transformando vidas através das artes marciais. Afiliados à Nova União, trazemos excelência e tradição para cada treino.
          </p>
          <p style={{fontSize: '1.1rem', margin: '0 0 32px 0', color: '#bdbdbd', textAlign: 'center'}}>Academia filiada à Nova União desde 2019</p>
        </div>
      </footer>
    </div>
  );
}

export default App;