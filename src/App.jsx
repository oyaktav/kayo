import React, { useState } from 'react';
import './App.css';

/* --- SUAS IMAGENS --- */
import fotoPerfil from './assets/img1.png';
import imgMapa from './assets/img2.png';
import imgProjeto1 from './assets/arte.png';
import imgProjeto2 from './assets/ferrari.png';
import imgProjeto3 from './assets/sicliko.png'; 
import iconPasta from './assets/icon.png';
import iconInstagram from './assets/icon-ig.png';
import iconPastaNova from './assets/pasta.png';
// Importe as fotos que você quer usar (use os nomes reais dos arquivos na sua pasta assets)
import capaA from './assets/fotoA3.png';
import fotoA1 from './assets/fotoA1.png';
import fotoA2 from'./assets/fotoA2.png';
import fotoA3 from'./assets/fotoA3.png';
import fotoA4 from './assets/fotoA4.png';
import fotoA5 from'./assets/fotoA5.png';
import fotoA6 from'./assets/fotoA6.png';


import capaB from './assets/capaB.png';
import fotoB1 from './assets/fotoB1.png';
import fotoB2 from'./assets/fotoB2.png';
import fotoB3 from'./assets/fotoB3.png';
import fotoB4 from './assets/fotoB4.png';
import fotoB5 from'./assets/fotoB5.png';
import fotoB6 from'./assets/fotoB6.png';



import bio from './assets/imgMapa.png';
import eu from './assets/eu.png';
import perfil from './assets/perfil.png';

import capaC from './assets/fotoC1.png';
import fotoC1 from './assets/fotoC1.png';
import fotoC2 from'./assets/fotoC2.png';
import fotoC3 from'./assets/fotoC3.png';
import fotoC4 from './assets/fotoC4.png';
import fotoC5 from'./assets/fotoC5.png';
import fotoC6 from'./assets/fotoC6.png';

import capaD from './assets/fotoD2.png';
import fotoD1 from './assets/fotoD1.png';
import fotoD2 from'./assets/fotoD2.png';
import fotoD3 from'./assets/fotoD3.png';
import fotoD4 from './assets/fotoD4.png';




const meusProjetos = [
  {
    id: 1,
    titulo: "Sicliko",
    capa: capaA, 
    // Usamos o nome 'fotos' para bater com o .map que você já tem
    fotos: [capaA, fotoA1, fotoA2, fotoA3, fotoA4, fotoA5, fotoA6], 
    descricao: "Identidade visual e direção criativada da marca."
  },
  {
    id: 2,
    titulo: "Ferrari Auto Center",
    capa: capaB, 
    fotos: [capaB, fotoB1, fotoB2, fotoB3, fotoB4, fotoB5, fotoB6], 
    descricao: "Logo e identidade visual da marca."
  },
    {
    id: 2,
    titulo: "Ferrari Auto Center",
    capa: capaB, 
    fotos: [capaB, fotoB1, fotoB2, fotoB3, fotoB4, fotoB5, fotoB6], 
    descricao: "Logo e identidade visual da marca."
  },
    
    {
    id: 3,
    titulo: "Camping Turvo",
    capa: capaC, 
    fotos: [capaC, fotoC1, fotoC2, fotoC3, fotoC4, fotoC5, fotoC6], 
    descricao: "Logo e identidade visual da marca."
  },
    {
    id: 4,
    titulo: "3% of Virgil in Slawnm",
    capa: capaD, 
    fotos: [capaD, fotoD1, fotoD2, fotoD3, fotoD4], 
    descricao: "Releitura da arte de Slawn em mouse pad."
  },
  
];
  // Adicione mais projetos aqui se quiser



