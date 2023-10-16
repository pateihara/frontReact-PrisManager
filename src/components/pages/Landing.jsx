import React from 'react'
import '../../css/Index.css'

import crm from '../../img/crm.png'
import image1 from '../../img/image-1.png'
import image2 from '../../img/image-2.png'
import icons1 from '../../img/icons/icons-1.svg'
import icons2 from '../../img/icons/icons-2.svg'
import icons3 from '../../img/icons/icons-3.svg'


export default function Landing() {
  return (
    <div>
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text">
              <h1>Prisma Manager</h1>
              <p>
                O primeiro CRM projetado para área de turismo. Faça mais para
                expandir seus negócios.
              </p>
              <div className="buttons">
                <a href="/login" className="btn btn-primary">
                  Login
                </a>
                <a href="/register" className="btn btn-secondary">
                  Cadastre-se
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={crm} alt="header-img" className="w-100" />
          </div>
        </div>
      </div>
    </section>


    <section className="setup">
      <div className="container">
        <div className="text-header text-center">
          <h3>Comece agora sem complicações</h3>
          <p>
            O primeiro CRM projetado para área de turismo. Faça mais para
            expandir seus negócios.
          </p>
        </div>
        <div className="items text-center">
          <div className="row">
            <div className="col-md-4">
              <div className="icons">
                <img src={icons1} alt="icons" />
              </div>
              <div className="desc">
                <h5>Crie uma conta agora</h5>
                <p>
                  Crie as etapas do seu funil de vendas. Adicione seus negócios
                  ou importe-os automaticamente de uma planilha ou CRM.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icons">
                <img src={icons2} alt="icons" />
              </div>
              <div className="desc">
                <h5>Configurar seu pipeline</h5>
                <p>
                  Receba alertas e lembretes automáticos para manter os negócios
                  sob controle. As previsões de vendas são atualizadas sempre
                  que você avança um negócio no funil.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icons">
                <img src={icons3} alt="icons" />
              </div>
              <div className="desc">
                <h5>Acompanhar o progresso</h5>
                <p>
                  Revise as análises para ajudá-lo a identificar oportunidades
                  de fechar mais vendas. Automatize tarefas de rotina e trabalho
                  administrativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="information">
      <div className="container">
        <div className="row info-1">
          <div className="col-md-6">
            <div className="text-information">
              <h5>Obtenha mais clientes para o seu negócio</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio vel eaque veritatis eos, deleniti consequatur rem
                fugiat inventore dolor quod quidem, reprehenderit adipisci
                officia! Maiores maxime esse consequatur excepturi adipisci.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={image1} alt="img-1" className="w-100" />
          </div>
        </div>
        <div className="row info-2">
          <div className="col-md-6">
            <img src={image2} alt="img-2" className="w-100" />
          </div>
          <div className="col-md-6">
            <div className="text-information">
              <h5>Baixo orçamento aparência profissional de alta qualidade</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio vel eaque veritatis eos, deleniti consequatur rem
                fugiat inventore dolor quod quidem, reprehenderit adipisci
                officia! Maiores maxime esse consequatur excepturi adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
