import React, { useState } from 'react';
import './App.css';

/* --- SUAS IMAGENS --- */
import fotoPerfil from './assets/img1.png';
import imgMapa from './assets/img2.png';
import imgProjeto1 from './assets/img3.png';
import imgProjeto2 from './assets/img3.png'; 
import imgProjeto3 from './assets/img3.png'; 
import iconPasta from './assets/icon.png';

function App() {
  const [telaAtual, setTelaAtual] = useState('desktop');
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  // --- CONFIGURAÇÃO DAS ABAS (MANTIDO O ESPAÇAMENTO PERFEITO) ---
  const abasProjetos = [
    { 
      id: 1, 
      img: imgProjeto1, 
      titulo: "Identidade Street", 
      url: "kayo.com/projeto", 
      top: '30px',      // Fundo
      scale: 0.9, 
      z: 1 
    },
    { 
      id: 2, 
      img: imgProjeto2, 
      titulo: "Design Camping", 
      url: "kayo.com/projeto", 
      top: '150px',     // Distância para ver a foto de trás
      scale: 0.95, 
      z: 2 
    },
    { 
      id: 3, 
      img: imgProjeto3, 
      titulo: "Direção de Arte", 
      url: "kayo.com/projeto", 
      top: '330px',    // Distância para ver a foto do meio
      scale: 1, 
      z: 3 
    },
  ];

  const irPara = (tela) => setTelaAtual(tela);
  const abrirDetalhe = (proj) => { setProjetoSelecionado(proj); setTelaAtual('detail'); };
  const fechar = () => { setTelaAtual('desktop'); setProjetoSelecionado(null); };

  return (
    <div>
      {/* Botão Voltar */}
      {telaAtual !== 'desktop' && (
        <div className="home-btn" onClick={fechar}>Pagina Inicial</div>
      )}

      {/* --- TELA 1: DESKTOP --- */}
      {telaAtual === 'desktop' && (
        <div className="desktop-container">
          
          {/* PILHA DE PROJETOS (STACK) - NÃO MEXI NISSO */}
          <div className="home-stack-wrapper">
            {abasProjetos.map((proj) => (
              <div 
                key={proj.id}
                className="stack-card"
                style={{ top: proj.top, zIndex: proj.z, transform: `scale(${proj.scale})` }}
                onClick={() => abrirDetalhe(proj)}
              >
                <div className="stack-header">
                  <span style={{fontSize:'1rem', fontWeight:'bold'}}>×</span>
                  <span className="stack-url">{proj.url}</span>
                  <span></span>
                </div>
                <img src={proj.img} alt={proj.titulo} style={{width:'100%', height:'calc(100% - 25px)', objectFit:'cover'}} />
              </div>
            ))}
          </div>

          {/* --- NOVAS NOTIFICAÇÕES (MENSAGENS iPHONE) --- */}
          <div className="notifications-wrapper">
            
            {/* Mensagem 1 */}
            <div className="ios-msg">
              <div className="msg-header">
                <div className="msg-app">
                  <div className="msg-icon"><div className="bubble-icon"></div></div>
                  MENSAGENS
                </div>
                <span style={{fontSize: '0.7rem', color: '#666'}}>agora</span>
              </div>
              <div className="msg-sender">Kayo Taveira</div>
              <div className="msg-text">Direção criativa e direção de arte</div>
            </div>

            {/* Mensagem 2 */}
            <div className="ios-msg">
              <div className="msg-header">
                <div className="msg-app">
                  <div className="msg-icon"><div className="bubble-icon"></div></div>
                  MENSAGENS
                </div>
                <span style={{fontSize: '0.7rem', color: '#666'}}>agora</span>
              </div>
              <div className="msg-sender">Kayo Taveira</div>
              <div className="msg-text">Marcas, projetos criativos , artista e etc...</div>
            </div>

          </div>

          {/* Widget MAPA */}
          <div className="widget" style={{ top: '15%', right: '30%', width: '325px', height: '230px' }} onClick={() => irPara('bio')}>
            <img src={imgMapa} alt="Mapa" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            <div style={{position:'absolute', bottom:10, left:10, background:'white', padding:'2px 8px', borderRadius:8, fontSize:'0.7rem', fontWeight:'bold'}}></div>
          </div>

          {/* Widget GMAIL */}
          <div className="widget" style={{ bottom: '28%', right: '30%', width: '450px', padding: '100px' }} onClick={() => irPara('contact')}>
            
            <div style={{fontWeight: '600', marginBottom: '10px', color: '#d93025'}}>• </div>
            <div style={{fontWeight: '600', marginBottom: '10px', color: '#d9af25'}}>• </div>
            <div>Novo Orçamento</div>
            <div style={{fontSize:'0.8rem', color:'#666', marginTop:5}}>E-mail:
              Assunto:
              Mensagem
            </div>
          </div>

          {/* Ícone Pasta */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-70%, -37%)', textAlign: 'center', cursor: 'pointer' }} onClick={() => irPara('https://open.spotify.com/playlist/39SNe68VOjDkZVIvm2OeSR?si=9V8eM9SJTq2WkU0j5imJZQ')}>
            <img src={iconPasta} alt="Pasta" style={{ width: '125px' }} />
            <div style={{background: 'rgba(0,0,0,0.0)', padding:'250px 0px', borderRadius:'125px', fontSize: '1.8rem', fontWeight: '600', marginTop: 0}}></div>
          </div>

        </div>
      )}

      {/* --- OUTRAS TELAS --- */}
      {telaAtual === 'detail' && projetoSelecionado && (
        <div className="window-overlay">
          <div className="mac-window" style={{width: '800px', height: '90vh'}}>
            <div className="title-bar"><div className="dot red" onClick={fechar}></div><span style={{fontSize: '0.8rem', color: '#ffffff'}}>{projetoSelecionado.titulo}</span></div>
            <div style={{padding: '40px', overflowY: 'auto', display:'flex', flexDirection:'column', alignItems:'center'}}>
              <h1 style={{marginBottom: 20}}>{projetoSelecionado.titulo}</h1>
              <img src={projetoSelecionado.img} style={{maxWidth: '100%', borderRadius: '8px'}} alt="Detalhe" />
              <p style={{marginTop: '30px', maxWidth: '600px', lineHeight: 1.6, color: '#fffbfb'}}>Descrição do projeto...</p>
            </div>
          </div>
        </div>
      )}
      
      {telaAtual === 'bio' && (
        <div className="window-overlay">
           <div className="mac-window" style={{padding: '0', flexDirection: 'row', width: '700px', height: '400px'}}>
             <div style={{flex: 1, background: '#f9f9f9', padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
               <div className="dot red" style={{marginBottom: 20}} onClick={fechar}></div>
               <h2>Sobre Mim</h2>
               <p style={{marginTop: 15, lineHeight: 1.6, fontSize: '0.9rem', color: '#555'}}>Sou o Kayo</p>
             </div>
             <div style={{flex: 1}}><img src={fotoPerfil} style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Kayo" /></div>
           </div>
        </div>
      )}

      {telaAtual === 'contact' && (
        <div className="window-overlay">
           <div className="mac-window" style={{width: '600px', height: '450px'}}>
             <div className="title-bar"><div className="dot red" onClick={fechar}></div></div>
             <form style={{padding: '40px', display: 'flex', flexDirection: 'column', gap: '15px', height: '100%'}}>
               <h2 style={{color: '#333'}}>Fale Comigo</h2>
               <input placeholder="Email" style={{padding: '12px', border: '1px solid #ddd', borderRadius: 8}} />
               <textarea placeholder="Mensagem..." style={{padding: '12px', border: '1px solid #ddd', borderRadius: 8, flex: 1, resize: 'none'}}></textarea>
               <button style={{padding: '12px', background: '#007aff', color: 'white', border: 'none', borderRadius: 8, fontWeight: 'bold'}}>Enviar Email</button>
             </form>
           </div>
        </div>
      )}
    </div>
  );
}
{/* Widget Perfil iCloud */}
<div className="icloud-profile-widget" style={{ top: '200px', left: '200px' }}>
  <div className="icloud-avatar-container">
    <img 
      src={fotoPerfil} 
      alt="Perfil iCloud" 
      className="icloud-avatar" 
    />
  </div>
  <div className="icloud-info">
    <h2 className="icloud-name">Kayo Taveira</h2>
    <p className="icloud-details">ID Apple, iCloud+, Mídia e Compras</p>
  </div>
  {/* Ícone de seta lateral característico do iOS */}
  <div className="icloud-arrow">
    <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
      <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#C7C7CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</div>

export default App;