function App() {
  const [telaAtual, setTelaAtual] = useState('desktop');
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  

  // --- CONFIGURAÇÃO DAS ABAS (MANTIDO O ESPAÇAMENTO PERFEITO) ---
  const abasProjetos = [
    { 
      id: 1, 
      img: imgProjeto1,
      titulo: "Camping Turvo", 
      url: "campingturvo.com/projeto", 
      top: '30px',      // Fundo
      scale: 1, 
      z: 1
    },
    { 
      id: 2, 
      img: fotoD2, 
      titulo: "3%of Virgil in Slkawn", 
      url: "3%ofvirgil.com/projeto", 
      top: '150px',     // Distância para ver a foto de trás
      scale: 1, 
      z: 2
    },
    { 
      id: 3, 
      img: imgProjeto3, 
      titulo: "Sicliko", 
      url: "sicliko.com/projeto", 
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
          
          {/* PILHA DE PROJETOS (STACK)  */}
          <div className="home-stack-wrapper">
            {abasProjetos.map((proj) => (
              <div 
                key={proj.id}
                className="stack-card"
                style={{ top: proj.top, zIndex: proj.z, transform: `scale(${proj.scale})` }}
                onClick={() => setTelaAtual('grid_projetos')}
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
            </div>
      )}

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
              <div className="msg-text">Direção criativa , direção de arte , marcas e projetos criativos</div>
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
              <div className="msg-text">Sites , marketing e administração de perfis </div>
            </div>

          </div>

          {/* Perfil */}
          <div className="widget" style={{ top: '15%', right: '-10%', width: '650px', height: '500px' }} onClick={() => irPara('bio')}>
            <img src={imgMapa} alt="Mapa" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            <div style={{position:'absolute', bottom:10, left:10, background:'white', padding:'2px 8px', borderRadius:8, fontSize:'0.7rem', fontWeight:'bold'}}></div>
          </div>

          {/* --- WIDGET GMAIL (CONTATO/ORÇAMENTO) --- */}
  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kayotaveira2506@gmail.com&su=Orçamento - Projeto de Design"
  target="_blank" // Abre em uma nova aba para não fechar seu site
  rel="noopener noreferrer"
  style={{ 
    textDecoration: 'none',
    bottom: '23%', 
    right: '2%', 
    width: '400px', 
    height: '500px', // Mudei para auto para o conteúdo caber
    padding: '30px', // Reduzi de 150px para 30px para o texto aparecer
    background: '#ffffff',
    borderRadius: '25px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    borderTop: '20px solid #f1f3f4', 
    borderBottom: '5px solid #f1f3f4',
    position: 'absolute',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  {/* BOLINHAS DE CONTROLE NO TOPO (Ajustei a posição para aparecerem) */}
  <div style={{ display: 'flex', gap: '5px', position: 'absolute', top: '-13px', left: '15px' }}> 
    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#d93025' }}>●</div>
    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#e4cd00' }}>●</div>
    <div style={{ fontWeight: '700', fontSize: '1.1rem', color: '#25d934' }}>●</div>
  </div> 

  {/* CONTEÚDO DO E-MAIL */}
  <div style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
    <div style={{ fontSize: '0.95rem', color: '#333', marginBottom: '10px' }}>
      <span style={{ color: '#888' }}>Para:</span> kayotaveira2506@gmail.com
    </div>
    <div style={{ fontSize: '0.95rem', color: '#333', marginBottom: '15px' }}>
      <span style={{ color: '#888' }}>Assunto:</span> Novo Orçamento
    </div>
    
    {/* BOX DE MENSAGEM */}
    <div style={{ 
      background: '#f8f9fa', 
      padding: '15px', 
      borderRadius: '15px', 
      fontSize: '0.85rem', 
      color: '#666', 
      minHeight: '80px',
      lineHeight: '1.4',
      border: '1px solid #eee'
    }}>
      Clique aqui para redigir sua mensagem...
    </div>
    
    <p style={{ fontSize: '0.7rem', color: '#aaa', marginTop: '10px', textAlign: 'center' }}>
      (Ao clicar, seu aplicativo de e-mail será aberto)
    </p>

  </div>

</a>
       {/* ig - Bloco Corrigido e Simplificado */}
<div  
  style={{ 
    position: 'absolute', 
    top: '8%', 
    left: '75%', 
    transform: 'translate(-70%, -37%)', 
    textAlign: 'center', 
    cursor: 'pointer',
    width: '130px', /* Define uma largura fixa para ajudar na centralização */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }} 
  onClick={() => window.open('https://www.instagram.com/modcarreira18/', '_blank')}
>
  <img 
    src={iconInstagram} 
    alt="Spotify" 
    style={{ 
      width: '160%', 
      height: 'auto', 
      display: 'block',
      marginBottom: '-25px' /* Removendo qualquer espaço extra da imagem */
    }} 
  />
  
  <p style={{ 
    fontSize: '1.7rem', 
    fontWeight: 'bold', 
    color: '#000', 
    margin: 0,        /* Zera as margens padrão do navegador */
    padding: 0,
    width: '100%',
    textAlign: 'center'
  }}>
Instagram
  </p>
</div>
     
{/*behence*/}
<div 
  style={{ 
    position: 'absolute', 
    top: '12%', 
    left: '71%', 
    transform: 'translate(61%, -70%)', 
    textAlign: 'center', 
    cursor: 'pointer' 
  }} 
  onClick={() => window.open('https://www.behance.net/ccalidadi', '_blank')}
>
  <img src={iconPasta} alt="Instagram" style={{ width: '170px' }} />
  
  <p style={{ fontSize: '1.7rem', fontWeight: 'bold', marginTop: '-8px', color: '#000000' }}>
   Behance
  </p>
</div>

{/* Ícone de Pasta - Navegação Interna */}
<div 
  style={{ 
    position: 'absolute', 
    top: '80%', 
    left: '0%', 
    transform: 'translate(20%, 20%)', // Ajustado para ficar abaixo do Instagram
    textAlign: 'center', 
    cursor: 'pointer' 
  }} 
  onClick={() => setTelaAtual('grid_projetos')}
>
  <img 
    src={iconPastaNova} 
    alt="Meus Projetos" 
    style={{ 
      width: '195px', 
      display: 'block',
      mixBlendMode: 'multiply' // Remove o fundo branco se a imagem tiver
    }} 
  />
  <p style={{ 
    fontSize: '1.7rem', 
    fontWeight: 'bold', 
    color: '#000', 
    marginTop: '-25px' 
    
  }}>
  Projetos
  </p>
</div>

{/* --- WIDGET INDEPENDENTE: BIO --- */}
<div 
  onClick={() => setTelaAtual('bio')}
  style={{
    position: 'absolute', top: '700px', left: '-200px', // Ajuste a posição aqui
    width: '750px', background: '#fff', borderRadius: '20px',height: '600px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)', cursor: 'pointer',
    borderTop: '20px solid #e0e0e0', borderBottom: '20px solid #e0e0e0',
    overflow: 'hidden', textAlign: 'center', transition: 'transform 0.2s'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <img src={bio} style={{ width: '100%', height: '500px', objectFit: 'cover' }} alt="Bio Widget" />
  <p style={{ fontSize: '12px', fontWeight: 'bold', margin: '5px 0', color: '#000' }}></p>
</div>

{/* --- WIDGET INDEPENDENTE: INSTAGRAM --- */}
<div 
  onClick={() => window.open('https://www.instagram.com/modcarreira18/', '_blank')}
  style={{
    position: 'absolute', top: '1100px', left: '450px', // Fica ao lado do outro
    width: '700px', background: '#fff', borderRadius: '25px',height: '550px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)', cursor: 'pointer',
    borderTop: '12px solid #e0e0e0', borderBottom: '12px solid #e0e0e0',
    overflow: 'hidden', textAlign: 'center', transition: 'transform 0.2s'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <img src={perfil} style={{ width: '100%', height: '540px', objectFit: 'cover' }} alt="Insta Widget" />
  <p style={{ fontSize: '12px', fontWeight: 'bold', margin: '5px 0', color: '#000' }}>INSTAGRAM</p>
</div>

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
    <div className="mac-window" style={{ 
      padding: '0', 
      flexDirection: 'column', 
      width: '900px', 
      height: '900px', 
      background: '#ffffff', 
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
    }}>
      
      {/* HEADER DA JANELA */}
      <div style={{ 
        width: '100%', 
        padding: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        position: 'relative'
      }}>
        <div className="dot red" style={{ cursor: 'pointer' }} onClick={fechar}></div>
        <h2 style={{ color: '#000', fontSize: '1.5rem', marginLeft: '20px', fontWeight: 'bold' }}>Sobre Mim</h2>
      </div>

      {/* ÁREA DE CONTEÚDO */}
      <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%' }}>
        
        {/* TEXTO DE INTRODUÇÃO (Agora com mais espaço para crescer) */}
        <div style={{ textAlign: 'center', padding: '-0px 25px' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#000', 
            maxWidth: '750px', 
            margin: '0 auto', 
            lineHeight: '1.8',
            textAlign: 'center' 
          }}>
             Kayo Taveira é um criativo de 18y  autodidata de goiás , nascido em goiânia onde atualmente cursa publicidade e propaganda. Desde novo desenvolveu o gosto por expor suas ideias através da arte e criar coisas do zero, o que resultou em uma ansia de tudo aquilo que pode aprender sobre arte e comuicação e na curiosidade de até onde seu sonho e aquilo que ama podem te levar  . Seu trabalho cruza design, arte, moda e identidade , guiado por uma sensibilidade criativa que move o potencial de tudo que vê. Um coringa diciplinar , Kayo flutua entre projetos de direção criativa ,arte ,design, marcas , artistas e produtos que buscam identidade e originalidade. Sua identidade nasce do choque entre refências de rua e da arte classica e comtemporanea ,unindo arte , moda e cultura urbana . Cada projeto é visto e trabalhado com e  como uma experiência , com  foco maximo aos detalhes, impacto visual e social e a construção de narrativas que se conectam com pessoas e grupos .  
          </p>
        </div>

        {/* WIDGETS DESLOCADOS PARA BAIXO */}
        {/* Foto 1 (Esquerda) */}
        <div style={{
          position: 'absolute', bottom: '0px', left: '70px',
          width: '280px', background: '#fff', borderRadius: '25px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)', transform: 'rotate(-6deg)', zIndex: 3,
          borderTop: '15px solid #e0e0e0', borderBottom: '15px solid #e0e0e0',
          overflow: 'hidden'
        }}>
          <img src={bio} style={{ width: '100%', height: '220px', objectFit: 'cover' }} alt="Bio 1" />
        </div>

        {/* Foto 2 (Centro/Topo da pilha inferior) */}
        <div style={{
          position: 'absolute', bottom: '0px', left: '310px',
          width: '280px', background: '#fff', borderRadius: '25px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.2)', transform: 'rotate(2deg)', zIndex: 5,
          borderTop: '15px solid #e0e0e0', borderBottom: '15px solid #e0e0e0',
          overflow: 'hidden'
        }}>
          <img src={eu} style={{ width: '100%', height: '260px', objectFit: 'cover' }} alt="Bio 2" />
        </div>

        {/* Foto 3 (Direita) */}
        <div style={{
          position: 'absolute', bottom: '0px', left: '600px',
          width: '280px', background: '#fff', borderRadius: '25px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)', transform: 'rotate(-3deg)', zIndex: 4,
          borderTop: '30px solid #e0e0e0', borderBottom: '15px solid #e0e0e0',
          overflow: 'hidden'
        }}>
          <img src={imgMapa} style={{ width: '100%', height: '220px', objectFit: 'cover' }} alt="Bio 3" />
        </div>

      </div>
    </div>
  </div>
)}
      {telaAtual === 'contact' && (
        <div className="window-overlay">
           <div className="mac-window" style={{width: '900px', height: '900px'}}>
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

      {/* --- NÍVEL 1: GRADE DE PROJETOS (Abre ao clicar na pasta.png) --- */}
      {telaAtual === 'grid_projetos' && (
        <div className="window-overlay">
          <div className="mac-window" style={{width: '900px', height: '900px'}}>
            <div className="title-bar">
              <div className="dot red" onClick={() => setTelaAtual('desktop')}></div>
              <span style={{fontSize: '0.8rem', color: '#fff'}}></span>
            </div>
            <div style={{padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
              {meusProjetos.map(proj => (
                <div key={proj.id} onClick={() => { setProjetoSelecionado(proj); setTelaAtual('galeria_projeto'); }} style={{cursor: 'pointer', textAlign: 'center'}}>
                  <img src={proj.capa} style={{width: '420px', height: '420px', objectFit: 'cover', borderRadius: '10px'}} />
                  <p style={{fontSize: '12px', marginTop: '5px'}}>{proj.titulo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- NÍVEL 2: GALERIA DO PROJETO (Abre ao clicar em um projeto específico) --- */}
      {telaAtual === 'galeria_projeto' && projetoSelecionado && (
        <div className="window-overlay">
          <div className="mac-window" style={{width: '900px', height: '85vh'}}>
            <div className="title-bar">
              {/* O botão vermelho aqui volta para a GRADE de projetos, não para o desktop */}
              <div className="dot red" onClick={() => setTelaAtual('grid_projetos')}></div>
              <span style={{fontSize: '0.8rem', color: '#fff'}}>{projetoSelecionado.titulo}</span>
            </div>
            <div style={{padding: '30px', overflowY: 'auto', textAlign: 'center'}}>
              <h2>{projetoSelecionado.titulo}</h2>
              <p style={{color: '#ccc', marginBottom: '20px'}}>{projetoSelecionado.descricao}</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                {projetoSelecionado.fotos.map((url, index) => (
                  <img key={index} src={url} style={{width: '90%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)'}} />
                ))}
              </div>
            </div>
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

