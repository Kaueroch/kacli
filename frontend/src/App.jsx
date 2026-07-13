import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="logo">
          <h2>Finanças</h2>
        </div>
        <ul className="nav-links">
          <li className="active"><a href="#dashboard">Dashboard</a></li>
          <li><a href="#transacoes">Transações</a></li>
          <li><a href="#orcamento">Orçamento</a></li>
          <li><a href="#relatorios">Relatórios</a></li>
          <li><a href="#configuracoes">Configurações</a></li>
        </ul>
      </nav>
      
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="user-profile">
            <div className="avatar">KA</div>
          </div>
        </header>
        
        <div className="dashboard-grid">
          <div className="card balance-card">
            <h3>Saldo Atual</h3>
            <p className="amount">R$ 12.450,00</p>
            <span className="trend positive">+2.5% este mês</span>
          </div>
          
          <div className="card income-card">
            <h3>Receitas</h3>
            <p className="amount success">R$ 15.300,00</p>
          </div>
          
          <div className="card expense-card">
            <h3>Despesas</h3>
            <p className="amount danger">R$ 2.850,00</p>
          </div>
          
          <div className="card full-width">
            <h3>Últimas Transações</h3>
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Categoria</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 Jul, 2026</td>
                  <td>Salário</td>
                  <td><span className="tag tag-income">Receita</span></td>
                  <td className="success">+ R$ 15.000,00</td>
                </tr>
                <tr>
                  <td>10 Jul, 2026</td>
                  <td>Supermercado</td>
                  <td><span className="tag tag-expense">Alimentação</span></td>
                  <td className="danger">- R$ 450,00</td>
                </tr>
                <tr>
                  <td>08 Jul, 2026</td>
                  <td>Conta de Luz</td>
                  <td><span className="tag tag-expense">Moradia</span></td>
                  <td className="danger">- R$ 150,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
